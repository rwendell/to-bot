import { gql, GraphQLClient } from "graphql-request";
import { ProfileAuthorization, AuthorizationType } from "../graphql/generated";

const STARTGG_GRAPHQL = "https://api.start.gg/gql/alpha";

const client = new GraphQLClient(STARTGG_GRAPHQL, {
	headers: {
		Authorization: `Bearer ${process.env.STARTGG_PAT}`,
	},
});

const GET_USER_BY_ID = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      discriminator
      name
      authorizations(types: [DISCORD]) {
        type
        externalId
        externalUsername
      }
    }
  }
`;

const GET_USER_BY_SLUG = gql`
  query GetUserBySlug($slug: String!) {
    user(slug: $slug) {
      id
      discriminator
      name
      authorizations(types: [DISCORD]) {
        type
        externalId
        externalUsername
      }
    }
  }
`;

const GET_USER_TOURNAMENTS = gql`
    query GetUserTournaments($id: ID!, $query: UserTournamentsPaginationQuery) {
        user(id: $id) {
            id
            tournaments(query: $query) {
                nodes {
                    id
                    name
                    slug
                    startAt
                    events {
                        id
                        name
                    }
                }
            }
        }
    }
`;

const GET_EVENT_PARTICIPANT = gql`
    query GetEventEntrant($eventId: ID!) {
        event(id: $eventId) {
            entrants(query: { filter: { name: "" } }) {
                nodes {
                    id
                    participants {
                        id
                        user {
                            id
                        }
                    }
                }
            }
        }
    }
`;

const REMOVE_PARTICIPANT = gql`
    mutation RemoveParticipant($participantId: ID!) {
        deleteParticipant(participantId: $participantId, validationKey: "removeParticipant")
    }
`;

interface UserResponse {
	user: {
		id: string;
		discriminator: string;
		name: string;
		authorizations: ProfileAuthorization[];
	} | null;
}

interface TournamentNode {
	id: string;
	name: string;
	slug: string;
	startAt: number;
	events: {
		id: string;
		name: string;
	}[];
}

interface TournamentsResponse {
	user: {
		id: string;
		tournaments: {
			nodes: TournamentNode[];
		};
	} | null;
}

interface VerifyResult {
	id: string;
	name: string;
	discordLinked: boolean;
	discordId: string | null;
}

export interface UserTournament {
	id: string;
	name: string;
	slug: string;
	startDate: Date;
	events: {
		id: string;
		name: string;
	}[];
}

export class StartGGService {
	async findPlayer(input: string): Promise<VerifyResult | null> {
		console.log("[StartGG] Querying user:", input);

		try {
			if (/^\d+$/.test(input)) {
				console.log("[StartGG] Trying as numeric ID...");
				const data = await client.request<UserResponse>(GET_USER_BY_ID, {
					id: input,
				});
				console.log("[StartGG] Raw response:", JSON.stringify(data, null, 2));

				if (data.user) {
					return this.mapUser(data.user);
				}
			}

			const slug = input.startsWith("user/") ? input : `user/${input}`;
			console.log("[StartGG] Trying as slug:", slug);

			const data = await client.request<UserResponse>(GET_USER_BY_SLUG, {
				slug,
			});
			console.log("[StartGG] Raw response:", JSON.stringify(data, null, 2));

			if (data.user) {
				return this.mapUser(data.user);
			}

			console.log("[StartGG] User not found");
			return null;
		} catch (error) {
			console.error("[StartGG] Error:", error);
			return null;
		}
	}

	async getUserTournaments(userId: string): Promise<UserTournament[]> {
		console.log("[StartGG] Getting tournaments for user:", userId);

		try {
			const data = await client.request<TournamentsResponse>(GET_USER_TOURNAMENTS, {
				id: userId,
				query: {
					perPage: 20,
					filter: {
						upcoming: true,
					},
				},
			});

			console.log("[StartGG] Tournaments response:", JSON.stringify(data, null, 2));

			if (!data.user?.tournaments?.nodes) {
				return [];
			}

			return data.user.tournaments.nodes.map((node) => ({
				id: node.id,
				name: node.name,
				slug: node.slug,
				startDate: new Date(node.startAt * 1000),
				events: node.events ?? [],
			}));
		} catch (error) {
			console.error("[StartGG] Error getting tournaments:", error);
			return [];
		}
	}

	async dqFromEvent(eventId: string, userId: string): Promise<boolean> {
		console.log("[StartGG] DQ - Finding participant:", eventId, userId);

		try {
			// First, get the participant ID via entrants
			const entrantData = await client.request<{
				event: {
					entrants: {
						nodes: {
							id: string;
							participants: { id: string; user: { id: string } }[];
						}[];
					};
				};
			}>(GET_EVENT_PARTICIPANT, { eventId });

			console.log("[StartGG] Entrant response:", JSON.stringify(entrantData, null, 2));

			// Find the entrant where user.id matches
			// Handle both "9860.0" (string) and 9860 (number) formats
			const normalizedUserId = String(userId).replace(/\.0$/, "");
			const entrant = entrantData.event?.entrants?.nodes?.find((e) =>
				e.participants?.some(
					(p) => String(p.user?.id).replace(/\.0$/, "") === normalizedUserId
				)
			);

			const participantId = entrant?.participants?.[0]?.id ?? entrant?.id;

			if (!participantId) {
				console.log("[StartGG] Participant not found");
				return false;
			}

			console.log("[StartGG] Found participant ID:", participantId);

			// Then delete
			const deleteData = await client.request<{
				deleteParticipant: boolean;
			}>(REMOVE_PARTICIPANT, { participantId });

			console.log("[StartGG] DQ response:", deleteData);
			return deleteData.deleteParticipant;
		} catch (error) {
			console.error("[StartGG] Error DQing:", error);
			return false;
		}
	}

	private mapUser(user: UserResponse["user"]): VerifyResult {
		const discordAuth = user?.authorizations?.find((a) => a.type === AuthorizationType.Discord);

		console.log("[StartGG] Found user. id:", user?.id, "discriminator:", user?.discriminator);
		console.log("[StartGG] Discord auth:", user?.authorizations);

		return {
			id: user!.id,
			name: user!.name ?? user!.discriminator,
			discordLinked: !!discordAuth,
			discordId: discordAuth?.externalId ?? null,
		};
	}
}

export const startggService = new StartGGService();

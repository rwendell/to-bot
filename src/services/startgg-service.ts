// TODO: StartGG API Service
// Handles all GraphQL queries to start.gg

const STARTGG_GRAPHQL = "https://api.start.gg/gql/alpha";

// TODO: GraphQL query to verify user
// - Input: start.gg username (slug)
// - Check if Discord is linked via authorizations
// - Return: user info + Discord auth status
// Query: query { player(slug: $username) { id, name, authorizations(types: [DISCORD]) { type, externalId } } }

// TODO: GraphQL query to get user's tournaments
// - Input: start.gg user ID
// - Return: list of tournaments user has entered
// Query: query { player(id: $userId) { id, name, events { id, name, tournament { id, name, slug } } } }

// TODO: GraphQL mutation to DQ user from tournament
// - Input: event ID, user ID
// - Mutation: mutate { eventParticipant(id: $eventId, userId: $userId) { delete { id } } }

export class StartGGService {
  // TODO: findPlayerByUsername(username: string)
  // - Query start.gg by username slug
  // - Return player object or null if not found
  // TODO: verifyDiscordLink(startggUserId: string, discordUserId: string)
  // - Check if start.gg user has Discord linked
  // - Return true if matches
  // TODO: getUserTournaments(startggUserId: string)
  // - Get all tournaments user has entered
  // - Return list of { tournamentId, tournamentName, tournamentSlug, eventId, eventName }
  // TODO: dqFromTournament(eventId: string, startggUserId: string)
  // - DQ user from specific tournament
  // - Return success/failure
}

export const startggService = new StartGGService();

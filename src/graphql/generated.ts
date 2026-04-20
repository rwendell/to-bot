import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: unknown; output: unknown; }
  Timestamp: { input: unknown; output: unknown; }
};

/** A set of actions available for an entity to take */
export type ActionSet = {
  id?: Maybe<Scalars['ID']['output']>;
};

/** Represents the state of an activity */
export enum ActivityState {
  /** Activity is active or in progress */
  Active = 'ACTIVE',
  /** Activity, like a set, has been called to start */
  Called = 'CALLED',
  /** Activity is done */
  Completed = 'COMPLETED',
  /** Activity is created */
  Created = 'CREATED',
  /** Activity is invalid */
  Invalid = 'INVALID',
  /** Activity is queued to run */
  Queued = 'QUEUED',
  /** Activity is ready to be started */
  Ready = 'READY'
}

/** A user's address */
export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateId?: Maybe<Scalars['Int']['output']>;
};

/** Represents the name of the third-party service (e.g Twitter) for OAuth */
export enum AuthorizationType {
  Battlenet = 'BATTLENET',
  Discord = 'DISCORD',
  Epic = 'EPIC',
  Mixer = 'MIXER',
  Riot = 'RIOT',
  Steam = 'STEAM',
  Twitch = 'TWITCH',
  Twitter = 'TWITTER',
  Xbox = 'XBOX'
}

/** Bracket-specific configuration */
export type BracketConfig = {
  bracketType?: Maybe<BracketType>;
  id?: Maybe<Scalars['ID']['output']>;
};

/** Game specific H2H set data such as character, stage, and stock info */
export type BracketSetGameDataInput = {
  /** Score for entrant 1 (if applicable). For smash, this is stocks remaining. */
  entrant1Score?: InputMaybe<Scalars['Int']['input']>;
  /** Score for entrant 2 (if applicable). For smash, this is stocks remaining. */
  entrant2Score?: InputMaybe<Scalars['Int']['input']>;
  /** Game number */
  gameNum: Scalars['Int']['input'];
  /** List of selections for the game, typically character selections. */
  selections?: InputMaybe<Array<InputMaybe<BracketSetGameSelectionInput>>>;
  /** ID of the stage that was played for this game (if applicable) */
  stageId?: InputMaybe<Scalars['ID']['input']>;
  /** Entrant ID of game winner */
  winnerId?: InputMaybe<Scalars['ID']['input']>;
};

/** Game specific H2H selections made by the entrants, such as character info */
export type BracketSetGameSelectionInput = {
  /** Character selected by this entrant for this game. */
  characterId?: InputMaybe<Scalars['Int']['input']>;
  /** Entrant ID that made selection */
  entrantId: Scalars['ID']['input'];
};

/** The type of Bracket format that a Phase is configured with. */
export enum BracketType {
  Circuit = 'CIRCUIT',
  CustomSchedule = 'CUSTOM_SCHEDULE',
  DoubleElimination = 'DOUBLE_ELIMINATION',
  EliminationRounds = 'ELIMINATION_ROUNDS',
  Exhibition = 'EXHIBITION',
  Matchmaking = 'MATCHMAKING',
  Race = 'RACE',
  RoundRobin = 'ROUND_ROBIN',
  SingleElimination = 'SINGLE_ELIMINATION',
  Swiss = 'SWISS'
}

/** A character in a videogame */
export type Character = {
  __typename?: 'Character';
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Name of Character */
  name?: Maybe<Scalars['String']['output']>;
};


/** A character in a videogame */
export type CharacterImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Comparison operator */
export enum Comparator {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL'
}

/** Name, address, etc */
export type ContactInfo = {
  __typename?: 'ContactInfo';
  /** Participant City Name */
  city?: Maybe<Scalars['String']['output']>;
  /** Participant Country Name */
  country?: Maybe<Scalars['String']['output']>;
  /** Participant Country (region) id */
  countryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** First Name */
  nameFirst?: Maybe<Scalars['String']['output']>;
  /** Last Name */
  nameLast?: Maybe<Scalars['String']['output']>;
  /** Phone number */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** Participant State Name */
  state?: Maybe<Scalars['String']['output']>;
  /** Participant State (region) id */
  stateId?: Maybe<Scalars['Int']['output']>;
  /** Zip or Postal Code */
  zipcode?: Maybe<Scalars['String']['output']>;
};

/** An entrant in an event */
export type Entrant = {
  __typename?: 'Entrant';
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Entrant's seed number in the first phase of the event. */
  initialSeedNum?: Maybe<Scalars['Int']['output']>;
  isDisqualified?: Maybe<Scalars['Boolean']['output']>;
  /** The entrant name as it appears in bracket: gamerTag of the participant or team name */
  name?: Maybe<Scalars['String']['output']>;
  /** Paginated sets for this entrant */
  paginatedSets?: Maybe<SetConnection>;
  participants?: Maybe<Array<Maybe<Participant>>>;
  seeds?: Maybe<Array<Maybe<Seed>>>;
  skill?: Maybe<Scalars['Int']['output']>;
  /** Standing for this entrant given an event. All entrants queried must be in the same event (for now). */
  standing?: Maybe<Standing>;
  /** @deprecated DEPRECATED. Use streams instead, which supports multiple stream types and teams. */
  stream?: Maybe<Streams>;
  streams?: Maybe<Array<Maybe<Streams>>>;
  /** Team linked to this entrant, if one exists */
  team?: Maybe<Team>;
};


/** An entrant in an event */
export type EntrantPaginatedSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};

export type EntrantConnection = {
  __typename?: 'EntrantConnection';
  nodes?: Maybe<Array<Maybe<Entrant>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** An event in a tournament */
export type Event = {
  __typename?: 'Event';
  /** How long before the event start will the check-in end (in seconds) */
  checkInBuffer?: Maybe<Scalars['Int']['output']>;
  /** How long the event check-in will last (in seconds) */
  checkInDuration?: Maybe<Scalars['Int']['output']>;
  /** Whether check-in is enabled for this event */
  checkInEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Rough categorization of event tier, denoting relative importance in the competitive scene */
  competitionTier?: Maybe<Scalars['Int']['output']>;
  /** When the event was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Last date attendees are able to create teams for team events */
  deckSubmissionDeadline?: Maybe<Scalars['Timestamp']['output']>;
  /**
   * Maximum number of participants each Entrant can have
   * @deprecated Migrate to teamRosterSize
   */
  entrantSizeMax?: Maybe<Scalars['Int']['output']>;
  /**
   * Minimum number of participants each Entrant can have
   * @deprecated Migrate to teamRosterSize
   */
  entrantSizeMin?: Maybe<Scalars['Int']['output']>;
  /** The entrants that belong to an event, paginated by filter criteria */
  entrants?: Maybe<EntrantConnection>;
  /** How much it costs to enter this event */
  entryFee?: Maybe<Scalars['Float']['output']>;
  /** Whether the event has decks */
  hasDecks?: Maybe<Scalars['Boolean']['output']>;
  /** Are player tasks enabled for this event */
  hasTasks?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Whether the event is an online event or not */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  league?: Maybe<League>;
  /** Markdown field for match rules/instructions */
  matchRulesMarkdown?: Maybe<Scalars['String']['output']>;
  /** Title of event set by organizer */
  name?: Maybe<Scalars['String']['output']>;
  /** Gets the number of entrants in this event */
  numEntrants?: Maybe<Scalars['Int']['output']>;
  /** The phase groups that belong to an event. */
  phaseGroups?: Maybe<Array<Maybe<PhaseGroup>>>;
  /** The phases that belong to an event. */
  phases?: Maybe<Array<Maybe<Phase>>>;
  /** TO settings for prizing */
  prizingInfo?: Maybe<Scalars['JSON']['output']>;
  publishing?: Maybe<Scalars['JSON']['output']>;
  /** Markdown field for event rules/instructions */
  rulesMarkdown?: Maybe<Scalars['String']['output']>;
  /** Id of the event ruleset */
  rulesetId?: Maybe<Scalars['Int']['output']>;
  /**
   * Settings pulled from the event ruleset, if one exists
   * @deprecated Use ruleset
   */
  rulesetSettings?: Maybe<Scalars['JSON']['output']>;
  /** Paginated sets for this Event */
  sets?: Maybe<SetConnection>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** When does this event start? */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  /** The state of the Event. */
  state?: Maybe<ActivityState>;
  /** Paginated stations on this event */
  stations?: Maybe<StationsConnection>;
  /** Last date attendees are able to create teams for team events */
  teamManagementDeadline?: Maybe<Scalars['Timestamp']['output']>;
  /** If this is a teams event, returns whether or not teams can set custom names */
  teamNameAllowed?: Maybe<Scalars['Boolean']['output']>;
  /** Team roster size requirements */
  teamRosterSize?: Maybe<TeamRosterSize>;
  tournament?: Maybe<Tournament>;
  /** The type of the event, whether an entrant will have one participant or multiple */
  type?: Maybe<Scalars['Int']['output']>;
  /** When the event was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Whether the event uses the new EventSeeds for seeding */
  useEventSeeds?: Maybe<Scalars['Boolean']['output']>;
  /** The entrant (if applicable) for a given user in this event */
  userEntrant?: Maybe<Entrant>;
  videogame?: Maybe<Videogame>;
  /** The waves being used by the event */
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** An event in a tournament */
export type EventEntrantsArgs = {
  query?: InputMaybe<EventEntrantPageQuery>;
};


/** An event in a tournament */
export type EventImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** An event in a tournament */
export type EventPhasesArgs = {
  phaseId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<ActivityState>;
};


/** An event in a tournament */
export type EventSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};


/** An event in a tournament */
export type EventStandingsArgs = {
  query: StandingPaginationQuery;
};


/** An event in a tournament */
export type EventStationsArgs = {
  query?: InputMaybe<StationFilter>;
};


/** An event in a tournament */
export type EventUserEntrantArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


/** An event in a tournament */
export type EventWavesArgs = {
  phaseId?: InputMaybe<Scalars['ID']['input']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  nodes?: Maybe<Array<Maybe<Event>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type EventEntrantPageQuery = {
  filter?: InputMaybe<EventEntrantPageQueryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type EventEntrantPageQueryFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EventFilter = {
  fantasyEventId?: InputMaybe<Scalars['ID']['input']>;
  fantasyRosterHash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Name and Gamertag of the owner of an event in a league */
export type EventOwner = {
  __typename?: 'EventOwner';
  email?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['ID']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gamerTag?: Maybe<Scalars['String']['output']>;
};

export type EventOwnerConnection = {
  __typename?: 'EventOwnerConnection';
  nodes?: Maybe<Array<Maybe<EventOwner>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type EventOwnersQuery = {
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** An event-level Team, in the context of some competition */
export type EventTeam = Team & {
  __typename?: 'EventTeam';
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  globalTeam?: Maybe<GlobalTeam>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']['output']>;
};


/** An event-level Team, in the context of some competition */
export type EventTeamImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** An event-level Team, in the context of some competition */
export type EventTeamMembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

export type EventTeamConnection = {
  __typename?: 'EventTeamConnection';
  nodes?: Maybe<Array<Maybe<EventTeam>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** Used for league application tiers */
export type EventTier = {
  __typename?: 'EventTier';
  id?: Maybe<Scalars['ID']['output']>;
  /** Name of this tier */
  name?: Maybe<Scalars['String']['output']>;
};

/** A game represents a single game within a set. */
export type Game = {
  __typename?: 'Game';
  /** Score of entrant 1. For smash, this is equivalent to stocks remaining. */
  entrant1Score?: Maybe<Scalars['Int']['output']>;
  /** Score of entrant 2. For smash, this is equivalent to stocks remaining. */
  entrant2Score?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  orderNum?: Maybe<Scalars['Int']['output']>;
  /** Selections for this game such as character, etc. */
  selections?: Maybe<Array<Maybe<GameSelection>>>;
  /** The stage that this game was played on (if applicable) */
  stage?: Maybe<Stage>;
  state?: Maybe<Scalars['Int']['output']>;
  winnerId?: Maybe<Scalars['Int']['output']>;
};


/** A game represents a single game within a set. */
export type GameImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** A selection for this game. i.e. character/stage selection, etc */
export type GameSelection = {
  __typename?: 'GameSelection';
  /** If this is a character selection, returns the selected character. */
  character?: Maybe<Character>;
  /** The entrant who this selection is for */
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']['output']>;
  orderNum?: Maybe<Scalars['Int']['output']>;
  /**
   * The participant who this selection is for. This is only populated if there are
   * selections for multiple participants of a single entrant
   */
  participant?: Maybe<Participant>;
  selectionType?: Maybe<GameSelectionType>;
  selectionValue?: Maybe<Scalars['Int']['output']>;
};

/** The type of selection i.e. is it for a character or something else */
export enum GameSelectionType {
  /** Character selection */
  Character = 'CHARACTER'
}

/** Global Team */
export type GlobalTeam = Team & {
  __typename?: 'GlobalTeam';
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  eventTeams?: Maybe<EventTeamConnection>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Leagues-level teams for leagues this team is competing in */
  leagueTeams?: Maybe<EventTeamConnection>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']['output']>;
};


/** Global Team */
export type GlobalTeamEventTeamsArgs = {
  query?: InputMaybe<TeamPaginationQuery>;
};


/** Global Team */
export type GlobalTeamImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** Global Team */
export type GlobalTeamLeagueTeamsArgs = {
  query?: InputMaybe<TeamPaginationQuery>;
};


/** Global Team */
export type GlobalTeamMembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

/** An image */
export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** A league */
export type League = {
  __typename?: 'League';
  addrState?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  /** When the tournament was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  /** When the tournament ends */
  endAt?: Maybe<Scalars['Timestamp']['output']>;
  entrantCount?: Maybe<Scalars['Int']['output']>;
  eventOwners?: Maybe<EventOwnerConnection>;
  /** When does event registration close */
  eventRegistrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Paginated list of events in a league */
  events?: Maybe<EventConnection>;
  /**
   * Hacked "progression" into this final event
   * @deprecated No longer used
   */
  finalEventId?: Maybe<Scalars['Int']['output']>;
  /** True if tournament has at least one offline event */
  hasOfflineEvents?: Maybe<Scalars['Boolean']['output']>;
  hasOnlineEvents?: Maybe<Scalars['Boolean']['output']>;
  hashtag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** True if tournament has at least one online event */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  links?: Maybe<TournamentLinks>;
  lng?: Maybe<Scalars['Float']['output']>;
  mapsPlaceId?: Maybe<Scalars['String']['output']>;
  /** The tournament name */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Top X number of people in the standings who progress to final event
   * @deprecated No longer used
   */
  numProgressingToFinalEvent?: Maybe<Scalars['Int']['output']>;
  numUniquePlayers?: Maybe<Scalars['Int']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  primaryContact?: Maybe<Scalars['String']['output']>;
  primaryContactType?: Maybe<Scalars['String']['output']>;
  /** Publishing settings for this tournament */
  publishing?: Maybe<Scalars['JSON']['output']>;
  /** When does registration for the tournament end */
  registrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  /** The short slug used to form the url */
  shortSlug?: Maybe<Scalars['String']['output']>;
  /** Whether standings for this league should be visible */
  showStandings?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** When the tournament Starts */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  /** State of the tournament, can be ActivityState::CREATED, ActivityState::ACTIVE, or ActivityState::COMPLETED */
  state?: Maybe<Scalars['Int']['output']>;
  /** When is the team creation deadline */
  teamCreationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  tiers?: Maybe<Array<Maybe<EventTier>>>;
  /** The timezone of the tournament */
  timezone?: Maybe<Scalars['String']['output']>;
  /** The type of tournament from TournamentType */
  tournamentType?: Maybe<Scalars['Int']['output']>;
  /** When the tournament was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Build Tournament URL */
  url?: Maybe<Scalars['String']['output']>;
  venueAddress?: Maybe<Scalars['String']['output']>;
  venueName?: Maybe<Scalars['String']['output']>;
  videogames?: Maybe<Array<Maybe<Videogame>>>;
};


/** A league */
export type LeagueEventOwnersArgs = {
  query?: InputMaybe<EventOwnersQuery>;
};


/** A league */
export type LeagueEventsArgs = {
  query?: InputMaybe<LeagueEventsQuery>;
};


/** A league */
export type LeagueImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A league */
export type LeagueStandingsArgs = {
  query?: InputMaybe<StandingGroupStandingPageFilter>;
};


/** A league */
export type LeagueUrlArgs = {
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  tab?: InputMaybe<Scalars['String']['input']>;
};

export type LeagueConnection = {
  __typename?: 'LeagueConnection';
  nodes?: Maybe<Array<Maybe<League>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type LeagueEventsFilter = {
  leagueEntrantId?: InputMaybe<Scalars['ID']['input']>;
  pointMappingGroupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<PaginationSearchType>;
  tierIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type LeagueEventsQuery = {
  filter?: InputMaybe<LeagueEventsFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type LeaguePageFilter = {
  activeShops?: InputMaybe<Scalars['Boolean']['input']>;
  afterDate?: InputMaybe<Scalars['Timestamp']['input']>;
  beforeDate?: InputMaybe<Scalars['Timestamp']['input']>;
  computedUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  hasBannerImages?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the user that owns this league. */
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  publiclySearchable?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type LeagueQuery = {
  filter?: InputMaybe<LeaguePageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<TournamentPaginationSort>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type LocationFilterType = {
  city?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Match-level configuration */
export type MatchConfig = {
  bracketType?: Maybe<BracketType>;
  id?: Maybe<Scalars['ID']['output']>;
};

/** Different options available for verifying player-reported match results */
export enum MatchConfigVerificationMethod {
  Any = 'ANY',
  Mixer = 'MIXER',
  StreamMe = 'STREAM_ME',
  Twitch = 'TWITCH',
  Youtube = 'YOUTUBE'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Assign a station to a set. If there is a stream attached to the station, the set will be assigned to the stream as well. */
  assignStation?: Maybe<Set>;
  /** Assign a stream to a set */
  assignStream?: Maybe<Set>;
  /** Delete a phase by id */
  deletePhase?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a station by id */
  deleteStation?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a wave by id */
  deleteWave?: Maybe<Scalars['Boolean']['output']>;
  /** Generate tournament registration Token on behalf of user */
  generateRegistrationToken?: Maybe<Scalars['String']['output']>;
  /** Update a set to called state */
  markSetCalled?: Maybe<Set>;
  /** Update a set to called state */
  markSetInProgress?: Maybe<Set>;
  /** Register for tournament */
  registerForTournament?: Maybe<Participant>;
  /**
   * Report set winner or game stats for a H2H bracket set. If winnerId is
   * supplied, mark set as complete. gameData parameter will overwrite any existing
   * reported game data.
   */
  reportBracketSet?: Maybe<Array<Maybe<Set>>>;
  /** Resets set to initial state, can affect other sets and phase groups */
  resetSet?: Maybe<Set>;
  /** Automatically attempt to resolve all schedule conflicts. Returns a list of changed seeds */
  resolveScheduleConflicts?: Maybe<Array<Maybe<Seed>>>;
  /** Swap two seed ids in a phase */
  swapSeeds?: Maybe<Array<Maybe<Seed>>>;
  /**
   * Update game stats for a H2H bracket set. Set winner cannot be changed with
   * this function, use the resetSet mutation instead.
   */
  updateBracketSet?: Maybe<Set>;
  /** Update set of phase groups in a phase */
  updatePhaseGroups?: Maybe<Array<Maybe<PhaseGroup>>>;
  /** Update the seeding for a phase */
  updatePhaseSeeding?: Maybe<Phase>;
  /** Update a set's vodUrl */
  updateVodUrl?: Maybe<Set>;
  /** Create or update a Phase */
  upsertPhase?: Maybe<Phase>;
  /** Add or update a station by id */
  upsertStation?: Maybe<Stations>;
  /** Add or update a wave by id */
  upsertWave?: Maybe<Wave>;
};


export type MutationAssignStationArgs = {
  setId: Scalars['ID']['input'];
  stationId: Scalars['ID']['input'];
};


export type MutationAssignStreamArgs = {
  setId: Scalars['ID']['input'];
  streamId: Scalars['ID']['input'];
};


export type MutationDeletePhaseArgs = {
  phaseId: Scalars['ID']['input'];
};


export type MutationDeleteStationArgs = {
  stationId: Scalars['ID']['input'];
};


export type MutationDeleteWaveArgs = {
  waveId: Scalars['ID']['input'];
};


export type MutationGenerateRegistrationTokenArgs = {
  registration: TournamentRegistrationInput;
  userId: Scalars['ID']['input'];
};


export type MutationMarkSetCalledArgs = {
  setId: Scalars['ID']['input'];
};


export type MutationMarkSetInProgressArgs = {
  setId: Scalars['ID']['input'];
};


export type MutationRegisterForTournamentArgs = {
  registration?: InputMaybe<TournamentRegistrationInput>;
  registrationToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationReportBracketSetArgs = {
  gameData?: InputMaybe<Array<InputMaybe<BracketSetGameDataInput>>>;
  isDQ?: InputMaybe<Scalars['Boolean']['input']>;
  setId: Scalars['ID']['input'];
  winnerId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationResetSetArgs = {
  resetDependentSets?: InputMaybe<Scalars['Boolean']['input']>;
  setId: Scalars['ID']['input'];
};


export type MutationResolveScheduleConflictsArgs = {
  options?: InputMaybe<ResolveConflictsOptions>;
  tournamentId: Scalars['ID']['input'];
};


export type MutationSwapSeedsArgs = {
  phaseId: Scalars['ID']['input'];
  seed1Id: Scalars['ID']['input'];
  seed2Id: Scalars['ID']['input'];
};


export type MutationUpdateBracketSetArgs = {
  gameData?: InputMaybe<Array<InputMaybe<BracketSetGameDataInput>>>;
  isDQ?: InputMaybe<Scalars['Boolean']['input']>;
  setId: Scalars['ID']['input'];
  winnerId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdatePhaseGroupsArgs = {
  groupConfigs: Array<InputMaybe<PhaseGroupUpdateInput>>;
};


export type MutationUpdatePhaseSeedingArgs = {
  options?: InputMaybe<UpdatePhaseSeedingOptions>;
  phaseId: Scalars['ID']['input'];
  seedMapping: Array<InputMaybe<UpdatePhaseSeedInfo>>;
};


export type MutationUpdateVodUrlArgs = {
  setId: Scalars['ID']['input'];
  vodUrl?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpsertPhaseArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  payload: PhaseUpsertInput;
  phaseId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpsertStationArgs = {
  fields: StationUpsertInput;
  stationId?: InputMaybe<Scalars['ID']['input']>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpsertWaveArgs = {
  fields: WaveUpsertInput;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
  waveId?: InputMaybe<Scalars['ID']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  filter?: Maybe<Scalars['JSON']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  perPage?: Maybe<Scalars['Int']['output']>;
  sortBy?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PaginationSearchType = {
  fieldsToSearch?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  searchString?: InputMaybe<Scalars['String']['input']>;
};

/** A participant of a tournament; either a spectator or competitor */
export type Participant = {
  __typename?: 'Participant';
  /** If this participant was checked-in by admin */
  checkedIn?: Maybe<Scalars['Boolean']['output']>;
  /** The time this participant was checked-in by admin */
  checkedInAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Info for connected accounts to external services. */
  connectedAccounts?: Maybe<Scalars['JSON']['output']>;
  /**
   * Contact info for the user associated with this participant. These fields are
   * for admin use only. If you are not a tournament admin or the participant being
   * queried, these fields will be null. Do not display this information publicly.
   */
  contactInfo?: Maybe<ContactInfo>;
  /** Email of the user, only available to admins within 18 months of tournament completion for tournament administrators. */
  email?: Maybe<Scalars['String']['output']>;
  /** Entrants associated with this Participant, if applicable */
  entrants?: Maybe<Array<Maybe<Entrant>>>;
  /** The events this participant registered for within a Tournament. */
  events?: Maybe<Array<Maybe<Event>>>;
  /** The tag that was used when the participant registered, e.g. Mang0 */
  gamerTag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  player?: Maybe<Player>;
  /** The prefix that the user set for this Tournament, e.g. C9 */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Tournament Admin viewable field. Shows details for required social connections */
  requiredConnections?: Maybe<Array<Maybe<ProfileAuthorization>>>;
  /** The user this participant is associated to. */
  user?: Maybe<User>;
  /** If this participant is verified as actually being in the tournament */
  verified?: Maybe<Scalars['Boolean']['output']>;
};


/** A participant of a tournament; either a spectator or competitor */
export type ParticipantImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ParticipantConnection = {
  __typename?: 'ParticipantConnection';
  nodes?: Maybe<Array<Maybe<Participant>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ParticipantPageFilter = {
  checkedIn?: InputMaybe<Scalars['Boolean']['input']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  gamerTag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  incompleteTeam?: InputMaybe<Scalars['Boolean']['input']>;
  missingDeck?: InputMaybe<Scalars['Boolean']['input']>;
  notCheckedIn?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  unpaid?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParticipantPaginationQuery = {
  filter?: InputMaybe<ParticipantPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A phase in an event */
export type Phase = {
  __typename?: 'Phase';
  /** The bracket type of this phase. */
  bracketType?: Maybe<BracketType>;
  /** The Event that this phase belongs to */
  event?: Maybe<Event>;
  /** Number of phase groups in this phase */
  groupCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Is the phase an exhibition or not. */
  isExhibition?: Maybe<Scalars['Boolean']['output']>;
  /** Name of phase e.g. Round 1 Pools */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of seeds this phase contains. */
  numSeeds?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Please use 'seeds' instead */
  paginatedSeeds?: Maybe<SeedConnection>;
  /** Phase groups under this phase, paginated */
  phaseGroups?: Maybe<PhaseGroupConnection>;
  /** The relative order of this phase within an event */
  phaseOrder?: Maybe<Scalars['Int']['output']>;
  /** Information about the progressions into this phase */
  progressingInData?: Maybe<Array<Maybe<ProgressionData>>>;
  /** Information about the progressions out of this phase */
  progressions?: Maybe<Array<Maybe<Progression>>>;
  /** Paginated seeds for this phase */
  seeds?: Maybe<SeedConnection>;
  /** Paginated sets for this Phase */
  sets?: Maybe<SetConnection>;
  /** State of the phase */
  state?: Maybe<ActivityState>;
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** A phase in an event */
export type PhasePaginatedSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A phase in an event */
export type PhasePhaseGroupsArgs = {
  query?: InputMaybe<PhaseGroupPageQuery>;
};


/** A phase in an event */
export type PhaseSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A phase in an event */
export type PhaseSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};

/** A group within a phase */
export type PhaseGroup = {
  __typename?: 'PhaseGroup';
  /** The bracket type of this group's phase. */
  bracketType?: Maybe<BracketType>;
  /** URL for this phase groups's bracket. */
  bracketUrl?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for this group within the context of its phase */
  displayIdentifier?: Maybe<Scalars['String']['output']>;
  /** For the given phase group, this is the start time of the first round that occurs in the group. */
  firstRoundTime?: Maybe<Scalars['Timestamp']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  numRounds?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Please use 'seeds', which is now paginated */
  paginatedSeeds?: Maybe<SeedConnection>;
  /**
   * Paginated sets on this phaseGroup
   * @deprecated Please use 'sets', which is now paginated
   */
  paginatedSets?: Maybe<SetConnection>;
  /** The phase associated with this phase group */
  phase?: Maybe<Phase>;
  /** The progressions out of this phase group */
  progressionsOut?: Maybe<Array<Maybe<Progression>>>;
  rounds?: Maybe<Array<Maybe<Round>>>;
  seedMap?: Maybe<Scalars['JSON']['output']>;
  /** Paginated seeds for this phase group */
  seeds?: Maybe<SeedConnection>;
  /** Paginated sets on this phaseGroup */
  sets?: Maybe<SetConnection>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** Unix time the group is scheduled to start. This info could also be on the wave instead. */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  tiebreakOrder?: Maybe<Scalars['JSON']['output']>;
  wave?: Maybe<Wave>;
};


/** A group within a phase */
export type PhaseGroupPaginatedSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A group within a phase */
export type PhaseGroupPaginatedSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};


/** A group within a phase */
export type PhaseGroupSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  query: SeedPaginationQuery;
};


/** A group within a phase */
export type PhaseGroupSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortType?: InputMaybe<SetSortType>;
};


/** A group within a phase */
export type PhaseGroupStandingsArgs = {
  query?: InputMaybe<StandingGroupStandingPageFilter>;
};

export type PhaseGroupConnection = {
  __typename?: 'PhaseGroupConnection';
  nodes?: Maybe<Array<Maybe<PhaseGroup>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PhaseGroupPageQuery = {
  entrantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  filter?: InputMaybe<PhaseGroupPageQueryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type PhaseGroupPageQueryFilter = {
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  waveId?: InputMaybe<Scalars['ID']['input']>;
};

export type PhaseGroupUpdateInput = {
  phaseGroupId: Scalars['ID']['input'];
  stationId?: InputMaybe<Scalars['ID']['input']>;
  waveId?: InputMaybe<Scalars['ID']['input']>;
};

export type PhaseUpsertInput = {
  bracketType?: InputMaybe<BracketType>;
  /** The number of pools to configure for the Phase. Only applies to brackets that support pools */
  groupCount?: InputMaybe<Scalars['Int']['input']>;
  /** The name of the Phase. For example, "Top 8" or "Pools" */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A player */
export type Player = {
  __typename?: 'Player';
  gamerTag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  /** Most recent active & published rankings */
  rankings?: Maybe<Array<Maybe<PlayerRank>>>;
  /**
   * Recent sets for this player.
   * @deprecated Use the sets field instead.
   */
  recentSets?: Maybe<Array<Maybe<Set>>>;
  /** Recent standings */
  recentStandings?: Maybe<Array<Maybe<Standing>>>;
  /** Set history for this player. */
  sets?: Maybe<SetConnection>;
  user?: Maybe<User>;
};


/** A player */
export type PlayerRankingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  videogameId?: InputMaybe<Scalars['ID']['input']>;
};


/** A player */
export type PlayerRecentSetsArgs = {
  opponentId?: InputMaybe<Scalars['ID']['input']>;
};


/** A player */
export type PlayerRecentStandingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  videogameId?: InputMaybe<Scalars['ID']['input']>;
};


/** A player */
export type PlayerSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** A player's ranks */
export type PlayerRank = {
  __typename?: 'PlayerRank';
  id?: Maybe<Scalars['ID']['output']>;
  /** The player's placement on the ranking */
  rank?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** An OAuth ProfileAuthorization object */
export type ProfileAuthorization = {
  __typename?: 'ProfileAuthorization';
  /** The id given by the external service */
  externalId?: Maybe<Scalars['String']['output']>;
  /** The username given by the external service (including discriminator if discord) */
  externalUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  stream?: Maybe<Stream>;
  /** The name of the external service providing this auth i.e. "twitch" */
  type?: Maybe<AuthorizationType>;
  url?: Maybe<Scalars['String']['output']>;
};

/** A connection between a placement in an origin phase group to a destination seed. */
export type Progression = {
  __typename?: 'Progression';
  id?: Maybe<Scalars['ID']['output']>;
  originOrder?: Maybe<Scalars['Int']['output']>;
  originPhase?: Maybe<Phase>;
  originPhaseGroup?: Maybe<PhaseGroup>;
  originPlacement?: Maybe<Scalars['Int']['output']>;
  placeholderName?: Maybe<Scalars['String']['output']>;
};

/** Data on phase progression, keyed on destination PhaseId */
export type ProgressionData = {
  __typename?: 'ProgressionData';
  /** Amount of seeds per phase group that are progressing. */
  numProgressing?: Maybe<Scalars['Int']['output']>;
  /** Origin phase ID that is the source of this progression. */
  origin?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns the authenticated user */
  currentUser?: Maybe<User>;
  /** Returns an entrant given its id */
  entrant?: Maybe<Entrant>;
  /** Returns an event given its id or slug */
  event?: Maybe<Event>;
  /** Returns a league given its id or slug */
  league?: Maybe<League>;
  /** Paginated, filterable list of leagues */
  leagues?: Maybe<LeagueConnection>;
  /** Returns a participant given its id */
  participant?: Maybe<Participant>;
  /** Returns a phase given its id */
  phase?: Maybe<Phase>;
  /** Returns a phase group given its id */
  phaseGroup?: Maybe<PhaseGroup>;
  /** Returns a player given an id */
  player?: Maybe<Player>;
  /** Returns a phase seed given its id */
  seed?: Maybe<Seed>;
  /** Returns a set given its id */
  set?: Maybe<Set>;
  /** A shop entity */
  shop?: Maybe<Shop>;
  /** Returns an stream given its id */
  stream?: Maybe<Streams>;
  /** Returns all the stream queues for a given tournament */
  streamQueue?: Maybe<Array<Maybe<StreamQueue>>>;
  /** Returns a team given its id */
  team?: Maybe<Team>;
  /** Returns a tournament given its id or slug */
  tournament?: Maybe<Tournament>;
  /** Paginated, filterable list of tournaments */
  tournaments?: Maybe<TournamentConnection>;
  /** Returns a user given a user slug of the form user/abc123, or id */
  user?: Maybe<User>;
  /** Returns a videogame given its id */
  videogame?: Maybe<Videogame>;
  /** Returns paginated list of videogames matching the search criteria. */
  videogames?: Maybe<VideogameConnection>;
};


export type QueryEntrantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLeagueArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLeaguesArgs = {
  query: LeagueQuery;
};


export type QueryParticipantArgs = {
  id: Scalars['ID']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPhaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPhaseGroupArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySeedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShopArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStreamArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStreamQueueArgs = {
  includePlayerStreams?: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId: Scalars['ID']['input'];
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  inviteCode?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTournamentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTournamentsArgs = {
  query: TournamentQuery;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVideogameArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVideogamesArgs = {
  query: VideogameQuery;
};

/** Race specific bracket configuration */
export type RaceBracketConfig = BracketConfig & {
  __typename?: 'RaceBracketConfig';
  automaticEndTime?: Maybe<Scalars['Timestamp']['output']>;
  automaticStartTime?: Maybe<Scalars['Timestamp']['output']>;
  bracketType?: Maybe<BracketType>;
  goalTargetComparator?: Maybe<Comparator>;
  goalTargetValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMode?: Maybe<RaceLimitMode>;
  limitValue?: Maybe<Scalars['Int']['output']>;
  raceType?: Maybe<RaceType>;
};

/** Enforces limits on the amount of allowable Race submissions */
export enum RaceLimitMode {
  BestAll = 'BEST_ALL',
  FirstAll = 'FIRST_ALL',
  Playtime = 'PLAYTIME'
}

/** Race specific match configuration */
export type RaceMatchConfig = MatchConfig & {
  __typename?: 'RaceMatchConfig';
  bracketType?: Maybe<BracketType>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Can players report results? */
  playerReportingEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Accepted methods of verification that players can use */
  verificationMethods?: Maybe<Array<Maybe<MatchConfigVerificationMethod>>>;
  /** Are players required to submit verification of their reported results? */
  verificationRequired?: Maybe<Scalars['Boolean']['output']>;
};

/** Race type */
export enum RaceType {
  Goals = 'GOALS',
  Timed = 'TIMED'
}

export type ResetAffectedData = {
  __typename?: 'ResetAffectedData';
  affectedPhaseGroupCount?: Maybe<Scalars['Int']['output']>;
  affectedSetCount?: Maybe<Scalars['Int']['output']>;
  affectedSets?: Maybe<Array<Maybe<Set>>>;
};

export type ResolveConflictsLockedSeedConfig = {
  eventId: Scalars['ID']['input'];
  numSeeds: Scalars['Int']['input'];
};

export type ResolveConflictsOptions = {
  lockedSeeds?: InputMaybe<Array<InputMaybe<ResolveConflictsLockedSeedConfig>>>;
};

/** A round within a phase group */
export type Round = {
  __typename?: 'Round';
  /**
   * If applicable, bestOf is the number of games
   * 									one must win a majority out of to win a set in this round
   */
  bestOf?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Indicates this round's order in the phase group */
  number?: Maybe<Scalars['Int']['output']>;
  /** The time that this round is scheduled to start at */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
};

/**
 * The score that led to this standing being awarded. The meaning of this field can
 * vary by standing type and is not used for some standing types.
 */
export type Score = {
  __typename?: 'Score';
  /** Like value, but formatted for race format events. Formatted according to the race config for the front end to use. */
  displayValue?: Maybe<Scalars['String']['output']>;
  /** The name of this score. e.g. "Kills" or "Stocks" */
  label?: Maybe<Scalars['String']['output']>;
  /** The raw score value */
  value?: Maybe<Scalars['Float']['output']>;
};

/** A seed for an entrant */
export type Seed = {
  __typename?: 'Seed';
  /** Map of Participant ID to checked in boolean */
  checkedInParticipants?: Maybe<Scalars['JSON']['output']>;
  entrant?: Maybe<Entrant>;
  groupSeedNum?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isBye?: Maybe<Scalars['Boolean']['output']>;
  phase?: Maybe<Phase>;
  phaseGroup?: Maybe<PhaseGroup>;
  placeholderName?: Maybe<Scalars['String']['output']>;
  placement?: Maybe<Scalars['Int']['output']>;
  /** The player(s) associated with this seed's entrant */
  players?: Maybe<Array<Maybe<Player>>>;
  progressionSeedId?: Maybe<Scalars['Int']['output']>;
  /** Source progression information */
  progressionSource?: Maybe<Progression>;
  seedNum?: Maybe<Scalars['Int']['output']>;
  /** Entrant's win/loss record for this standing. Scores do not include byes. */
  setRecordWithoutByes?: Maybe<Scalars['JSON']['output']>;
  standings?: Maybe<Array<Maybe<Standing>>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};


/** A seed for an entrant */
export type SeedSetRecordWithoutByesArgs = {
  phaseGroupId: Scalars['ID']['input'];
};


/** A seed for an entrant */
export type SeedStandingsArgs = {
  containerType?: InputMaybe<Scalars['String']['input']>;
};

export type SeedConnection = {
  __typename?: 'SeedConnection';
  nodes?: Maybe<Array<Maybe<Seed>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SeedPageFilter = {
  checkInState?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  entrantName?: InputMaybe<Scalars['String']['input']>;
  eventCheckInGroupId?: InputMaybe<Scalars['ID']['input']>;
  eventId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phaseGroupId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  phaseId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<PaginationSearchType>;
};

export type SeedPaginationQuery = {
  filter?: InputMaybe<SeedPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A set */
export type Set = {
  __typename?: 'Set';
  /** The time this set was marked as completed */
  completedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** The time this set was created */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  displayScore?: Maybe<Scalars['String']['output']>;
  /** The source of the first entrant in this set */
  entrant1Source?: Maybe<SetEntrantSource>;
  /** The source of the second entrant in this set */
  entrant2Source?: Maybe<SetEntrantSource>;
  /** Event that this set belongs to. */
  event?: Maybe<Event>;
  /** Full round text of this set. */
  fullRoundText?: Maybe<Scalars['String']['output']>;
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<Game>>>;
  /** Whether this set contains a placeholder entrant */
  hasPlaceholder?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The letters that describe a unique identifier within the pool. Eg. F, AT */
  identifier?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  lPlacement?: Maybe<Scalars['Int']['output']>;
  /** The progression seed that the loser of this set will be placed into (if applicable) */
  loserProgressionSeed?: Maybe<Seed>;
  /** Phase group that this Set belongs to. */
  phaseGroup?: Maybe<PhaseGroup>;
  /** The sets that are affected from resetting this set */
  resetAffectedData?: Maybe<ResetAffectedData>;
  /** The round number of the set. Negative numbers are losers bracket */
  round?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates whether the set is in best of or total games mode. This instructs
   * which field is used to figure out how many games are in this set.
   */
  setGamesType?: Maybe<Scalars['Int']['output']>;
  /** A possible spot in a set. Use this to get all entrants in a set. Use this for all bracket types (FFA, elimination, etc) */
  slots?: Maybe<Array<Maybe<SetSlot>>>;
  /** The start time of the Set. If there is no startAt time on the Set, will pull it from phaseGroup rounds configuration. */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  startedAt?: Maybe<Scalars['Timestamp']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  /** Tournament event station for a set */
  station?: Maybe<Stations>;
  /** Tournament event stream for a set */
  stream?: Maybe<Streams>;
  /** If setGamesType is in total games mode, this defined the number of games in the set. */
  totalGames?: Maybe<Scalars['Int']['output']>;
  /** The time this set was last updated */
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Url of a VOD for this set */
  vodUrl?: Maybe<Scalars['String']['output']>;
  wPlacement?: Maybe<Scalars['Int']['output']>;
  winnerId?: Maybe<Scalars['Int']['output']>;
  /** The progression seed that the winner of this set will be placed into (if applicable) */
  winnerProgressionSeed?: Maybe<Seed>;
};


/** A set */
export type SetDisplayScoreArgs = {
  mainEntrantId?: InputMaybe<Scalars['ID']['input']>;
};


/** A set */
export type SetGameArgs = {
  orderNum: Scalars['Int']['input'];
};


/** A set */
export type SetImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A set */
export type SetSlotsArgs = {
  includeByes?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SetConnection = {
  __typename?: 'SetConnection';
  nodes?: Maybe<Array<Maybe<Set>>>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 * Describes a source for an entrant in a set. Generally the source is either from
 * a winner/loser of a set in this phase group, or a seed if this is a progression
 */
export type SetEntrantSource = {
  __typename?: 'SetEntrantSource';
  /** The condition of this source. e.g. winner, loser, etc. */
  condition?: Maybe<Scalars['String']['output']>;
  /** Human readable string for the condition. e.g. "Winner of Set #1234" or "Seed #1" */
  conditionString?: Maybe<Scalars['String']['output']>;
  /** The type of this source. e.g. set, seed */
  type: Scalars['String']['output'];
  /** The ID of the type of this source. e.g. set ID, seed ID, etc. */
  typeId?: Maybe<Scalars['ID']['output']>;
};

/** Filter Sets by geographical constraints. */
export type SetFilterLocation = {
  /** Only return Sets in this country. Expects a valid two-letter country code */
  country?: InputMaybe<Scalars['String']['input']>;
  distanceFrom?: InputMaybe<SetFilterLocationDistanceFrom>;
  /** Only return Sets in this state. Only applicable to US states */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Only return Sets that are a certain distance away from a specified point */
export type SetFilterLocationDistanceFrom = {
  /** Point at which to perform distance calculation */
  point?: InputMaybe<SetFilterLocationDistanceFromPoint>;
  /** Distance from the point to include results in */
  radius?: InputMaybe<Scalars['String']['input']>;
};

export type SetFilterLocationDistanceFromPoint = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
};

export type SetFilters = {
  /** Only return Sets for these Entrants */
  entrantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets for this Entrant size. For example, to fetch 1v1 Sets only, filter by an entrantSize of 1 */
  entrantSize?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return Sets in these Events */
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets that have an attached VOD */
  hasVod?: InputMaybe<Scalars['Boolean']['input']>;
  /** Do not return empty Sets. For example, set this to true to filter out sets that are waiting for progressions. */
  hideEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only return Sets that are in an Online event. If omitted, Sets for both online and offline Events are returned */
  isEventOnline?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only return Sets in certain geographical areas. */
  location?: InputMaybe<SetFilterLocation>;
  /** Only return Sets for these Participants */
  participantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets in these PhaseGroups */
  phaseGroupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets in these Phases */
  phaseIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets for these Players */
  playerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets for these Rounds */
  roundNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Return sets that contain a bye */
  showByes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only returns Sets that are in these states */
  state?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return Sets that are assigned to these Station IDs */
  stationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return Sets that are assigned to these Station numbers */
  stationNumbers?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return Sets in these Tournaments */
  tournamentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Only return sets created or updated since this timestamp */
  updatedAfter?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** A slot in a set where a seed currently or will eventually exist in order to participate in the set. */
export type SetSlot = {
  __typename?: 'SetSlot';
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Pairs with prereqType, is the ID of the prereq. */
  prereqId?: Maybe<Scalars['String']['output']>;
  /** Given a set prereq type, defines the placement required in the origin set to end up in this slot. */
  prereqPlacement?: Maybe<Scalars['Int']['output']>;
  /** Describes where the entity in this slot comes from. */
  prereqType?: Maybe<Scalars['String']['output']>;
  seed?: Maybe<Seed>;
  /** The index of the slot. Unique per set. */
  slotIndex?: Maybe<Scalars['Int']['output']>;
  /** The standing within this set for the seed currently assigned to this slot. */
  standing?: Maybe<Standing>;
};

/** Different sort type configurations used when displaying multiple sets */
export enum SetSortType {
  /** Sets are sorted in the suggested order that they be called to be played. The order of completed sets is reversed. */
  CallOrder = 'CALL_ORDER',
  /** Sets are sorted by relevancy dependent on the state and progress of the event. */
  Magic = 'MAGIC',
  /** Sets will not be sorted. */
  None = 'NONE',
  /** Sets are sorted in the order that they were started. */
  Recent = 'RECENT',
  /** Sets sorted by round and identifier */
  Round = 'ROUND',
  /** Deprecated. This is equivalent to CALL_ORDER */
  Standard = 'STANDARD'
}

/** A shop */
export type Shop = {
  __typename?: 'Shop';
  id?: Maybe<Scalars['ID']['output']>;
  levels?: Maybe<ShopLevelConnection>;
  messages?: Maybe<ShopOrderMessageConnection>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** A shop */
export type ShopLevelsArgs = {
  query?: InputMaybe<ShopLevelsQuery>;
};


/** A shop */
export type ShopMessagesArgs = {
  query?: InputMaybe<ShopOrderMessagesQuery>;
};

/** A shop level */
export type ShopLevel = {
  __typename?: 'ShopLevel';
  currAmount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  goalAmount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ShopLevelConnection = {
  __typename?: 'ShopLevelConnection';
  nodes?: Maybe<Array<Maybe<ShopLevel>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ShopLevelsQuery = {
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** The message and player info for a shop order */
export type ShopOrderMessage = {
  __typename?: 'ShopOrderMessage';
  /** The player's gamertag. Returns null if anonymous message type */
  gamertag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The order message */
  message?: Maybe<Scalars['String']['output']>;
  /** The player's name. Returns null unless name & tag display is selected */
  name?: Maybe<Scalars['String']['output']>;
  /** The player who left the comment */
  player?: Maybe<Player>;
  /** The total order amount */
  total?: Maybe<Scalars['Float']['output']>;
};

export type ShopOrderMessageConnection = {
  __typename?: 'ShopOrderMessageConnection';
  nodes?: Maybe<Array<Maybe<ShopOrderMessage>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ShopOrderMessagesQuery = {
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Represents the name of the third-party social service (e.g Twitter) for OAuth */
export enum SocialConnectionType {
  Discord = 'DISCORD',
  Mixer = 'MIXER',
  Twitch = 'TWITCH',
  Twitter = 'TWITTER',
  Xbox = 'XBOX'
}

/** Video Stage */
export type Stage = {
  __typename?: 'Stage';
  id?: Maybe<Scalars['ID']['output']>;
  /** Stage name */
  name?: Maybe<Scalars['String']['output']>;
};

/** A standing indicates the placement of something within a container. */
export type Standing = {
  __typename?: 'Standing';
  /**
   * The containing entity that contextualizes this standing. Event standings, for
   * example, represent an entrant's standing in the entire event vs. Set standings
   * which is an entrant's standing in only a single set within an event.
   */
  container?: Maybe<StandingContainer>;
  /** If the entity this standing is assigned to can be resolved into an entrant, this will provide the entrant. */
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']['output']>;
  isFinal?: Maybe<Scalars['Boolean']['output']>;
  /** Metadata that goes along with this standing. Can take on different forms based on standing group type and settings. */
  metadata?: Maybe<Scalars['JSON']['output']>;
  placement?: Maybe<Scalars['Int']['output']>;
  /** The player(s) tied to this standing's entity */
  player?: Maybe<Player>;
  /** Entrant's win/loss record for this standing */
  setRecordWithoutByes?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated The "placement" field is identical and will eventually replace "standing" */
  standing?: Maybe<Scalars['Int']['output']>;
  stats?: Maybe<StandingStats>;
  totalPoints?: Maybe<Scalars['Float']['output']>;
};

export type StandingConnection = {
  __typename?: 'StandingConnection';
  nodes?: Maybe<Array<Maybe<Standing>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** The containing entity that this standing is for */
export type StandingContainer = Event | PhaseGroup | Set | Tournament;

export type StandingGroupStandingPageFilter = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type StandingPageFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<PaginationSearchType>;
};

export type StandingPaginationQuery = {
  filter?: InputMaybe<StandingPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Any stats related to this standing. This type is experimental and very likely to change in the future. */
export type StandingStats = {
  __typename?: 'StandingStats';
  score?: Maybe<Score>;
};

export type StationFilter = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type StationUpsertInput = {
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  number: Scalars['Int']['input'];
};

/** Stations, such as a stream setup, at an event */
export type Stations = {
  __typename?: 'Stations';
  canAutoAssign?: Maybe<Scalars['Boolean']['output']>;
  clusterNumber?: Maybe<Scalars['String']['output']>;
  clusterPrefix?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  identifier?: Maybe<Scalars['Int']['output']>;
  numSetups?: Maybe<Scalars['Int']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  queue?: Maybe<Scalars['JSON']['output']>;
  queueDepth?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['Int']['output']>;
  /** Tournament event stream for a station */
  stream?: Maybe<Streams>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type StationsConnection = {
  __typename?: 'StationsConnection';
  nodes?: Maybe<Array<Maybe<Stations>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** A Stream object */
export type Stream = {
  __typename?: 'Stream';
  id?: Maybe<Scalars['ID']['output']>;
  /** Whether the stream is currently live. May be slightly delayed. */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the stream */
  name?: Maybe<Scalars['String']['output']>;
  /** The name of the external service providing this auth i.e. "twitch" */
  type?: Maybe<StreamType>;
};

/** A Stream queue object */
export type StreamQueue = {
  __typename?: 'StreamQueue';
  id?: Maybe<Scalars['String']['output']>;
  /** The sets on the stream */
  sets?: Maybe<Array<Maybe<Set>>>;
  /** The stream on the queue */
  stream?: Maybe<Streams>;
};

/** Represents the source of a stream */
export enum StreamSource {
  /** Stream is on smashcast.tv channel */
  Hitbox = 'HITBOX',
  /** Stream is on a mixer.com channel */
  Mixer = 'MIXER',
  /** Stream is on a stream.me channel */
  Streamme = 'STREAMME',
  /** Stream is on twitch.tv channel */
  Twitch = 'TWITCH',
  /** Stream is on a youtube.com channel */
  Youtube = 'YOUTUBE'
}

/** Represents the type of stream service */
export enum StreamType {
  Mixer = 'MIXER',
  Twitch = 'TWITCH',
  Youtube = 'YOUTUBE'
}

/** Tournament Stream */
export type Streams = {
  __typename?: 'Streams';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  numSetups?: Maybe<Scalars['Int']['output']>;
  parentStreamId?: Maybe<Scalars['Int']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  streamGame?: Maybe<Scalars['String']['output']>;
  streamId?: Maybe<Scalars['String']['output']>;
  streamLogo?: Maybe<Scalars['String']['output']>;
  streamName?: Maybe<Scalars['String']['output']>;
  streamSource?: Maybe<StreamSource>;
  streamStatus?: Maybe<Scalars['String']['output']>;
  streamType?: Maybe<Scalars['Int']['output']>;
  streamTypeId?: Maybe<Scalars['Int']['output']>;
};

/** A team, either at the global level or within the context of an event */
export type Team = {
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']['output']>;
};


/** A team, either at the global level or within the context of an event */
export type TeamImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A team, either at the global level or within the context of an event */
export type TeamMembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

/** A set of actions available for a team to take */
export type TeamActionSet = ActionSet & {
  __typename?: 'TeamActionSet';
  id?: Maybe<Scalars['ID']['output']>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  nodes?: Maybe<Array<Maybe<Team>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** A member of a team */
export type TeamMember = {
  __typename?: 'TeamMember';
  id?: Maybe<Scalars['ID']['output']>;
  isAlternate?: Maybe<Scalars['Boolean']['output']>;
  isCaptain?: Maybe<Scalars['Boolean']['output']>;
  /** The type of the team member */
  memberType?: Maybe<TeamMemberType>;
  participant?: Maybe<Participant>;
  player?: Maybe<Player>;
  /** The status of the team member */
  status?: Maybe<TeamMemberStatus>;
};

/** Membership status of a team member */
export enum TeamMemberStatus {
  Accepted = 'ACCEPTED',
  Alum = 'ALUM',
  Hiatus = 'HIATUS',
  Invited = 'INVITED',
  OpenSpot = 'OPEN_SPOT',
  Request = 'REQUEST',
  Unknown = 'UNKNOWN'
}

/** Membership type of a team member */
export enum TeamMemberType {
  Player = 'PLAYER',
  Staff = 'STAFF'
}

export type TeamPaginationFilter = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  eventState?: InputMaybe<ActivityState>;
  globalTeamId?: InputMaybe<Scalars['ID']['input']>;
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  maxEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  memberStatus?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
  minEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  rosterComplete?: InputMaybe<Scalars['Boolean']['input']>;
  rosterIncomplete?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  tournamentId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type TeamPaginationQuery = {
  filter?: InputMaybe<TeamPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** Team roster size requirements */
export type TeamRosterSize = {
  __typename?: 'TeamRosterSize';
  maxAlternates?: Maybe<Scalars['Int']['output']>;
  maxPlayers?: Maybe<Scalars['Int']['output']>;
  minAlternates?: Maybe<Scalars['Int']['output']>;
  minPlayers?: Maybe<Scalars['Int']['output']>;
};

export type TopGameFilter = {
  /** Array of which # top game you want to filter on.e.g. [2, 3] will filter on the 2nd and 3rd top games */
  gameNums?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** A tournament */
export type Tournament = {
  __typename?: 'Tournament';
  addrState?: Maybe<Scalars['String']['output']>;
  /** Admin-only view of admins for this tournament */
  admins?: Maybe<Array<Maybe<User>>>;
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  /** When the tournament was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  /** When the tournament ends */
  endAt?: Maybe<Scalars['Timestamp']['output']>;
  /** When does event registration close */
  eventRegistrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  events?: Maybe<Array<Maybe<Event>>>;
  /** True if tournament has at least one offline event */
  hasOfflineEvents?: Maybe<Scalars['Boolean']['output']>;
  hasOnlineEvents?: Maybe<Scalars['Boolean']['output']>;
  hashtag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** True if tournament has at least one online event */
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  /** Is tournament registration open */
  isRegistrationOpen?: Maybe<Scalars['Boolean']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  links?: Maybe<TournamentLinks>;
  lng?: Maybe<Scalars['Float']['output']>;
  mapsPlaceId?: Maybe<Scalars['String']['output']>;
  /** The tournament name */
  name?: Maybe<Scalars['String']['output']>;
  /** Number of attendees including spectators, if public */
  numAttendees?: Maybe<Scalars['Int']['output']>;
  /** The user who created the tournament */
  owner?: Maybe<User>;
  /** Paginated, queryable list of participants */
  participants?: Maybe<ParticipantConnection>;
  postalCode?: Maybe<Scalars['String']['output']>;
  primaryContact?: Maybe<Scalars['String']['output']>;
  primaryContactType?: Maybe<Scalars['String']['output']>;
  /** Publishing settings for this tournament */
  publishing?: Maybe<Scalars['JSON']['output']>;
  /** When does registration for the tournament end */
  registrationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  /** The short slug used to form the url */
  shortSlug?: Maybe<Scalars['String']['output']>;
  /** The slug used to form the url */
  slug?: Maybe<Scalars['String']['output']>;
  /** When the tournament Starts */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
  /** State of the tournament, can be ActivityState::CREATED, ActivityState::ACTIVE, or ActivityState::COMPLETED */
  state?: Maybe<Scalars['Int']['output']>;
  stations?: Maybe<StationsConnection>;
  streamQueue?: Maybe<Array<Maybe<StreamQueue>>>;
  streams?: Maybe<Array<Maybe<Streams>>>;
  /** When is the team creation deadline */
  teamCreationClosesAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Paginated, queryable list of teams */
  teams?: Maybe<TeamConnection>;
  /** The timezone of the tournament */
  timezone?: Maybe<Scalars['String']['output']>;
  /** The type of tournament from TournamentType */
  tournamentType?: Maybe<Scalars['Int']['output']>;
  /** When the tournament was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Build Tournament URL */
  url?: Maybe<Scalars['String']['output']>;
  venueAddress?: Maybe<Scalars['String']['output']>;
  venueName?: Maybe<Scalars['String']['output']>;
  /** List of all waves in this tournament */
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** A tournament */
export type TournamentAdminsArgs = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A tournament */
export type TournamentEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


/** A tournament */
export type TournamentImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A tournament */
export type TournamentParticipantsArgs = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  query: ParticipantPaginationQuery;
};


/** A tournament */
export type TournamentStationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


/** A tournament */
export type TournamentTeamsArgs = {
  query: TeamPaginationQuery;
};


/** A tournament */
export type TournamentUrlArgs = {
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  tab?: InputMaybe<Scalars['String']['input']>;
};

export type TournamentConnection = {
  __typename?: 'TournamentConnection';
  nodes?: Maybe<Array<Maybe<Tournament>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TournamentLinks = {
  __typename?: 'TournamentLinks';
  discord?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
};

export type TournamentLocationFilter = {
  /** e.g. 50mi */
  distance?: InputMaybe<Scalars['String']['input']>;
  /** Latitude, Longitude */
  distanceFrom?: InputMaybe<Scalars['String']['input']>;
};

export type TournamentPageFilter = {
  activeShops?: InputMaybe<Scalars['Boolean']['input']>;
  addrState?: InputMaybe<Scalars['String']['input']>;
  afterDate?: InputMaybe<Scalars['Timestamp']['input']>;
  beforeDate?: InputMaybe<Scalars['Timestamp']['input']>;
  computedUpdatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  hasBannerImages?: InputMaybe<Scalars['Boolean']['input']>;
  hasOnlineEvents?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** If true, filter to only tournaments the currently authed user is an admin of */
  isCurrentUserAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<TournamentLocationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID of the user that owns this tournament. */
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  publiclySearchable?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  regOpen?: InputMaybe<Scalars['Boolean']['input']>;
  sortByScore?: InputMaybe<Scalars['Boolean']['input']>;
  staffPicks?: InputMaybe<Scalars['Boolean']['input']>;
  topGames?: InputMaybe<TopGameFilter>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  venueName?: InputMaybe<Scalars['String']['input']>;
  videogameIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum TournamentPaginationSort {
  ComputedUpdatedAt = 'computedUpdatedAt',
  EndAt = 'endAt',
  EventRegistrationClosesAt = 'eventRegistrationClosesAt',
  StartAt = 'startAt'
}

export type TournamentQuery = {
  filter?: InputMaybe<TournamentPageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<TournamentPaginationSort>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type TournamentRegistrationInput = {
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UpdatePhaseSeedInfo = {
  phaseGroupId?: InputMaybe<Scalars['ID']['input']>;
  seedId: Scalars['ID']['input'];
  seedNum: Scalars['ID']['input'];
};

export type UpdatePhaseSeedingOptions = {
  /** Validate that seedMapping exactly accounts for all entrants in the phase */
  strictMode?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A user */
export type User = {
  __typename?: 'User';
  /** Authorizations to external services (i.e. Twitch, Twitter) */
  authorizations?: Maybe<Array<Maybe<ProfileAuthorization>>>;
  bio?: Maybe<Scalars['String']['output']>;
  /** Public facing user birthday that respects user publishing settings */
  birthday?: Maybe<Scalars['String']['output']>;
  /** Uniquely identifying token for user. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** Events this user has competed in */
  events?: Maybe<EventConnection>;
  genderPronoun?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Leagues this user has competed in */
  leagues?: Maybe<LeagueConnection>;
  /** Public location info for this user */
  location?: Maybe<Address>;
  /** Public facing user name that respects user publishing settings */
  name?: Maybe<Scalars['String']['output']>;
  /** player for user */
  player?: Maybe<Player>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Tournaments this user is organizing or competing in */
  tournaments?: Maybe<TournamentConnection>;
};


/** A user */
export type UserAuthorizationsArgs = {
  types?: InputMaybe<Array<InputMaybe<SocialConnectionType>>>;
};


/** A user */
export type UserEventsArgs = {
  query?: InputMaybe<UserEventsPaginationQuery>;
};


/** A user */
export type UserImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


/** A user */
export type UserLeaguesArgs = {
  query?: InputMaybe<UserLeaguesPaginationQuery>;
};


/** A user */
export type UserTournamentsArgs = {
  query?: InputMaybe<UserTournamentsPaginationQuery>;
};

export type UserEventsPaginationFilter = {
  eventType?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<LocationFilterType>;
  maxEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  minEntrantCount?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UserEventsPaginationQuery = {
  filter?: InputMaybe<UserEventsPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserLeaguesPaginationFilter = {
  past?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UserLeaguesPaginationQuery = {
  filter?: InputMaybe<UserLeaguesPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

export type UserTournamentsPaginationFilter = {
  excludeId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  past?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<PaginationSearchType>;
  tournamentView?: InputMaybe<Scalars['String']['input']>;
  upcoming?: InputMaybe<Scalars['Boolean']['input']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UserTournamentsPaginationQuery = {
  filter?: InputMaybe<UserTournamentsPaginationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A videogame */
export type Videogame = {
  __typename?: 'Videogame';
  /** All characters for this videogame */
  characters?: Maybe<Array<Maybe<Character>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** All stages for this videogame */
  stages?: Maybe<Array<Maybe<Stage>>>;
};


/** A videogame */
export type VideogameImagesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export type VideogameConnection = {
  __typename?: 'VideogameConnection';
  nodes?: Maybe<Array<Maybe<Videogame>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type VideogamePageFilter = {
  forUser?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VideogameQuery = {
  filter?: InputMaybe<VideogamePageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** How many nodes to return for the page. Maximum value of 512 */
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
};

/** A wave in a tournament */
export type Wave = {
  __typename?: 'Wave';
  id?: Maybe<Scalars['ID']['output']>;
  /** The Wave Identifier */
  identifier?: Maybe<Scalars['String']['output']>;
  /** Unix time the wave is scheduled to start. */
  startAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type WaveUpsertInput = {
  endAt: Scalars['Timestamp']['input'];
  identifier: Scalars['String']['input'];
  startAt: Scalars['Timestamp']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  StandingContainer:
    | ( Omit<Event, 'entrants' | 'league' | 'phaseGroups' | 'phases' | 'sets' | 'standings' | 'tournament' | 'userEntrant'> & { entrants?: Maybe<_RefType['EntrantConnection']>, league?: Maybe<_RefType['League']>, phaseGroups?: Maybe<Array<Maybe<_RefType['PhaseGroup']>>>, phases?: Maybe<Array<Maybe<_RefType['Phase']>>>, sets?: Maybe<_RefType['SetConnection']>, standings?: Maybe<_RefType['StandingConnection']>, tournament?: Maybe<_RefType['Tournament']>, userEntrant?: Maybe<_RefType['Entrant']> } )
    | ( Omit<PhaseGroup, 'paginatedSeeds' | 'paginatedSets' | 'phase' | 'progressionsOut' | 'seeds' | 'sets' | 'standings'> & { paginatedSeeds?: Maybe<_RefType['SeedConnection']>, paginatedSets?: Maybe<_RefType['SetConnection']>, phase?: Maybe<_RefType['Phase']>, progressionsOut?: Maybe<Array<Maybe<_RefType['Progression']>>>, seeds?: Maybe<_RefType['SeedConnection']>, sets?: Maybe<_RefType['SetConnection']>, standings?: Maybe<_RefType['StandingConnection']> } )
    | ( Omit<Set, 'entrant1Source' | 'entrant2Source' | 'event' | 'game' | 'games' | 'loserProgressionSeed' | 'phaseGroup' | 'resetAffectedData' | 'slots' | 'winnerProgressionSeed'> & { entrant1Source?: Maybe<_RefType['SetEntrantSource']>, entrant2Source?: Maybe<_RefType['SetEntrantSource']>, event?: Maybe<_RefType['Event']>, game?: Maybe<_RefType['Game']>, games?: Maybe<Array<Maybe<_RefType['Game']>>>, loserProgressionSeed?: Maybe<_RefType['Seed']>, phaseGroup?: Maybe<_RefType['PhaseGroup']>, resetAffectedData?: Maybe<_RefType['ResetAffectedData']>, slots?: Maybe<Array<Maybe<_RefType['SetSlot']>>>, winnerProgressionSeed?: Maybe<_RefType['Seed']> } )
    | ( Omit<Tournament, 'admins' | 'events' | 'links' | 'owner' | 'teams'> & { admins?: Maybe<Array<Maybe<_RefType['User']>>>, events?: Maybe<Array<Maybe<_RefType['Event']>>>, links?: Maybe<_RefType['TournamentLinks']>, owner?: Maybe<_RefType['User']>, teams?: Maybe<_RefType['TeamConnection']> } )
  ;
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  ActionSet: ( TeamActionSet );
  BracketConfig: ( RaceBracketConfig );
  MatchConfig: ( RaceMatchConfig );
  Team:
    | ( Omit<EventTeam, 'entrant' | 'event' | 'globalTeam' | 'members'> & { entrant?: Maybe<_RefType['Entrant']>, event?: Maybe<_RefType['Event']>, globalTeam?: Maybe<_RefType['GlobalTeam']>, members?: Maybe<Array<Maybe<_RefType['TeamMember']>>> } )
    | ( Omit<GlobalTeam, 'entrant' | 'event' | 'eventTeams' | 'leagueTeams' | 'members'> & { entrant?: Maybe<_RefType['Entrant']>, event?: Maybe<_RefType['Event']>, eventTeams?: Maybe<_RefType['EventTeamConnection']>, leagueTeams?: Maybe<_RefType['EventTeamConnection']>, members?: Maybe<Array<Maybe<_RefType['TeamMember']>>> } )
  ;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ActionSet: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ActionSet']>;
  ActivityState: ActivityState;
  Address: ResolverTypeWrapper<Address>;
  AuthorizationType: AuthorizationType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BracketConfig: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BracketConfig']>;
  BracketSetGameDataInput: BracketSetGameDataInput;
  BracketSetGameSelectionInput: BracketSetGameSelectionInput;
  BracketType: BracketType;
  Character: ResolverTypeWrapper<Character>;
  Comparator: Comparator;
  ContactInfo: ResolverTypeWrapper<ContactInfo>;
  Entrant: ResolverTypeWrapper<Omit<Entrant, 'event' | 'paginatedSets' | 'participants' | 'seeds' | 'standing' | 'team'> & { event?: Maybe<ResolversTypes['Event']>, paginatedSets?: Maybe<ResolversTypes['SetConnection']>, participants?: Maybe<Array<Maybe<ResolversTypes['Participant']>>>, seeds?: Maybe<Array<Maybe<ResolversTypes['Seed']>>>, standing?: Maybe<ResolversTypes['Standing']>, team?: Maybe<ResolversTypes['Team']> }>;
  EntrantConnection: ResolverTypeWrapper<Omit<EntrantConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Entrant']>>> }>;
  Event: ResolverTypeWrapper<Omit<Event, 'entrants' | 'league' | 'phaseGroups' | 'phases' | 'sets' | 'standings' | 'tournament' | 'userEntrant'> & { entrants?: Maybe<ResolversTypes['EntrantConnection']>, league?: Maybe<ResolversTypes['League']>, phaseGroups?: Maybe<Array<Maybe<ResolversTypes['PhaseGroup']>>>, phases?: Maybe<Array<Maybe<ResolversTypes['Phase']>>>, sets?: Maybe<ResolversTypes['SetConnection']>, standings?: Maybe<ResolversTypes['StandingConnection']>, tournament?: Maybe<ResolversTypes['Tournament']>, userEntrant?: Maybe<ResolversTypes['Entrant']> }>;
  EventConnection: ResolverTypeWrapper<Omit<EventConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Event']>>> }>;
  EventEntrantPageQuery: EventEntrantPageQuery;
  EventEntrantPageQueryFilter: EventEntrantPageQueryFilter;
  EventFilter: EventFilter;
  EventOwner: ResolverTypeWrapper<EventOwner>;
  EventOwnerConnection: ResolverTypeWrapper<EventOwnerConnection>;
  EventOwnersQuery: EventOwnersQuery;
  EventTeam: ResolverTypeWrapper<Omit<EventTeam, 'entrant' | 'event' | 'globalTeam' | 'members'> & { entrant?: Maybe<ResolversTypes['Entrant']>, event?: Maybe<ResolversTypes['Event']>, globalTeam?: Maybe<ResolversTypes['GlobalTeam']>, members?: Maybe<Array<Maybe<ResolversTypes['TeamMember']>>> }>;
  EventTeamConnection: ResolverTypeWrapper<Omit<EventTeamConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['EventTeam']>>> }>;
  EventTier: ResolverTypeWrapper<EventTier>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Game: ResolverTypeWrapper<Omit<Game, 'selections'> & { selections?: Maybe<Array<Maybe<ResolversTypes['GameSelection']>>> }>;
  GameSelection: ResolverTypeWrapper<Omit<GameSelection, 'character' | 'entrant' | 'participant'> & { character?: Maybe<ResolversTypes['Character']>, entrant?: Maybe<ResolversTypes['Entrant']>, participant?: Maybe<ResolversTypes['Participant']> }>;
  GameSelectionType: GameSelectionType;
  GlobalTeam: ResolverTypeWrapper<Omit<GlobalTeam, 'entrant' | 'event' | 'eventTeams' | 'leagueTeams' | 'members'> & { entrant?: Maybe<ResolversTypes['Entrant']>, event?: Maybe<ResolversTypes['Event']>, eventTeams?: Maybe<ResolversTypes['EventTeamConnection']>, leagueTeams?: Maybe<ResolversTypes['EventTeamConnection']>, members?: Maybe<Array<Maybe<ResolversTypes['TeamMember']>>> }>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  League: ResolverTypeWrapper<Omit<League, 'links' | 'standings'> & { links?: Maybe<ResolversTypes['TournamentLinks']>, standings?: Maybe<ResolversTypes['StandingConnection']> }>;
  LeagueConnection: ResolverTypeWrapper<Omit<LeagueConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['League']>>> }>;
  LeagueEventsFilter: LeagueEventsFilter;
  LeagueEventsQuery: LeagueEventsQuery;
  LeaguePageFilter: LeaguePageFilter;
  LeagueQuery: LeagueQuery;
  LocationFilterType: LocationFilterType;
  MatchConfig: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MatchConfig']>;
  MatchConfigVerificationMethod: MatchConfigVerificationMethod;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginationSearchType: PaginationSearchType;
  Participant: ResolverTypeWrapper<Omit<Participant, 'contactInfo' | 'entrants' | 'events' | 'player' | 'user'> & { contactInfo?: Maybe<ResolversTypes['ContactInfo']>, entrants?: Maybe<Array<Maybe<ResolversTypes['Entrant']>>>, events?: Maybe<Array<Maybe<ResolversTypes['Event']>>>, player?: Maybe<ResolversTypes['Player']>, user?: Maybe<ResolversTypes['User']> }>;
  ParticipantConnection: ResolverTypeWrapper<Omit<ParticipantConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Participant']>>> }>;
  ParticipantPageFilter: ParticipantPageFilter;
  ParticipantPaginationQuery: ParticipantPaginationQuery;
  Phase: ResolverTypeWrapper<Omit<Phase, 'event' | 'paginatedSeeds' | 'phaseGroups' | 'progressions' | 'seeds' | 'sets'> & { event?: Maybe<ResolversTypes['Event']>, paginatedSeeds?: Maybe<ResolversTypes['SeedConnection']>, phaseGroups?: Maybe<ResolversTypes['PhaseGroupConnection']>, progressions?: Maybe<Array<Maybe<ResolversTypes['Progression']>>>, seeds?: Maybe<ResolversTypes['SeedConnection']>, sets?: Maybe<ResolversTypes['SetConnection']> }>;
  PhaseGroup: ResolverTypeWrapper<Omit<PhaseGroup, 'paginatedSeeds' | 'paginatedSets' | 'phase' | 'progressionsOut' | 'seeds' | 'sets' | 'standings'> & { paginatedSeeds?: Maybe<ResolversTypes['SeedConnection']>, paginatedSets?: Maybe<ResolversTypes['SetConnection']>, phase?: Maybe<ResolversTypes['Phase']>, progressionsOut?: Maybe<Array<Maybe<ResolversTypes['Progression']>>>, seeds?: Maybe<ResolversTypes['SeedConnection']>, sets?: Maybe<ResolversTypes['SetConnection']>, standings?: Maybe<ResolversTypes['StandingConnection']> }>;
  PhaseGroupConnection: ResolverTypeWrapper<Omit<PhaseGroupConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['PhaseGroup']>>> }>;
  PhaseGroupPageQuery: PhaseGroupPageQuery;
  PhaseGroupPageQueryFilter: PhaseGroupPageQueryFilter;
  PhaseGroupUpdateInput: PhaseGroupUpdateInput;
  PhaseUpsertInput: PhaseUpsertInput;
  Player: ResolverTypeWrapper<Omit<Player, 'rankings' | 'recentSets' | 'recentStandings' | 'sets' | 'user'> & { rankings?: Maybe<Array<Maybe<ResolversTypes['PlayerRank']>>>, recentSets?: Maybe<Array<Maybe<ResolversTypes['Set']>>>, recentStandings?: Maybe<Array<Maybe<ResolversTypes['Standing']>>>, sets?: Maybe<ResolversTypes['SetConnection']>, user?: Maybe<ResolversTypes['User']> }>;
  PlayerRank: ResolverTypeWrapper<PlayerRank>;
  ProfileAuthorization: ResolverTypeWrapper<ProfileAuthorization>;
  Progression: ResolverTypeWrapper<Omit<Progression, 'originPhase' | 'originPhaseGroup'> & { originPhase?: Maybe<ResolversTypes['Phase']>, originPhaseGroup?: Maybe<ResolversTypes['PhaseGroup']> }>;
  ProgressionData: ResolverTypeWrapper<ProgressionData>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RaceBracketConfig: ResolverTypeWrapper<RaceBracketConfig>;
  RaceLimitMode: RaceLimitMode;
  RaceMatchConfig: ResolverTypeWrapper<RaceMatchConfig>;
  RaceType: RaceType;
  ResetAffectedData: ResolverTypeWrapper<Omit<ResetAffectedData, 'affectedSets'> & { affectedSets?: Maybe<Array<Maybe<ResolversTypes['Set']>>> }>;
  ResolveConflictsLockedSeedConfig: ResolveConflictsLockedSeedConfig;
  ResolveConflictsOptions: ResolveConflictsOptions;
  Round: ResolverTypeWrapper<Round>;
  Score: ResolverTypeWrapper<Score>;
  Seed: ResolverTypeWrapper<Omit<Seed, 'entrant' | 'phase' | 'phaseGroup' | 'players' | 'progressionSource' | 'standings'> & { entrant?: Maybe<ResolversTypes['Entrant']>, phase?: Maybe<ResolversTypes['Phase']>, phaseGroup?: Maybe<ResolversTypes['PhaseGroup']>, players?: Maybe<Array<Maybe<ResolversTypes['Player']>>>, progressionSource?: Maybe<ResolversTypes['Progression']>, standings?: Maybe<Array<Maybe<ResolversTypes['Standing']>>> }>;
  SeedConnection: ResolverTypeWrapper<Omit<SeedConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Seed']>>> }>;
  SeedPageFilter: SeedPageFilter;
  SeedPaginationQuery: SeedPaginationQuery;
  Set: ResolverTypeWrapper<Omit<Set, 'entrant1Source' | 'entrant2Source' | 'event' | 'game' | 'games' | 'loserProgressionSeed' | 'phaseGroup' | 'resetAffectedData' | 'slots' | 'winnerProgressionSeed'> & { entrant1Source?: Maybe<ResolversTypes['SetEntrantSource']>, entrant2Source?: Maybe<ResolversTypes['SetEntrantSource']>, event?: Maybe<ResolversTypes['Event']>, game?: Maybe<ResolversTypes['Game']>, games?: Maybe<Array<Maybe<ResolversTypes['Game']>>>, loserProgressionSeed?: Maybe<ResolversTypes['Seed']>, phaseGroup?: Maybe<ResolversTypes['PhaseGroup']>, resetAffectedData?: Maybe<ResolversTypes['ResetAffectedData']>, slots?: Maybe<Array<Maybe<ResolversTypes['SetSlot']>>>, winnerProgressionSeed?: Maybe<ResolversTypes['Seed']> }>;
  SetConnection: ResolverTypeWrapper<Omit<SetConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Set']>>> }>;
  SetEntrantSource: ResolverTypeWrapper<SetEntrantSource>;
  SetFilterLocation: SetFilterLocation;
  SetFilterLocationDistanceFrom: SetFilterLocationDistanceFrom;
  SetFilterLocationDistanceFromPoint: SetFilterLocationDistanceFromPoint;
  SetFilters: SetFilters;
  SetSlot: ResolverTypeWrapper<Omit<SetSlot, 'entrant' | 'seed' | 'standing'> & { entrant?: Maybe<ResolversTypes['Entrant']>, seed?: Maybe<ResolversTypes['Seed']>, standing?: Maybe<ResolversTypes['Standing']> }>;
  SetSortType: SetSortType;
  Shop: ResolverTypeWrapper<Omit<Shop, 'messages'> & { messages?: Maybe<ResolversTypes['ShopOrderMessageConnection']> }>;
  ShopLevel: ResolverTypeWrapper<ShopLevel>;
  ShopLevelConnection: ResolverTypeWrapper<ShopLevelConnection>;
  ShopLevelsQuery: ShopLevelsQuery;
  ShopOrderMessage: ResolverTypeWrapper<Omit<ShopOrderMessage, 'player'> & { player?: Maybe<ResolversTypes['Player']> }>;
  ShopOrderMessageConnection: ResolverTypeWrapper<Omit<ShopOrderMessageConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['ShopOrderMessage']>>> }>;
  ShopOrderMessagesQuery: ShopOrderMessagesQuery;
  SocialConnectionType: SocialConnectionType;
  Stage: ResolverTypeWrapper<Stage>;
  Standing: ResolverTypeWrapper<Omit<Standing, 'container' | 'entrant' | 'player'> & { container?: Maybe<ResolversTypes['StandingContainer']>, entrant?: Maybe<ResolversTypes['Entrant']>, player?: Maybe<ResolversTypes['Player']> }>;
  StandingConnection: ResolverTypeWrapper<Omit<StandingConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Standing']>>> }>;
  StandingContainer: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['StandingContainer']>;
  StandingGroupStandingPageFilter: StandingGroupStandingPageFilter;
  StandingPageFilter: StandingPageFilter;
  StandingPaginationQuery: StandingPaginationQuery;
  StandingStats: ResolverTypeWrapper<StandingStats>;
  StationFilter: StationFilter;
  StationUpsertInput: StationUpsertInput;
  Stations: ResolverTypeWrapper<Stations>;
  StationsConnection: ResolverTypeWrapper<StationsConnection>;
  Stream: ResolverTypeWrapper<Stream>;
  StreamQueue: ResolverTypeWrapper<Omit<StreamQueue, 'sets'> & { sets?: Maybe<Array<Maybe<ResolversTypes['Set']>>> }>;
  StreamSource: StreamSource;
  StreamType: StreamType;
  Streams: ResolverTypeWrapper<Streams>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Team: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Team']>;
  TeamActionSet: ResolverTypeWrapper<TeamActionSet>;
  TeamConnection: ResolverTypeWrapper<Omit<TeamConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Team']>>> }>;
  TeamMember: ResolverTypeWrapper<Omit<TeamMember, 'participant' | 'player'> & { participant?: Maybe<ResolversTypes['Participant']>, player?: Maybe<ResolversTypes['Player']> }>;
  TeamMemberStatus: TeamMemberStatus;
  TeamMemberType: TeamMemberType;
  TeamPaginationFilter: TeamPaginationFilter;
  TeamPaginationQuery: TeamPaginationQuery;
  TeamRosterSize: ResolverTypeWrapper<TeamRosterSize>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  TopGameFilter: TopGameFilter;
  Tournament: ResolverTypeWrapper<Omit<Tournament, 'admins' | 'events' | 'links' | 'owner' | 'teams'> & { admins?: Maybe<Array<Maybe<ResolversTypes['User']>>>, events?: Maybe<Array<Maybe<ResolversTypes['Event']>>>, links?: Maybe<ResolversTypes['TournamentLinks']>, owner?: Maybe<ResolversTypes['User']>, teams?: Maybe<ResolversTypes['TeamConnection']> }>;
  TournamentConnection: ResolverTypeWrapper<Omit<TournamentConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversTypes['Tournament']>>> }>;
  TournamentLinks: ResolverTypeWrapper<TournamentLinks>;
  TournamentLocationFilter: TournamentLocationFilter;
  TournamentPageFilter: TournamentPageFilter;
  TournamentPaginationSort: TournamentPaginationSort;
  TournamentQuery: TournamentQuery;
  TournamentRegistrationInput: TournamentRegistrationInput;
  UpdatePhaseSeedInfo: UpdatePhaseSeedInfo;
  UpdatePhaseSeedingOptions: UpdatePhaseSeedingOptions;
  User: ResolverTypeWrapper<Omit<User, 'leagues' | 'player' | 'tournaments'> & { leagues?: Maybe<ResolversTypes['LeagueConnection']>, player?: Maybe<ResolversTypes['Player']>, tournaments?: Maybe<ResolversTypes['TournamentConnection']> }>;
  UserEventsPaginationFilter: UserEventsPaginationFilter;
  UserEventsPaginationQuery: UserEventsPaginationQuery;
  UserLeaguesPaginationFilter: UserLeaguesPaginationFilter;
  UserLeaguesPaginationQuery: UserLeaguesPaginationQuery;
  UserTournamentsPaginationFilter: UserTournamentsPaginationFilter;
  UserTournamentsPaginationQuery: UserTournamentsPaginationQuery;
  Videogame: ResolverTypeWrapper<Omit<Videogame, 'characters'> & { characters?: Maybe<Array<Maybe<ResolversTypes['Character']>>> }>;
  VideogameConnection: ResolverTypeWrapper<VideogameConnection>;
  VideogamePageFilter: VideogamePageFilter;
  VideogameQuery: VideogameQuery;
  Wave: ResolverTypeWrapper<Wave>;
  WaveUpsertInput: WaveUpsertInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ActionSet: ResolversInterfaceTypes<ResolversParentTypes>['ActionSet'];
  Address: Address;
  Boolean: Scalars['Boolean']['output'];
  BracketConfig: ResolversInterfaceTypes<ResolversParentTypes>['BracketConfig'];
  BracketSetGameDataInput: BracketSetGameDataInput;
  BracketSetGameSelectionInput: BracketSetGameSelectionInput;
  Character: Character;
  ContactInfo: ContactInfo;
  Entrant: Omit<Entrant, 'event' | 'paginatedSets' | 'participants' | 'seeds' | 'standing' | 'team'> & { event?: Maybe<ResolversParentTypes['Event']>, paginatedSets?: Maybe<ResolversParentTypes['SetConnection']>, participants?: Maybe<Array<Maybe<ResolversParentTypes['Participant']>>>, seeds?: Maybe<Array<Maybe<ResolversParentTypes['Seed']>>>, standing?: Maybe<ResolversParentTypes['Standing']>, team?: Maybe<ResolversParentTypes['Team']> };
  EntrantConnection: Omit<EntrantConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Entrant']>>> };
  Event: Omit<Event, 'entrants' | 'league' | 'phaseGroups' | 'phases' | 'sets' | 'standings' | 'tournament' | 'userEntrant'> & { entrants?: Maybe<ResolversParentTypes['EntrantConnection']>, league?: Maybe<ResolversParentTypes['League']>, phaseGroups?: Maybe<Array<Maybe<ResolversParentTypes['PhaseGroup']>>>, phases?: Maybe<Array<Maybe<ResolversParentTypes['Phase']>>>, sets?: Maybe<ResolversParentTypes['SetConnection']>, standings?: Maybe<ResolversParentTypes['StandingConnection']>, tournament?: Maybe<ResolversParentTypes['Tournament']>, userEntrant?: Maybe<ResolversParentTypes['Entrant']> };
  EventConnection: Omit<EventConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Event']>>> };
  EventEntrantPageQuery: EventEntrantPageQuery;
  EventEntrantPageQueryFilter: EventEntrantPageQueryFilter;
  EventFilter: EventFilter;
  EventOwner: EventOwner;
  EventOwnerConnection: EventOwnerConnection;
  EventOwnersQuery: EventOwnersQuery;
  EventTeam: Omit<EventTeam, 'entrant' | 'event' | 'globalTeam' | 'members'> & { entrant?: Maybe<ResolversParentTypes['Entrant']>, event?: Maybe<ResolversParentTypes['Event']>, globalTeam?: Maybe<ResolversParentTypes['GlobalTeam']>, members?: Maybe<Array<Maybe<ResolversParentTypes['TeamMember']>>> };
  EventTeamConnection: Omit<EventTeamConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['EventTeam']>>> };
  EventTier: EventTier;
  Float: Scalars['Float']['output'];
  Game: Omit<Game, 'selections'> & { selections?: Maybe<Array<Maybe<ResolversParentTypes['GameSelection']>>> };
  GameSelection: Omit<GameSelection, 'character' | 'entrant' | 'participant'> & { character?: Maybe<ResolversParentTypes['Character']>, entrant?: Maybe<ResolversParentTypes['Entrant']>, participant?: Maybe<ResolversParentTypes['Participant']> };
  GlobalTeam: Omit<GlobalTeam, 'entrant' | 'event' | 'eventTeams' | 'leagueTeams' | 'members'> & { entrant?: Maybe<ResolversParentTypes['Entrant']>, event?: Maybe<ResolversParentTypes['Event']>, eventTeams?: Maybe<ResolversParentTypes['EventTeamConnection']>, leagueTeams?: Maybe<ResolversParentTypes['EventTeamConnection']>, members?: Maybe<Array<Maybe<ResolversParentTypes['TeamMember']>>> };
  ID: Scalars['ID']['output'];
  Image: Image;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  League: Omit<League, 'links' | 'standings'> & { links?: Maybe<ResolversParentTypes['TournamentLinks']>, standings?: Maybe<ResolversParentTypes['StandingConnection']> };
  LeagueConnection: Omit<LeagueConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['League']>>> };
  LeagueEventsFilter: LeagueEventsFilter;
  LeagueEventsQuery: LeagueEventsQuery;
  LeaguePageFilter: LeaguePageFilter;
  LeagueQuery: LeagueQuery;
  LocationFilterType: LocationFilterType;
  MatchConfig: ResolversInterfaceTypes<ResolversParentTypes>['MatchConfig'];
  Mutation: Record<PropertyKey, never>;
  PageInfo: PageInfo;
  PaginationSearchType: PaginationSearchType;
  Participant: Omit<Participant, 'contactInfo' | 'entrants' | 'events' | 'player' | 'user'> & { contactInfo?: Maybe<ResolversParentTypes['ContactInfo']>, entrants?: Maybe<Array<Maybe<ResolversParentTypes['Entrant']>>>, events?: Maybe<Array<Maybe<ResolversParentTypes['Event']>>>, player?: Maybe<ResolversParentTypes['Player']>, user?: Maybe<ResolversParentTypes['User']> };
  ParticipantConnection: Omit<ParticipantConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Participant']>>> };
  ParticipantPageFilter: ParticipantPageFilter;
  ParticipantPaginationQuery: ParticipantPaginationQuery;
  Phase: Omit<Phase, 'event' | 'paginatedSeeds' | 'phaseGroups' | 'progressions' | 'seeds' | 'sets'> & { event?: Maybe<ResolversParentTypes['Event']>, paginatedSeeds?: Maybe<ResolversParentTypes['SeedConnection']>, phaseGroups?: Maybe<ResolversParentTypes['PhaseGroupConnection']>, progressions?: Maybe<Array<Maybe<ResolversParentTypes['Progression']>>>, seeds?: Maybe<ResolversParentTypes['SeedConnection']>, sets?: Maybe<ResolversParentTypes['SetConnection']> };
  PhaseGroup: Omit<PhaseGroup, 'paginatedSeeds' | 'paginatedSets' | 'phase' | 'progressionsOut' | 'seeds' | 'sets' | 'standings'> & { paginatedSeeds?: Maybe<ResolversParentTypes['SeedConnection']>, paginatedSets?: Maybe<ResolversParentTypes['SetConnection']>, phase?: Maybe<ResolversParentTypes['Phase']>, progressionsOut?: Maybe<Array<Maybe<ResolversParentTypes['Progression']>>>, seeds?: Maybe<ResolversParentTypes['SeedConnection']>, sets?: Maybe<ResolversParentTypes['SetConnection']>, standings?: Maybe<ResolversParentTypes['StandingConnection']> };
  PhaseGroupConnection: Omit<PhaseGroupConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['PhaseGroup']>>> };
  PhaseGroupPageQuery: PhaseGroupPageQuery;
  PhaseGroupPageQueryFilter: PhaseGroupPageQueryFilter;
  PhaseGroupUpdateInput: PhaseGroupUpdateInput;
  PhaseUpsertInput: PhaseUpsertInput;
  Player: Omit<Player, 'rankings' | 'recentSets' | 'recentStandings' | 'sets' | 'user'> & { rankings?: Maybe<Array<Maybe<ResolversParentTypes['PlayerRank']>>>, recentSets?: Maybe<Array<Maybe<ResolversParentTypes['Set']>>>, recentStandings?: Maybe<Array<Maybe<ResolversParentTypes['Standing']>>>, sets?: Maybe<ResolversParentTypes['SetConnection']>, user?: Maybe<ResolversParentTypes['User']> };
  PlayerRank: PlayerRank;
  ProfileAuthorization: ProfileAuthorization;
  Progression: Omit<Progression, 'originPhase' | 'originPhaseGroup'> & { originPhase?: Maybe<ResolversParentTypes['Phase']>, originPhaseGroup?: Maybe<ResolversParentTypes['PhaseGroup']> };
  ProgressionData: ProgressionData;
  Query: Record<PropertyKey, never>;
  RaceBracketConfig: RaceBracketConfig;
  RaceMatchConfig: RaceMatchConfig;
  ResetAffectedData: Omit<ResetAffectedData, 'affectedSets'> & { affectedSets?: Maybe<Array<Maybe<ResolversParentTypes['Set']>>> };
  ResolveConflictsLockedSeedConfig: ResolveConflictsLockedSeedConfig;
  ResolveConflictsOptions: ResolveConflictsOptions;
  Round: Round;
  Score: Score;
  Seed: Omit<Seed, 'entrant' | 'phase' | 'phaseGroup' | 'players' | 'progressionSource' | 'standings'> & { entrant?: Maybe<ResolversParentTypes['Entrant']>, phase?: Maybe<ResolversParentTypes['Phase']>, phaseGroup?: Maybe<ResolversParentTypes['PhaseGroup']>, players?: Maybe<Array<Maybe<ResolversParentTypes['Player']>>>, progressionSource?: Maybe<ResolversParentTypes['Progression']>, standings?: Maybe<Array<Maybe<ResolversParentTypes['Standing']>>> };
  SeedConnection: Omit<SeedConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Seed']>>> };
  SeedPageFilter: SeedPageFilter;
  SeedPaginationQuery: SeedPaginationQuery;
  Set: Omit<Set, 'entrant1Source' | 'entrant2Source' | 'event' | 'game' | 'games' | 'loserProgressionSeed' | 'phaseGroup' | 'resetAffectedData' | 'slots' | 'winnerProgressionSeed'> & { entrant1Source?: Maybe<ResolversParentTypes['SetEntrantSource']>, entrant2Source?: Maybe<ResolversParentTypes['SetEntrantSource']>, event?: Maybe<ResolversParentTypes['Event']>, game?: Maybe<ResolversParentTypes['Game']>, games?: Maybe<Array<Maybe<ResolversParentTypes['Game']>>>, loserProgressionSeed?: Maybe<ResolversParentTypes['Seed']>, phaseGroup?: Maybe<ResolversParentTypes['PhaseGroup']>, resetAffectedData?: Maybe<ResolversParentTypes['ResetAffectedData']>, slots?: Maybe<Array<Maybe<ResolversParentTypes['SetSlot']>>>, winnerProgressionSeed?: Maybe<ResolversParentTypes['Seed']> };
  SetConnection: Omit<SetConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Set']>>> };
  SetEntrantSource: SetEntrantSource;
  SetFilterLocation: SetFilterLocation;
  SetFilterLocationDistanceFrom: SetFilterLocationDistanceFrom;
  SetFilterLocationDistanceFromPoint: SetFilterLocationDistanceFromPoint;
  SetFilters: SetFilters;
  SetSlot: Omit<SetSlot, 'entrant' | 'seed' | 'standing'> & { entrant?: Maybe<ResolversParentTypes['Entrant']>, seed?: Maybe<ResolversParentTypes['Seed']>, standing?: Maybe<ResolversParentTypes['Standing']> };
  Shop: Omit<Shop, 'messages'> & { messages?: Maybe<ResolversParentTypes['ShopOrderMessageConnection']> };
  ShopLevel: ShopLevel;
  ShopLevelConnection: ShopLevelConnection;
  ShopLevelsQuery: ShopLevelsQuery;
  ShopOrderMessage: Omit<ShopOrderMessage, 'player'> & { player?: Maybe<ResolversParentTypes['Player']> };
  ShopOrderMessageConnection: Omit<ShopOrderMessageConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['ShopOrderMessage']>>> };
  ShopOrderMessagesQuery: ShopOrderMessagesQuery;
  Stage: Stage;
  Standing: Omit<Standing, 'container' | 'entrant' | 'player'> & { container?: Maybe<ResolversParentTypes['StandingContainer']>, entrant?: Maybe<ResolversParentTypes['Entrant']>, player?: Maybe<ResolversParentTypes['Player']> };
  StandingConnection: Omit<StandingConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Standing']>>> };
  StandingContainer: ResolversUnionTypes<ResolversParentTypes>['StandingContainer'];
  StandingGroupStandingPageFilter: StandingGroupStandingPageFilter;
  StandingPageFilter: StandingPageFilter;
  StandingPaginationQuery: StandingPaginationQuery;
  StandingStats: StandingStats;
  StationFilter: StationFilter;
  StationUpsertInput: StationUpsertInput;
  Stations: Stations;
  StationsConnection: StationsConnection;
  Stream: Stream;
  StreamQueue: Omit<StreamQueue, 'sets'> & { sets?: Maybe<Array<Maybe<ResolversParentTypes['Set']>>> };
  Streams: Streams;
  String: Scalars['String']['output'];
  Team: ResolversInterfaceTypes<ResolversParentTypes>['Team'];
  TeamActionSet: TeamActionSet;
  TeamConnection: Omit<TeamConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Team']>>> };
  TeamMember: Omit<TeamMember, 'participant' | 'player'> & { participant?: Maybe<ResolversParentTypes['Participant']>, player?: Maybe<ResolversParentTypes['Player']> };
  TeamPaginationFilter: TeamPaginationFilter;
  TeamPaginationQuery: TeamPaginationQuery;
  TeamRosterSize: TeamRosterSize;
  Timestamp: Scalars['Timestamp']['output'];
  TopGameFilter: TopGameFilter;
  Tournament: Omit<Tournament, 'admins' | 'events' | 'links' | 'owner' | 'teams'> & { admins?: Maybe<Array<Maybe<ResolversParentTypes['User']>>>, events?: Maybe<Array<Maybe<ResolversParentTypes['Event']>>>, links?: Maybe<ResolversParentTypes['TournamentLinks']>, owner?: Maybe<ResolversParentTypes['User']>, teams?: Maybe<ResolversParentTypes['TeamConnection']> };
  TournamentConnection: Omit<TournamentConnection, 'nodes'> & { nodes?: Maybe<Array<Maybe<ResolversParentTypes['Tournament']>>> };
  TournamentLinks: TournamentLinks;
  TournamentLocationFilter: TournamentLocationFilter;
  TournamentPageFilter: TournamentPageFilter;
  TournamentQuery: TournamentQuery;
  TournamentRegistrationInput: TournamentRegistrationInput;
  UpdatePhaseSeedInfo: UpdatePhaseSeedInfo;
  UpdatePhaseSeedingOptions: UpdatePhaseSeedingOptions;
  User: Omit<User, 'leagues' | 'player' | 'tournaments'> & { leagues?: Maybe<ResolversParentTypes['LeagueConnection']>, player?: Maybe<ResolversParentTypes['Player']>, tournaments?: Maybe<ResolversParentTypes['TournamentConnection']> };
  UserEventsPaginationFilter: UserEventsPaginationFilter;
  UserEventsPaginationQuery: UserEventsPaginationQuery;
  UserLeaguesPaginationFilter: UserLeaguesPaginationFilter;
  UserLeaguesPaginationQuery: UserLeaguesPaginationQuery;
  UserTournamentsPaginationFilter: UserTournamentsPaginationFilter;
  UserTournamentsPaginationQuery: UserTournamentsPaginationQuery;
  Videogame: Omit<Videogame, 'characters'> & { characters?: Maybe<Array<Maybe<ResolversParentTypes['Character']>>> };
  VideogameConnection: VideogameConnection;
  VideogamePageFilter: VideogamePageFilter;
  VideogameQuery: VideogameQuery;
  Wave: Wave;
  WaveUpsertInput: WaveUpsertInput;
}>;

export type PublicCacheDirectiveArgs = {
  cacheAge?: Maybe<Scalars['Int']['input']>;
};

export type PublicCacheDirectiveResolver<Result, Parent, ContextType = any, Args = PublicCacheDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ActionSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActionSet'] = ResolversParentTypes['ActionSet']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TeamActionSet', ParentType, ContextType>;
}>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type BracketConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['BracketConfig'] = ResolversParentTypes['BracketConfig']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RaceBracketConfig', ParentType, ContextType>;
}>;

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<CharacterImagesArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ContactInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactInfo'] = ResolversParentTypes['ContactInfo']> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameLast?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type EntrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entrant'] = ResolversParentTypes['Entrant']> = ResolversObject<{
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  initialSeedNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isDisqualified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paginatedSets?: Resolver<Maybe<ResolversTypes['SetConnection']>, ParentType, ContextType, Partial<EntrantPaginatedSetsArgs>>;
  participants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Participant']>>>, ParentType, ContextType>;
  seeds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Seed']>>>, ParentType, ContextType>;
  skill?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  standing?: Resolver<Maybe<ResolversTypes['Standing']>, ParentType, ContextType>;
  stream?: Resolver<Maybe<ResolversTypes['Streams']>, ParentType, ContextType>;
  streams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Streams']>>>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
}>;

export type EntrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntrantConnection'] = ResolversParentTypes['EntrantConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entrant']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  checkInBuffer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  checkInDuration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  checkInEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  competitionTier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  deckSubmissionDeadline?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  entrantSizeMax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  entrantSizeMin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  entrants?: Resolver<Maybe<ResolversTypes['EntrantConnection']>, ParentType, ContextType, Partial<EventEntrantsArgs>>;
  entryFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hasDecks?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasTasks?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<EventImagesArgs>>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['League']>, ParentType, ContextType>;
  matchRulesMarkdown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numEntrants?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  phaseGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['PhaseGroup']>>>, ParentType, ContextType>;
  phases?: Resolver<Maybe<Array<Maybe<ResolversTypes['Phase']>>>, ParentType, ContextType, Partial<EventPhasesArgs>>;
  prizingInfo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  publishing?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  rulesMarkdown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rulesetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rulesetSettings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  sets?: Resolver<Maybe<ResolversTypes['SetConnection']>, ParentType, ContextType, Partial<EventSetsArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standings?: Resolver<Maybe<ResolversTypes['StandingConnection']>, ParentType, ContextType, RequireFields<EventStandingsArgs, 'query'>>;
  startAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['ActivityState']>, ParentType, ContextType>;
  stations?: Resolver<Maybe<ResolversTypes['StationsConnection']>, ParentType, ContextType, Partial<EventStationsArgs>>;
  teamManagementDeadline?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  teamNameAllowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  teamRosterSize?: Resolver<Maybe<ResolversTypes['TeamRosterSize']>, ParentType, ContextType>;
  tournament?: Resolver<Maybe<ResolversTypes['Tournament']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  useEventSeeds?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userEntrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType, Partial<EventUserEntrantArgs>>;
  videogame?: Resolver<Maybe<ResolversTypes['Videogame']>, ParentType, ContextType>;
  waves?: Resolver<Maybe<Array<Maybe<ResolversTypes['Wave']>>>, ParentType, ContextType, Partial<EventWavesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventConnection'] = ResolversParentTypes['EventConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type EventOwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventOwner'] = ResolversParentTypes['EventOwner']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gamerTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type EventOwnerConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventOwnerConnection'] = ResolversParentTypes['EventOwnerConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventOwner']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type EventTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTeam'] = ResolversParentTypes['EventTeam']> = ResolversObject<{
  discriminator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  globalTeam?: Resolver<Maybe<ResolversTypes['GlobalTeam']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<EventTeamImagesArgs>>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamMember']>>>, ParentType, ContextType, Partial<EventTeamMembersArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventTeamConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTeamConnection'] = ResolversParentTypes['EventTeamConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTeam']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type EventTierResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTier'] = ResolversParentTypes['EventTier']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type GameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Game'] = ResolversParentTypes['Game']> = ResolversObject<{
  entrant1Score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  entrant2Score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<GameImagesArgs>>;
  orderNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  selections?: Resolver<Maybe<Array<Maybe<ResolversTypes['GameSelection']>>>, ParentType, ContextType>;
  stage?: Resolver<Maybe<ResolversTypes['Stage']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winnerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type GameSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameSelection'] = ResolversParentTypes['GameSelection']> = ResolversObject<{
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  entrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  participant?: Resolver<Maybe<ResolversTypes['Participant']>, ParentType, ContextType>;
  selectionType?: Resolver<Maybe<ResolversTypes['GameSelectionType']>, ParentType, ContextType>;
  selectionValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type GlobalTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalTeam'] = ResolversParentTypes['GlobalTeam']> = ResolversObject<{
  discriminator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  eventTeams?: Resolver<Maybe<ResolversTypes['EventTeamConnection']>, ParentType, ContextType, Partial<GlobalTeamEventTeamsArgs>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<GlobalTeamImagesArgs>>;
  leagueTeams?: Resolver<Maybe<ResolversTypes['EventTeamConnection']>, ParentType, ContextType, Partial<GlobalTeamLeagueTeamsArgs>>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamMember']>>>, ParentType, ContextType, Partial<GlobalTeamMembersArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = ResolversObject<{
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  ratio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LeagueResolvers<ContextType = any, ParentType extends ResolversParentTypes['League'] = ResolversParentTypes['League']> = ResolversObject<{
  addrState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  entrantCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eventOwners?: Resolver<Maybe<ResolversTypes['EventOwnerConnection']>, ParentType, ContextType, Partial<LeagueEventOwnersArgs>>;
  eventRegistrationClosesAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  events?: Resolver<Maybe<ResolversTypes['EventConnection']>, ParentType, ContextType, Partial<LeagueEventsArgs>>;
  finalEventId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasOfflineEvents?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasOnlineEvents?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hashtag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<LeagueImagesArgs>>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['TournamentLinks']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mapsPlaceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numProgressingToFinalEvent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numUniquePlayers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryContact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryContactType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishing?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  registrationClosesAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showStandings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  standings?: Resolver<Maybe<ResolversTypes['StandingConnection']>, ParentType, ContextType, Partial<LeagueStandingsArgs>>;
  startAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamCreationClosesAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  tiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventTier']>>>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tournamentType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<LeagueUrlArgs, 'relative'>>;
  venueAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  venueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videogames?: Resolver<Maybe<Array<Maybe<ResolversTypes['Videogame']>>>, ParentType, ContextType>;
}>;

export type LeagueConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueConnection'] = ResolversParentTypes['LeagueConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['League']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type MatchConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchConfig'] = ResolversParentTypes['MatchConfig']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RaceMatchConfig', ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  assignStation?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MutationAssignStationArgs, 'setId' | 'stationId'>>;
  assignStream?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MutationAssignStreamArgs, 'setId' | 'streamId'>>;
  deletePhase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePhaseArgs, 'phaseId'>>;
  deleteStation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteStationArgs, 'stationId'>>;
  deleteWave?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteWaveArgs, 'waveId'>>;
  generateRegistrationToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationGenerateRegistrationTokenArgs, 'registration' | 'userId'>>;
  markSetCalled?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MutationMarkSetCalledArgs, 'setId'>>;
  markSetInProgress?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MutationMarkSetInProgressArgs, 'setId'>>;
  registerForTournament?: Resolver<Maybe<ResolversTypes['Participant']>, ParentType, ContextType, Partial<MutationRegisterForTournamentArgs>>;
  reportBracketSet?: Resolver<Maybe<Array<Maybe<ResolversTypes['Set']>>>, ParentType, ContextType, RequireFields<MutationReportBracketSetArgs, 'setId'>>;
  resetSet?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MutationResetSetArgs, 'setId'>>;
  resolveScheduleConflicts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Seed']>>>, ParentType, ContextType, RequireFields<MutationResolveScheduleConflictsArgs, 'tournamentId'>>;
  swapSeeds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Seed']>>>, ParentType, ContextType, RequireFields<MutationSwapSeedsArgs, 'phaseId' | 'seed1Id' | 'seed2Id'>>;
  updateBracketSet?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MutationUpdateBracketSetArgs, 'setId'>>;
  updatePhaseGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['PhaseGroup']>>>, ParentType, ContextType, RequireFields<MutationUpdatePhaseGroupsArgs, 'groupConfigs'>>;
  updatePhaseSeeding?: Resolver<Maybe<ResolversTypes['Phase']>, ParentType, ContextType, RequireFields<MutationUpdatePhaseSeedingArgs, 'phaseId' | 'seedMapping'>>;
  updateVodUrl?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<MutationUpdateVodUrlArgs, 'setId'>>;
  upsertPhase?: Resolver<Maybe<ResolversTypes['Phase']>, ParentType, ContextType, RequireFields<MutationUpsertPhaseArgs, 'payload'>>;
  upsertStation?: Resolver<Maybe<ResolversTypes['Stations']>, ParentType, ContextType, RequireFields<MutationUpsertStationArgs, 'fields'>>;
  upsertWave?: Resolver<Maybe<ResolversTypes['Wave']>, ParentType, ContextType, RequireFields<MutationUpsertWaveArgs, 'fields'>>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  filter?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sortBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = ResolversObject<{
  checkedIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  checkedInAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  connectedAccounts?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  contactInfo?: Resolver<Maybe<ResolversTypes['ContactInfo']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entrants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entrant']>>>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  gamerTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<ParticipantImagesArgs>>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requiredConnections?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProfileAuthorization']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}>;

export type ParticipantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParticipantConnection'] = ResolversParentTypes['ParticipantConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Participant']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type PhaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Phase'] = ResolversParentTypes['Phase']> = ResolversObject<{
  bracketType?: Resolver<Maybe<ResolversTypes['BracketType']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  groupCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isExhibition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numSeeds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paginatedSeeds?: Resolver<Maybe<ResolversTypes['SeedConnection']>, ParentType, ContextType, RequireFields<PhasePaginatedSeedsArgs, 'query'>>;
  phaseGroups?: Resolver<Maybe<ResolversTypes['PhaseGroupConnection']>, ParentType, ContextType, Partial<PhasePhaseGroupsArgs>>;
  phaseOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progressingInData?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressionData']>>>, ParentType, ContextType>;
  progressions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Progression']>>>, ParentType, ContextType>;
  seeds?: Resolver<Maybe<ResolversTypes['SeedConnection']>, ParentType, ContextType, RequireFields<PhaseSeedsArgs, 'query'>>;
  sets?: Resolver<Maybe<ResolversTypes['SetConnection']>, ParentType, ContextType, Partial<PhaseSetsArgs>>;
  state?: Resolver<Maybe<ResolversTypes['ActivityState']>, ParentType, ContextType>;
  waves?: Resolver<Maybe<Array<Maybe<ResolversTypes['Wave']>>>, ParentType, ContextType>;
}>;

export type PhaseGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhaseGroup'] = ResolversParentTypes['PhaseGroup']> = ResolversObject<{
  bracketType?: Resolver<Maybe<ResolversTypes['BracketType']>, ParentType, ContextType>;
  bracketUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstRoundTime?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  numRounds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paginatedSeeds?: Resolver<Maybe<ResolversTypes['SeedConnection']>, ParentType, ContextType, RequireFields<PhaseGroupPaginatedSeedsArgs, 'query'>>;
  paginatedSets?: Resolver<Maybe<ResolversTypes['SetConnection']>, ParentType, ContextType, Partial<PhaseGroupPaginatedSetsArgs>>;
  phase?: Resolver<Maybe<ResolversTypes['Phase']>, ParentType, ContextType>;
  progressionsOut?: Resolver<Maybe<Array<Maybe<ResolversTypes['Progression']>>>, ParentType, ContextType>;
  rounds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Round']>>>, ParentType, ContextType>;
  seedMap?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  seeds?: Resolver<Maybe<ResolversTypes['SeedConnection']>, ParentType, ContextType, RequireFields<PhaseGroupSeedsArgs, 'query'>>;
  sets?: Resolver<Maybe<ResolversTypes['SetConnection']>, ParentType, ContextType, Partial<PhaseGroupSetsArgs>>;
  standings?: Resolver<Maybe<ResolversTypes['StandingConnection']>, ParentType, ContextType, Partial<PhaseGroupStandingsArgs>>;
  startAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tiebreakOrder?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  wave?: Resolver<Maybe<ResolversTypes['Wave']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PhaseGroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhaseGroupConnection'] = ResolversParentTypes['PhaseGroupConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PhaseGroup']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = ResolversObject<{
  gamerTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rankings?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerRank']>>>, ParentType, ContextType, Partial<PlayerRankingsArgs>>;
  recentSets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Set']>>>, ParentType, ContextType, Partial<PlayerRecentSetsArgs>>;
  recentStandings?: Resolver<Maybe<Array<Maybe<ResolversTypes['Standing']>>>, ParentType, ContextType, Partial<PlayerRecentStandingsArgs>>;
  sets?: Resolver<Maybe<ResolversTypes['SetConnection']>, ParentType, ContextType, Partial<PlayerSetsArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type PlayerRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerRank'] = ResolversParentTypes['PlayerRank']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ProfileAuthorizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileAuthorization'] = ResolversParentTypes['ProfileAuthorization']> = ResolversObject<{
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  stream?: Resolver<Maybe<ResolversTypes['Stream']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['AuthorizationType']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ProgressionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Progression'] = ResolversParentTypes['Progression']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  originOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originPhase?: Resolver<Maybe<ResolversTypes['Phase']>, ParentType, ContextType>;
  originPhaseGroup?: Resolver<Maybe<ResolversTypes['PhaseGroup']>, ParentType, ContextType>;
  originPlacement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  placeholderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ProgressionDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressionData'] = ResolversParentTypes['ProgressionData']> = ResolversObject<{
  numProgressing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  entrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType, RequireFields<QueryEntrantArgs, 'id'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, Partial<QueryEventArgs>>;
  league?: Resolver<Maybe<ResolversTypes['League']>, ParentType, ContextType, Partial<QueryLeagueArgs>>;
  leagues?: Resolver<Maybe<ResolversTypes['LeagueConnection']>, ParentType, ContextType, RequireFields<QueryLeaguesArgs, 'query'>>;
  participant?: Resolver<Maybe<ResolversTypes['Participant']>, ParentType, ContextType, RequireFields<QueryParticipantArgs, 'id'>>;
  phase?: Resolver<Maybe<ResolversTypes['Phase']>, ParentType, ContextType, Partial<QueryPhaseArgs>>;
  phaseGroup?: Resolver<Maybe<ResolversTypes['PhaseGroup']>, ParentType, ContextType, Partial<QueryPhaseGroupArgs>>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryPlayerArgs, 'id'>>;
  seed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType, Partial<QuerySeedArgs>>;
  set?: Resolver<Maybe<ResolversTypes['Set']>, ParentType, ContextType, RequireFields<QuerySetArgs, 'id'>>;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType, Partial<QueryShopArgs>>;
  stream?: Resolver<Maybe<ResolversTypes['Streams']>, ParentType, ContextType, RequireFields<QueryStreamArgs, 'id'>>;
  streamQueue?: Resolver<Maybe<Array<Maybe<ResolversTypes['StreamQueue']>>>, ParentType, ContextType, RequireFields<QueryStreamQueueArgs, 'tournamentId'>>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, Partial<QueryTeamArgs>>;
  tournament?: Resolver<Maybe<ResolversTypes['Tournament']>, ParentType, ContextType, Partial<QueryTournamentArgs>>;
  tournaments?: Resolver<Maybe<ResolversTypes['TournamentConnection']>, ParentType, ContextType, RequireFields<QueryTournamentsArgs, 'query'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>;
  videogame?: Resolver<Maybe<ResolversTypes['Videogame']>, ParentType, ContextType, Partial<QueryVideogameArgs>>;
  videogames?: Resolver<Maybe<ResolversTypes['VideogameConnection']>, ParentType, ContextType, RequireFields<QueryVideogamesArgs, 'query'>>;
}>;

export type RaceBracketConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaceBracketConfig'] = ResolversParentTypes['RaceBracketConfig']> = ResolversObject<{
  automaticEndTime?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  automaticStartTime?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  bracketType?: Resolver<Maybe<ResolversTypes['BracketType']>, ParentType, ContextType>;
  goalTargetComparator?: Resolver<Maybe<ResolversTypes['Comparator']>, ParentType, ContextType>;
  goalTargetValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  limitMode?: Resolver<Maybe<ResolversTypes['RaceLimitMode']>, ParentType, ContextType>;
  limitValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  raceType?: Resolver<Maybe<ResolversTypes['RaceType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RaceMatchConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaceMatchConfig'] = ResolversParentTypes['RaceMatchConfig']> = ResolversObject<{
  bracketType?: Resolver<Maybe<ResolversTypes['BracketType']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  playerReportingEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  verificationMethods?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchConfigVerificationMethod']>>>, ParentType, ContextType>;
  verificationRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResetAffectedDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetAffectedData'] = ResolversParentTypes['ResetAffectedData']> = ResolversObject<{
  affectedPhaseGroupCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  affectedSetCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  affectedSets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Set']>>>, ParentType, ContextType>;
}>;

export type RoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['Round'] = ResolversParentTypes['Round']> = ResolversObject<{
  bestOf?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
}>;

export type ScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Score'] = ResolversParentTypes['Score']> = ResolversObject<{
  displayValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
}>;

export type SeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Seed'] = ResolversParentTypes['Seed']> = ResolversObject<{
  checkedInParticipants?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  entrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType>;
  groupSeedNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isBye?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  phase?: Resolver<Maybe<ResolversTypes['Phase']>, ParentType, ContextType>;
  phaseGroup?: Resolver<Maybe<ResolversTypes['PhaseGroup']>, ParentType, ContextType>;
  placeholderName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  progressionSeedId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progressionSource?: Resolver<Maybe<ResolversTypes['Progression']>, ParentType, ContextType>;
  seedNum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  setRecordWithoutByes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<SeedSetRecordWithoutByesArgs, 'phaseGroupId'>>;
  standings?: Resolver<Maybe<Array<Maybe<ResolversTypes['Standing']>>>, ParentType, ContextType, Partial<SeedStandingsArgs>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
}>;

export type SeedConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeedConnection'] = ResolversParentTypes['SeedConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Seed']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type SetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Set'] = ResolversParentTypes['Set']> = ResolversObject<{
  completedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  displayScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SetDisplayScoreArgs>>;
  entrant1Source?: Resolver<Maybe<ResolversTypes['SetEntrantSource']>, ParentType, ContextType>;
  entrant2Source?: Resolver<Maybe<ResolversTypes['SetEntrantSource']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  fullRoundText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  game?: Resolver<Maybe<ResolversTypes['Game']>, ParentType, ContextType, RequireFields<SetGameArgs, 'orderNum'>>;
  games?: Resolver<Maybe<Array<Maybe<ResolversTypes['Game']>>>, ParentType, ContextType>;
  hasPlaceholder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<SetImagesArgs>>;
  lPlacement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  loserProgressionSeed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType>;
  phaseGroup?: Resolver<Maybe<ResolversTypes['PhaseGroup']>, ParentType, ContextType>;
  resetAffectedData?: Resolver<Maybe<ResolversTypes['ResetAffectedData']>, ParentType, ContextType>;
  round?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  setGamesType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['SetSlot']>>>, ParentType, ContextType, RequireFields<SetSlotsArgs, 'includeByes'>>;
  startAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  station?: Resolver<Maybe<ResolversTypes['Stations']>, ParentType, ContextType>;
  stream?: Resolver<Maybe<ResolversTypes['Streams']>, ParentType, ContextType>;
  totalGames?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  vodUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wPlacement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winnerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winnerProgressionSeed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetConnection'] = ResolversParentTypes['SetConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Set']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type SetEntrantSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetEntrantSource'] = ResolversParentTypes['SetEntrantSource']> = ResolversObject<{
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conditionString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
}>;

export type SetSlotResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetSlot'] = ResolversParentTypes['SetSlot']> = ResolversObject<{
  entrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  prereqId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prereqPlacement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prereqType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seed?: Resolver<Maybe<ResolversTypes['Seed']>, ParentType, ContextType>;
  slotIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  standing?: Resolver<Maybe<ResolversTypes['Standing']>, ParentType, ContextType>;
}>;

export type ShopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  levels?: Resolver<Maybe<ResolversTypes['ShopLevelConnection']>, ParentType, ContextType, Partial<ShopLevelsArgs>>;
  messages?: Resolver<Maybe<ResolversTypes['ShopOrderMessageConnection']>, ParentType, ContextType, Partial<ShopMessagesArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ShopLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopLevel'] = ResolversParentTypes['ShopLevel']> = ResolversObject<{
  currAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  goalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type ShopLevelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopLevelConnection'] = ResolversParentTypes['ShopLevelConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShopLevel']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type ShopOrderMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopOrderMessage'] = ResolversParentTypes['ShopOrderMessage']> = ResolversObject<{
  gamertag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
}>;

export type ShopOrderMessageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopOrderMessageConnection'] = ResolversParentTypes['ShopOrderMessageConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShopOrderMessage']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type StageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stage'] = ResolversParentTypes['Stage']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type StandingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Standing'] = ResolversParentTypes['Standing']> = ResolversObject<{
  container?: Resolver<Maybe<ResolversTypes['StandingContainer']>, ParentType, ContextType>;
  entrant?: Resolver<Maybe<ResolversTypes['Entrant']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isFinal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  placement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  setRecordWithoutByes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  standing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['StandingStats']>, ParentType, ContextType>;
  totalPoints?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
}>;

export type StandingConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandingConnection'] = ResolversParentTypes['StandingConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Standing']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type StandingContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandingContainer'] = ResolversParentTypes['StandingContainer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Event' | 'PhaseGroup' | 'Set' | 'Tournament', ParentType, ContextType>;
}>;

export type StandingStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandingStats'] = ResolversParentTypes['StandingStats']> = ResolversObject<{
  score?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType>;
}>;

export type StationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stations'] = ResolversParentTypes['Stations']> = ResolversObject<{
  canAutoAssign?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clusterNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clusterPrefix?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numSetups?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queue?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  queueDepth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stream?: Resolver<Maybe<ResolversTypes['Streams']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
}>;

export type StationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StationsConnection'] = ResolversParentTypes['StationsConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Stations']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type StreamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stream'] = ResolversParentTypes['Stream']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['StreamType']>, ParentType, ContextType>;
}>;

export type StreamQueueResolvers<ContextType = any, ParentType extends ResolversParentTypes['StreamQueue'] = ResolversParentTypes['StreamQueue']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Set']>>>, ParentType, ContextType>;
  stream?: Resolver<Maybe<ResolversTypes['Streams']>, ParentType, ContextType>;
}>;

export type StreamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Streams'] = ResolversParentTypes['Streams']> = ResolversObject<{
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numSetups?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentStreamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamGame?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamSource?: Resolver<Maybe<ResolversTypes['StreamSource']>, ParentType, ContextType>;
  streamStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  streamTypeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  __resolveType: TypeResolveFn<'EventTeam' | 'GlobalTeam', ParentType, ContextType>;
}>;

export type TeamActionSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamActionSet'] = ResolversParentTypes['TeamActionSet']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamConnection'] = ResolversParentTypes['TeamConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type TeamMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamMember'] = ResolversParentTypes['TeamMember']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isAlternate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isCaptain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  memberType?: Resolver<Maybe<ResolversTypes['TeamMemberType']>, ParentType, ContextType>;
  participant?: Resolver<Maybe<ResolversTypes['Participant']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['TeamMemberStatus']>, ParentType, ContextType>;
}>;

export type TeamRosterSizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamRosterSize'] = ResolversParentTypes['TeamRosterSize']> = ResolversObject<{
  maxAlternates?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxPlayers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minAlternates?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minPlayers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournament'] = ResolversParentTypes['Tournament']> = ResolversObject<{
  addrState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  admins?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<TournamentAdminsArgs>>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  eventRegistrationClosesAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType, Partial<TournamentEventsArgs>>;
  hasOfflineEvents?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasOnlineEvents?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hashtag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<TournamentImagesArgs>>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRegistrationOpen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['TournamentLinks']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mapsPlaceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numAttendees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  participants?: Resolver<Maybe<ResolversTypes['ParticipantConnection']>, ParentType, ContextType, RequireFields<TournamentParticipantsArgs, 'query'>>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryContact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryContactType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishing?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  registrationClosesAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stations?: Resolver<Maybe<ResolversTypes['StationsConnection']>, ParentType, ContextType, Partial<TournamentStationsArgs>>;
  streamQueue?: Resolver<Maybe<Array<Maybe<ResolversTypes['StreamQueue']>>>, ParentType, ContextType>;
  streams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Streams']>>>, ParentType, ContextType>;
  teamCreationClosesAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  teams?: Resolver<Maybe<ResolversTypes['TeamConnection']>, ParentType, ContextType, RequireFields<TournamentTeamsArgs, 'query'>>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tournamentType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TournamentUrlArgs, 'relative'>>;
  venueAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  venueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  waves?: Resolver<Maybe<Array<Maybe<ResolversTypes['Wave']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TournamentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentConnection'] = ResolversParentTypes['TournamentConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tournament']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type TournamentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentLinks'] = ResolversParentTypes['TournamentLinks']> = ResolversObject<{
  discord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  authorizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProfileAuthorization']>>>, ParentType, ContextType, Partial<UserAuthorizationsArgs>>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discriminator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<ResolversTypes['EventConnection']>, ParentType, ContextType, Partial<UserEventsArgs>>;
  genderPronoun?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<UserImagesArgs>>;
  leagues?: Resolver<Maybe<ResolversTypes['LeagueConnection']>, ParentType, ContextType, Partial<UserLeaguesArgs>>;
  location?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tournaments?: Resolver<Maybe<ResolversTypes['TournamentConnection']>, ParentType, ContextType, Partial<UserTournamentsArgs>>;
}>;

export type VideogameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Videogame'] = ResolversParentTypes['Videogame']> = ResolversObject<{
  characters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, Partial<VideogameImagesArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Stage']>>>, ParentType, ContextType>;
}>;

export type VideogameConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideogameConnection'] = ResolversParentTypes['VideogameConnection']> = ResolversObject<{
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Videogame']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
}>;

export type WaveResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wave'] = ResolversParentTypes['Wave']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  ActionSet?: ActionSetResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  BracketConfig?: BracketConfigResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  ContactInfo?: ContactInfoResolvers<ContextType>;
  Entrant?: EntrantResolvers<ContextType>;
  EntrantConnection?: EntrantConnectionResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventConnection?: EventConnectionResolvers<ContextType>;
  EventOwner?: EventOwnerResolvers<ContextType>;
  EventOwnerConnection?: EventOwnerConnectionResolvers<ContextType>;
  EventTeam?: EventTeamResolvers<ContextType>;
  EventTeamConnection?: EventTeamConnectionResolvers<ContextType>;
  EventTier?: EventTierResolvers<ContextType>;
  Game?: GameResolvers<ContextType>;
  GameSelection?: GameSelectionResolvers<ContextType>;
  GlobalTeam?: GlobalTeamResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  League?: LeagueResolvers<ContextType>;
  LeagueConnection?: LeagueConnectionResolvers<ContextType>;
  MatchConfig?: MatchConfigResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Participant?: ParticipantResolvers<ContextType>;
  ParticipantConnection?: ParticipantConnectionResolvers<ContextType>;
  Phase?: PhaseResolvers<ContextType>;
  PhaseGroup?: PhaseGroupResolvers<ContextType>;
  PhaseGroupConnection?: PhaseGroupConnectionResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  PlayerRank?: PlayerRankResolvers<ContextType>;
  ProfileAuthorization?: ProfileAuthorizationResolvers<ContextType>;
  Progression?: ProgressionResolvers<ContextType>;
  ProgressionData?: ProgressionDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RaceBracketConfig?: RaceBracketConfigResolvers<ContextType>;
  RaceMatchConfig?: RaceMatchConfigResolvers<ContextType>;
  ResetAffectedData?: ResetAffectedDataResolvers<ContextType>;
  Round?: RoundResolvers<ContextType>;
  Score?: ScoreResolvers<ContextType>;
  Seed?: SeedResolvers<ContextType>;
  SeedConnection?: SeedConnectionResolvers<ContextType>;
  Set?: SetResolvers<ContextType>;
  SetConnection?: SetConnectionResolvers<ContextType>;
  SetEntrantSource?: SetEntrantSourceResolvers<ContextType>;
  SetSlot?: SetSlotResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  ShopLevel?: ShopLevelResolvers<ContextType>;
  ShopLevelConnection?: ShopLevelConnectionResolvers<ContextType>;
  ShopOrderMessage?: ShopOrderMessageResolvers<ContextType>;
  ShopOrderMessageConnection?: ShopOrderMessageConnectionResolvers<ContextType>;
  Stage?: StageResolvers<ContextType>;
  Standing?: StandingResolvers<ContextType>;
  StandingConnection?: StandingConnectionResolvers<ContextType>;
  StandingContainer?: StandingContainerResolvers<ContextType>;
  StandingStats?: StandingStatsResolvers<ContextType>;
  Stations?: StationsResolvers<ContextType>;
  StationsConnection?: StationsConnectionResolvers<ContextType>;
  Stream?: StreamResolvers<ContextType>;
  StreamQueue?: StreamQueueResolvers<ContextType>;
  Streams?: StreamsResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamActionSet?: TeamActionSetResolvers<ContextType>;
  TeamConnection?: TeamConnectionResolvers<ContextType>;
  TeamMember?: TeamMemberResolvers<ContextType>;
  TeamRosterSize?: TeamRosterSizeResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Tournament?: TournamentResolvers<ContextType>;
  TournamentConnection?: TournamentConnectionResolvers<ContextType>;
  TournamentLinks?: TournamentLinksResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Videogame?: VideogameResolvers<ContextType>;
  VideogameConnection?: VideogameConnectionResolvers<ContextType>;
  Wave?: WaveResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  publicCache?: PublicCacheDirectiveResolver<any, any, ContextType>;
}>;

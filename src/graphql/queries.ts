// TODO: Verify User Query
// GraphQL query to find player by username and check Discord authorization
// export const VERIFY_USER_QUERY = `
//     query FindPlayer($name: String!) {
//         player(slug: $name) {
//             id
//             name
//             authorizations(types: [DISCORD]) {
//                 type
//                 externalId
//             }
//         }
//     }
// `;

// TODO: Get User Tournaments Query
// export const GET_USER_TOURNAMENTS_QUERY = `
//     query GetUserTournaments($userId: ID!) {
//         player(id: $userId) {
//             id
//             name
//             events(filter: $eventFilter) {
//                 id
//                 name
//                 tournament {
//                     id
//                     name
//                     slug
//                 }
//             }
//         }
//     }
// `;

// TODO: DQ Mutation
// export const DQ_MUTATION = `
//     mutation DqPlayer($eventId: ID!, $userId: ID!) {
//         deleteEventParticipant(eventId: $eventId, userId: $userId) {
//             success
//         }
//     }
// `;

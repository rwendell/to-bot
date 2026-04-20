// TODO: DQ Command (Self-DQ)
// Usage: /dq
// Flow:
// 1. Check if user is verified in DB
//    - If no, respond with "Please verify first: /verify <username>"
// 2. Query start.gg API for user's entered tournaments
// 3. Show select menu (dropdown) of tournaments
// 4. User selects tournament → DQ from that tournament
// 5. Confirm DQ success

// @Discord()
// export class DqCommand {
//     @Slash({ description: 'Self-DQ from a tournament', name: 'dq' })
//     dq(interaction: CommandInteraction): Promise<void> {
//         // TODO: Show select menu with user's tournaments
//         // TODO: Handle selection → call start.gg API to DQ
//         // TODO: Confirm with user
//     }
// }

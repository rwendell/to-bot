// TODO: Verify Command
// Usage: /verify <startgg-username>
// Flow:
// 1. Check if user is already verified in DB
//    - If yes, respond with "You're already verified as [username]"
// 2. Query start.gg API for username
// 3. Check if Discord is linked to start.gg account
// 4. Verify Discord IDs match
// 5. Store in DB
// 6. Respond with success

// @Discord()
// export class VerifyCommand {
//     @Slash({ description: 'Verify your Discord with start.gg', name: 'verify' })
//     verify(
//         @SlashOption({
//             description: 'Your start.gg username',
//             name: 'username',
//             required: true,
//             type: ApplicationCommandOptionType.String,
//         })
//         username: string,
//         interaction: CommandInteraction,
//     ): Promise<void> {
//         // TODO: Implementation
//     }
// }

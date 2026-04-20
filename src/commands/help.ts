import { Discord, Slash } from "discordx";
import type { CommandInteraction } from "discord.js";

const HELP_TEXT = `

# Commands
~~---------------------~~
## /verify [user-id]
Verify your account with VTO

## /tournaments
See your upcoming tournaments

## /dq [tournament-id]
Self-DQ from a tournament

# How to Verify
~~---------------------~~
1. Go to start.gg → Profile
2. Click your username 
3. Click "Copy ID" button
4. Run /verify <pasted-id>
`;

@Discord()
export class HelpCommand {
    @Slash({
        description: "Get help with VTO commands",
        name: "help",
    })
    async help(interaction: CommandInteraction): Promise<void> {
        await interaction.reply({
            content: HELP_TEXT,
            ephemeral: false,
        });
    }
}

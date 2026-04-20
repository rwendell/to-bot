import { Discord, Slash, SlashGroup } from "discordx";
import type { CommandInteraction } from "discord.js";

@Discord()
@SlashGroup("help")
export class GeneralHelp {
  @Slash({ description: "Help overview", name: "overview" })
  async overview(interaction: CommandInteraction): Promise<void> {
    await interaction.reply({
      content: `**VTO Bot** - Virtual Tournament Organizer

/help verify  - Link Discord to start.gg
/help tournaments - See your tournaments  
/help dq     - Self-DQ from a tournament`,
      ephemeral: false,
    });
  }
}

@Discord()
@SlashGroup("help")
export class VerifyHelp {
  @Slash({ description: "Help for verify command", name: "verify" })
  async verify(interaction: CommandInteraction): Promise<void> {
    await interaction.reply({
      content: `**/help verify** - Verify your Discord with start.gg

Usage: /verify <user-id>

Steps:
1. Go to start.gg → Profile
2. Click your username (top right)
3. Click "Copy ID" button
4. Run /verify <pasted-id>

The bot checks that your Discord is linked to your start.gg account.`,
      ephemeral: false,
    });
  }
}

@Discord()
@SlashGroup("help")
export class TournamentsHelp {
  @Slash({ description: "Help for tournaments command", name: "tournaments" })
  async tournaments(interaction: CommandInteraction): Promise<void> {
    await interaction.reply({
      content: `**/help tournaments** - See your entered tournaments

Usage: /tournaments

Shows all tournaments you've entered on start.gg.
Only works after using /verify first.

Use /dq to self-DQ from a tournament.`,
      ephemeral: false,
    });
  }
}

@Discord()
@SlashGroup("help")
export class DqHelp {
  @Slash({ description: "Help for dq command", name: "dq" })
  async dq(interaction: CommandInteraction): Promise<void> {
    await interaction.reply({
      content: `**/help dq** - Self-DQ from a tournament

Usage: /dq

Shows a list of your entered tournaments.
Select one to withdraw from the event.

You will be removed from the tournament.`,
      ephemeral: false,
    });
  }
}

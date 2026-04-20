import { Discord, Slash, SlashOption } from "discordx";
import { ApplicationCommandOptionType } from "discord.js";
import type { CommandInteraction } from "discord.js";

const HELP_TOPICS = {
  verify: "Verify your Discord with start.gg. Usage: /verify <user-id>",
  tournaments: "See your entered tournaments. Usage: /tournaments",
  dq: "Self-DQ from a tournament. Usage: /dq",
};

@Discord()
export class HelpCommand {
  @Slash({
    description: "Get help with VTO commands",
    name: "help",
  })
  async help(
    @SlashOption({
      description: "Command: verify, tournaments, or dq",
      name: "command",
      required: false,
      type: ApplicationCommandOptionType.String,
    })
    command: string | undefined,
    interaction: CommandInteraction,
  ): Promise<void> {
    if (!command) {
      await interaction.reply({
        content: `**VTO Bot** - Virtual Tournament Organizer

/verify <id> - Link Discord to start.gg
/tournaments - See your entered tournaments
/dq - Self-DQ from a tournament

/help verify
/help tournaments  
/help dq`,
        ephemeral: false,
      });
      return;
    }

    const help = HELP_TOPICS[command as keyof typeof HELP_TOPICS];
    if (!help) {
      await interaction.reply({
        content: `Unknown: ${command}. Use: verify, tournaments, or dq`,
        ephemeral: false,
      });
      return;
    }

    await interaction.reply({
      content: `**${command}:** ${help}`,
      ephemeral: false,
    });
  }
}

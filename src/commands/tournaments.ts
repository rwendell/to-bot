import { Discord, Slash } from "discordx";
import type { CommandInteraction } from "discord.js";
import { getVerifiedUser } from "../db";
import { startggService } from "../services/startgg-service";

@Discord()
export class TournamentsCommand {
  @Slash({
    description: "See your entered tournaments",
    name: "tournaments",
  })
  async tournaments(interaction: CommandInteraction): Promise<void> {
    const discordUserId = interaction.user.id;

    await interaction.deferReply();

    try {
      const verified = await getVerifiedUser(discordUserId);

      if (!verified) {
        await interaction.editReply(
          `You're not verified yet. Run /verify with your start.gg User ID first.`,
        );
        return;
      }

      const tournaments = await startggService.getUserTournaments(
        verified.startggUserId,
      );

      if (!tournaments.length) {
        await interaction.editReply(
          `No tournaments found for ${verified.startggUsername}.`,
        );
        return;
      }

      const list = tournaments
        .map(
          (t, i) =>
            `${i + 1}. **${t.name}** (${t.startDate.toLocaleDateString()})`,
        )
        .join("\n");

      await interaction.editReply(
        `**Your tournaments:**\n\n${list}\n\nUse /dq to self-DQ from a tournament.`,
      );
    } catch (error) {
      console.error("Tournaments error:", error);
      await interaction.editReply(
        "Failed to fetch tournaments. Try again later.",
      );
    }
  }
}

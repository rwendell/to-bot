import { Discord, Slash, SlashOption } from "discordx";
import { ApplicationCommandOptionType } from "discord.js";
import type { CommandInteraction } from "discord.js";
import { isVerified, addVerifiedUser } from "../db";
import { startggService } from "../services/startgg-service";

@Discord()
export class VerifyCommand {
  @Slash({
    description:
      "Verify your Discord with start.gg using your start.gg User ID",
    name: "verify",
  })
  async verify(
    @SlashOption({
      description: "Your start.gg User ID (find in Profile → Copy ID)",
      name: "user-id",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    userId: string,
    interaction: CommandInteraction,
  ): Promise<void> {
    const discordUserId = interaction.user.id;

    await interaction.deferReply();

    try {
      const existing = await isVerified(discordUserId);
      if (existing) {
        await interaction.editReply(
          `You're already verified! Run /tournaments to see your entered tournaments.`,
        );
        return;
      }

      const user = await startggService.findPlayer(userId);

      if (!user) {
        await interaction.editReply(
          `User ID "${userId}" not found on start.gg. Go to start.gg → Profile → Click your username → Copy ID`,
        );
        return;
      }

      if (!user.discordLinked) {
        await interaction.editReply(
          `No Discord account linked to "${user.name}". Go to start.gg → Profile → Connections → Link Discord`,
        );
        return;
      }

      const linkedDiscordId = user.discordId?.replace(/[<@!>]/g, "");

      if (linkedDiscordId !== discordUserId) {
        await interaction.editReply(
          `Discord account mismatch. Your Discord: <@${discordUserId}>, Linked: ${user.discordId}`,
        );
        return;
      }

      await addVerifiedUser(discordUserId, user.name, user.id);

      await interaction.editReply(
        `Verified! You're now linked to "${user.name}" on start.gg. Use /tournaments to see your entered tournaments.`,
      );
    } catch (error) {
      console.error("Verification error:", error);
      await interaction.editReply("Verification failed. Try again later.");
    }
  }
}

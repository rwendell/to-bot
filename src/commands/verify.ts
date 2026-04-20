import { Discord, Slash } from "discordx";
import type { CommandInteraction } from "discord.js";

@Discord()
export class VerifyCommand {
  @Slash({
    description: "Verify your Discord account with start.gg",
    name: "verify",
  })
  verify(interaction: CommandInteraction): void {
    interaction.reply("TODO: Implement verification logic");
  }
}

import { Discord, Slash, SlashOption } from "discordx";
import { ApplicationCommandOptionType } from "discord.js";
import type { CommandInteraction, GuildMember } from "discord.js";
import { addVerifiedUser } from "../db";

const STARTGG_GRAPHQL = "https://api.start.gg/gql/alpha";

interface StartGGPlayer {
  player: {
    id: string;
    name: string;
    authorizations: {
      type: string;
      externalId: string;
    }[];
  } | null;
}

@Discord()
export class VerifyCommand {
  @Slash({
    description: "Verify your Discord account with start.gg",
    name: "verify",
  })
  async verify(
    @SlashOption({
      description: "Your start.gg username",
      name: "username",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    username: string,
    interaction: CommandInteraction,
  ): Promise<void> {
    await interaction.deferReply();

    try {
      const player = await this.findStartGGPlayer(username);

      if (!player) {
        await interaction.editReply(
          `Player "${username}" not found on start.gg`,
        );
        return;
      }

      const discordAuth = player.authorizations?.find(
        (auth) => auth.type === "DISCORD",
      );

      if (!discordAuth) {
        await interaction.editReply(
          `No Discord account linked to ${player.name}. Go to start.gg → Profile → Connections → Link Discord`,
        );
        return;
      }

      const member = interaction.member as GuildMember;
      const expectedId = discordAuth.externalId.replace(/[<@!>]/g, "");
      const actualId = member.id;

      if (expectedId !== actualId) {
        await interaction.editReply(
          `Discord account mismatch. Expected: ${discordAuth.externalId}, Got: <@${actualId}>`,
        );
        return;
      }

      const verifiedRole = interaction.guild?.roles.cache.find(
        (r) => r.name.toLowerCase() === "verified",
      );
      if (verifiedRole) {
        await member.roles.add(verifiedRole);
      }

      await addVerifiedUser(
        interaction.guildId!,
        member.id,
        player.name,
        player.id,
      );

      await interaction.editReply(
        `Successfully verified! ${verifiedRole ? "You now have the Verified role." : ""}`,
      );
    } catch (error) {
      console.error("Verification error:", error);
      await interaction.editReply("Verification failed. Try again later.");
    }
  }

  private async findStartGGPlayer(
    username: string,
  ): Promise<StartGGPlayer["player"] | null> {
    const query = `
            query FindPlayer($name: String!) {
                player(slug: $name) {
                    id
                    name
                    authorizations(types: [DISCORD]) {
                        type
                        externalId
                    }
                }
            }
        `;

    const response = await fetch(STARTGG_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STARTGG_PAT}`,
      },
      body: JSON.stringify({ query, variables: { name: username } }),
    });

    const result = (await response.json()) as { data: StartGGPlayer };
    return result.data?.player ?? null;
  }
}

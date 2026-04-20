import { Discord, Slash, SlashOption } from "discordx";
import { ApplicationCommandOptionType } from "discord.js";
import type { CommandInteraction } from "discord.js";
import { getVerifiedUser } from "../db";
import { startggService } from "../services/startgg-service";

@Discord()
export class DqCommand {
    @Slash({
        description: "Self-DQ from a tournament",
        name: "dq",
    })
    async dq(
        @SlashOption({
            description: 'Tournament ID from /tournaments',
            name: 'tournament-id',
            required: true,
            type: ApplicationCommandOptionType.String,
        })
        tournamentId: string,
        interaction: CommandInteraction
    ): Promise<void> {
        const discordUserId = interaction.user.id;
        console.log("[DQ] User:", discordUserId);
        console.log("[DQ] Tournament ID input:", tournamentId);

        await interaction.deferReply();

        try {
            const verified = await getVerifiedUser(discordUserId);

            if (!verified) {
                await interaction.editReply(
                    `You're not verified yet. Run /verify with your start.gg User ID first.`
                );
                return;
            }

            console.log("[DQ] Verified startggUserId:", verified.startggUserId);

            // Get user's tournaments to find the event ID
            const tournaments = await startggService.getUserTournaments(verified.startggUserId);

            console.log("[DQ] User tournaments:", JSON.stringify(tournaments, null, 2));

            // Check all tournament IDs
            console.log(
                "[DQ] Available tournament IDs:",
                tournaments.map((t) => t.id)
            );

            // Try to find - convert types to ensure match
            const tournament = tournaments.find((t) => String(t.id) === String(tournamentId));

            console.log("[DQ] Looking for tournament ID:", tournamentId, "Found:", tournament);

            if (!tournament) {
                // Debug: show what tournaments ARE available
                const availableIds = tournaments.map((t) => `${t.name}: ${t.id}`).join(", ");
                console.log("[DQ] Available:", availableIds);
                await interaction.editReply(
                    `Tournament ID "${tournamentId}" not found in your tournaments.\n\n**Your tournaments:**\n${availableIds}\n\nRun /tournaments to see the correct ID.`
                );
                return;
            }

            console.log("[DQ] Found tournament:", tournament.name);
            console.log("[DQ] Events:", JSON.stringify(tournament.events, null, 2));

            // DQ from each event in the tournament
            let dqSuccess = true;
            for (const event of tournament.events) {
                console.log("[DQ] Attempting DQ for event:", event.id, event.name);
                const success = await startggService.dqFromEvent(event.id, verified.startggUserId);
                console.log("[DQ] Event", event.id, "result:", success);
                if (!success) {
                    dqSuccess = false;
                }
            }

            if (dqSuccess) {
                await interaction.editReply(`Successfully DQ'd from **${tournament.name}**!`);
            } else {
                await interaction.editReply(
                    `Failed to DQ from some events. Check if the bot is a tournament admin.`
                );
            }
        } catch (error) {
            console.error("[DQ] Error:", error);
            await interaction.editReply("Failed to DQ. Try again later.");
        }
    }
}

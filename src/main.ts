import "dotenv/config";
import { dirname, importx } from "@discordx/importer";
import { Events, GatewayIntentBits } from "discord.js";
import { Client } from "discordx";

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, async () => {
    console.log(">> Loading commands...");
    await client.initApplicationCommands();
    console.log(">> VTO (Virtual Tournament Organizer) started");

    // Log registered commands
    console.log(">> Registered commands:");
    for (const cmd of client["applicationCommands"].values()) {
        console.log(`   - /${cmd.name}`);
    }
});

client.on(Events.InteractionCreate, (interaction) => {
    client.executeInteraction(interaction);
});

console.log(">> Importing commands from:", `${dirname(import.meta.url)}/commands/**/*.{js,ts}`);
await importx(`${dirname(import.meta.url)}/commands/**/*.{js,ts}`);
console.log(">> Commands imported");

if (!process.env.DISCORD_TOKEN) {
    throw Error("DISCORD_TOKEN not found in environment");
}
await client.login(process.env.DISCORD_TOKEN);

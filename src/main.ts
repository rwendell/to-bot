import "dotenv/config";
import { importx } from "@discordx/importer";
import { Events, GatewayIntentBits } from "discord.js";
import { Client } from "discordx";
import figlet from "figlet";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const art = figlet.textSync("V.T.O.", { font: "DOS Rebel" });
const lines = art.split("\n");
console.log(lines.slice(0, -3).join("\n"));
console.log("");
console.log("Virtual Tournament Organizer");
console.log("");
console.log("");
console.log("");

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, async () => {
    console.log(">> Loading commands...");
    await client.initApplicationCommands();

    // Log registered commands
    console.log(">> Registered commands:");
    for (const cmd of client["applicationCommands"].values()) {
        console.log(`   - /${cmd.name}`);
    }
});

client.on(Events.InteractionCreate, (interaction) => {
    client.executeInteraction(interaction);
});

console.log(">> Importing commands from: src/commands/**/*.{js,ts}");
await importx(join(__dirname, "commands/**/*.{js,ts}"));
console.log(">> Commands imported");

if (!process.env.DISCORD_TOKEN) {
    throw Error("DISCORD_TOKEN not found in environment");
}
await client.login(process.env.DISCORD_TOKEN);

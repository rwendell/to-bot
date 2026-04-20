import "dotenv/config";
import { dirname, importx } from "@discordx/importer";
import { Events, GatewayIntentBits } from "discord.js";
import { Client } from "discordx";

// Note: Need at least Guilds intent for slash commands to register
// DM bot still works once commands are registered

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
  client.initApplicationCommands();
  console.log(">> VTO (Virtual Tournament Organizer) started");
});

client.on(Events.InteractionCreate, (interaction) => {
  client.executeInteraction(interaction);
});

// Auto-load all commands from commands/ directory
await importx(`${dirname(import.meta.url)}/commands/**/*.{js,ts}`);

if (!process.env.DISCORD_TOKEN) {
  throw Error("DISCORD_TOKEN not found in environment");
}
await client.login(process.env.DISCORD_TOKEN);

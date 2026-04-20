import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { Discord } from "discordx";

// TODO: Initialize database
// import { initDb } from './db';
// await initDb();

const client = new Client({
  // TODO: Determine minimal intents - likely none needed for pure DM bot
  // intents: [],
  intents: [],
  silent: false,
});

// TODO: Set up global application commands for DM support
client.once("ready", () => {
  // TODO: Initialize global application commands
  // client.initApplicationCommands();
  console.log(">> VTO (Virtual Tournament Organizer) started");
});

// TODO: Handle all interactions
// client.on('interactionCreate', (interaction) => {
//     client.executeInteraction(interaction);
// });

// TODO: Load commands
// await importx(`${dirname(import.meta.url)}/commands/**/*.{js,ts}`);

if (!process.env.DISCORD_TOKEN) {
  throw Error("DISCORD_TOKEN not found in environment");
}
await client.login(process.env.DISCORD_TOKEN);

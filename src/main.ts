import { dirname, importx } from "@discordx/importer";
import { Events, GatewayIntentBits } from "discord.js";
import { Client } from "discordx";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  silent: false,
});

client.once(Events.ClientReady, () => {
  client.initApplicationCommands();
  console.log(">> VTO started");
});

client.on(Events.InteractionCreate, (interaction) => {
  client.executeInteraction(interaction);
});

await importx(`${dirname(import.meta.url)}/commands/**/*.{js,ts}`);

if (!process.env.DISCORD_TOKEN) {
  throw Error("DISCORD_TOKEN not found in environment");
}
await client.login(process.env.DISCORD_TOKEN);

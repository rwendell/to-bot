# TourneyFlow User Guide

## For Bot Host (You)

### Setup

1. Clone the repo
2. Copy `.env.example` to `.env` and fill in:

   ```
   DISCORD_TOKEN=your_bot_token
   DISCORD_CLIENT_ID=your_client_id
   STARTGG_PAT=your_startgg_pat
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Run the bot:
   ```bash
   pnpm dev
   ```

### Enabling Intents

In Discord Developer Portal → Your Bot → Privileged Intents, enable:

- **Message Content Intent** - Required for reading messages
- **Server Members Intent** - Required for role management

### Inviting the Bot to Your Server

1. Go to Discord Developer Portal → OAuth2 → URL Generator
2. Select scopes: `bot`, `applications.commands`
3. Select permissions:
   - Send Messages
   - Manage Roles
   - Use Application Commands
4. Use the generated URL to invite the bot

### Creating the Verified Role

In your server settings:

1. Server Settings → Roles → Create Role
2. Name it "Verified" (case insensitive)
3. The bot will automatically assign this role to verified users

---

## For Server Admins (Who Invite Your Bot)

### Inviting the Bot

1. Ask the bot host for the invite link
2. Select your server
3. Grant required permissions

### Setting Up Verification

1. Create a role named "Verified" in your server
2. Players use `/verify <startgg_username>` to verify

---

## For Players

### Verifying Your Account

1. Type `/verify <your_startgg_username>`
2. Your Discord must be linked on start.gg:
   - Go to start.gg → Profile → Connections → Link Discord
3. On success, you get the Verified role

---

## Troubleshooting

### Bot Offline

- Check `.env` has correct DISCORD_TOKEN
- Verify intents are enabled in Developer Portal

### Verification Fails

- Ensure your Discord is linked on start.gg
- Check the username is correct (not the display name, but the slug)

### Role Not Assigned

- Ensure a role named "Verified" exists in the server
- Bot needs Manage Roles permission above the Verified role

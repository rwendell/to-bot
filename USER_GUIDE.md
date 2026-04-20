# TourneyFlow User Guide

## For Tournament Organizers

### Inviting the Bot

1. Go to Discord Developer Portal → Applications → Your Bot
2. Copy the invite link
3. Select required permissions:
   - Send Messages
   - Manage Roles
   - Use Slash Commands

### Enabling Intents

In Developer Portal → Bot → Privileged Intents, enable:

- MESSAGE CONTENT INTENT (required for message commands)
- SERVER MEMBERS INTENT (required for role management)

### Setting Up Verification

1. Invite the bot to your server
2. Use `/verify` command
3. Players link their start.gg accounts
4. Verified players get the "Verified" role

## For Players

### Verifying Your Account

1. Type `/verify`
2. Enter your start.gg username when prompted
3. The bot will check if your Discord is linked on start.gg
4. On success, you get the Verified role

## Troubleshooting

### Bot Won't Go Online

- Check `.env` has correct DISCORD_TOKEN
- Verify intents are enabled in Developer Portal

### Verification Fails

- Make sure your Discord account is linked in start.gg
  - Go to start.gg → Profile → Connections → Link Discord

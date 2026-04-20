# TO Bot

Virtual Tournament Organizer - Automated bot that does everything a human TO can do.

Players verify their start.gg accounts via Discord to access tournament servers.

## Quick Start

```bash
pnpm install
cp .env.example .env
# Edit .env with your tokens
pnpm dev
```

## What It Does

- `/verify <username>` - Players verify their start.gg account is linked to their Discord
- Automatically assigns the "Verified" role on success

## Requirements

- Discord Bot Token
- start.gg Personal Access Token (PAT)
- A role named "Verified" in your server

## Configuration

Create `.env`:

```
DISCORD_TOKEN=your_bot_token
DISCORD_CLIENT_ID=your_client_id
STARTGG_PAT=your_startgg_pat
```

## Hosting

See USER_GUIDE.md for full hosting instructions.

## License

MIT

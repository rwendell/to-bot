# VTO

Virtual Tournament Organizer - Automated bot that does everything a human TO can do.

Works in DMs only - no Discord server required.

## What It Does

- `/verify <username>` - Verify your start.gg account is linked to Discord
- `/tournaments` - See your entered tournaments
- `/dq` - Self-DQ from a tournament

## Quick Start

```bash
pnpm install
pnpm dev
```

## Configuration

Create `.env`:

```
DISCORD_TOKEN=your_bot_token
STARTGG_PAT=your_startgg_pat
```

## Architecture

- Pure DM bot - works anywhere the bot is added
- No server/guild required
- No roles
- No privileged intents
- SQLite database for persistent verification

## Commands

| Command        | Description              |
| -------------- | ------------------------ |
| `/verify`      | Verify start.gg account  |
| `/tournaments` | View entered tournaments |
| `/dq`          | Self-DQ from tournament  |

## License

MIT

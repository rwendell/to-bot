# TO Bot Project Outline

## Overview

Virtual Tournament Organizer - Automated bot that does everything a human TO can do. Verifies players via start.gg + Discord integration.

## Features

- [ ] Player verification (/verify command)
- [ ] start.gg account linking via Discord authorization
- [ ] Server-specific verified role assignment
- [ ] Multi-server support (each server has own config)
- [ ] Tournament setup command for organizers

## Tech Stack

- **Runtime**: pnpm + tsx
- **Framework**: discordx (decorator-based)
- **Language**: TypeScript

## Project Structure

```
src/
├── main.ts           # Bot entry point
└── commands/        # Slash commands
    └── verify.ts   # Verification command
```

## Environment

- DISCORD_TOKEN
- DISCORD_CLIENT_ID
- STARTGG_PAT

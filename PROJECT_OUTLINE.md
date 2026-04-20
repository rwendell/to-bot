# TourneyFlow Project Outline

## Overview

Discord bot for tournament organizers to verify players via start.gg integration.

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

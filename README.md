# react-catalog-demo

Minimal React (Vite + TypeScript) application for testing GitHub Actions CI + Backstage Catalog integration.

## Prerequisites

- Node.js 20+

## Run (dev)

```bash
npm install
npm run dev
```

Opens on http://localhost:5173.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## CI / Backstage

The GitHub Actions workflow (`.github/workflows/ci.yml`):
1. **build-and-test** – installs deps, runs tests, and builds on every push.
2. **catalog** – on `main` only, calls the Backstage Scaffolder to create a catalog component PR.

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `BACKSTAGE_URL` | Backstage instance URL |
| `BACKSTAGE_TOKEN` | Backstage API token |
| `OWNER_GROUP_REF` | Owner group ref, e.g. `group:default/team-cib` |

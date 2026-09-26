# DBA Career Ladder

One roadmap on the Roadmaps platform: seven levels from your first SQL query to a professional database administration certification.

- **Live site:** https://roadmaps-2b061.web.app/dba/ (the old address roadmaps-2b061-dba.web.app redirects there)
- **Hub, security rules and full documentation:** the `Master` branch of this repository.

## What's here

| File | What it does |
|---|---|
| `public/index.html` | The roadmap app. The content is in `LEVELS`, `COPY`, `COMMITMENT` and `PHASE_RANGES`; the rest is shared with the other roadmap branches. |
| `public/firebase-config.js` | Firebase settings, admin email, and this roadmap's id (`dba`), title and hub link |
| `public/roadmap.json` | Outline read by the hub. Regenerate after changing `LEVELS`: `node tools/export-outline.cjs` |
| `firebase.json` | Only redirects the old `roadmaps-2b061-dba` site to `/dba/` |

## Deploy

This branch is published from `Master`, together with the hub and every other roadmap:

```bash
git checkout Master
git pull
npm run deploy
```

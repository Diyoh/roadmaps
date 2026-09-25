# DBA Career Ladder

One roadmap on the Roadmaps platform: seven levels from your first SQL query to a professional database administration certification.

- **Live site:** https://roadmaps-2b061-dba.web.app
- **Hub, security rules and full documentation:** the `Master` branch of this repository.

## What's here

| File | What it does |
|---|---|
| `public/index.html` | The roadmap: levels, phases, exams, commitment, daily log, assignments, grading, plan settings, progress card |
| `public/firebase-config.js` | Firebase settings, admin email, and this roadmap's id, title and hub link |
| `firebase.json` | Publishes to the `roadmaps-2b061-dba` hosting site |

## Deploy

```bash
git checkout dba-career-ladder
git pull
firebase deploy --only hosting
```

Security rules are deployed from `Master` only (`firebase deploy --only firestore:rules`).

## Use this branch as a template

To create a new roadmap, branch from here, change the content in `public/index.html`, and give it a new `ROADMAP.id` in `public/firebase-config.js`. The full steps are in the `Master` README.

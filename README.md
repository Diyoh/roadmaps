# AWS Engineer

One roadmap on the Roadmaps platform: 10 stages, from Linux and networking to eleven AWS certifications, ten recruiter-grade projects, scholarships, daily post cards and GitHub entries, a logbook, and a plan to land a remote job abroad, at 2 hours a day. Every phase names a free route and, where it helps, a paid route.

- **Full readable plan:** `ROADMAP.md` in this folder. It also explains honestly what "top ten in the world" can and cannot mean.
- **Logbook template:** `LOGBOOK.md`. The app also generates one from your Daily log.
- **Hub, security rules, build and full documentation:** the `Master` branch of the Roadmaps repository.

## The stages

| Stage | Default dates | Exams and checkpoints |
|---|---|---|
| 1. Foundations: Linux, networking, Git and Python | 2 Nov 2026 – 6 Dec 2026 | Checkpoint 1: a hardened Linux web server with a backup script |
| 2. Cloud Practitioner: a safe account and your first site | 7 Dec 2026 – 10 Jan 2027 | AWS Certified Cloud Practitioner |
| 3. Solutions Architect Associate: design real systems | 11 Jan 2027 – 7 Mar 2027 | AWS Certified Solutions Architect – Associate |
| 4. Developer Associate: serverless products and first paid work | 8 Mar 2027 – 25 Apr 2027 | AWS Certified Developer – Associate |
| 5. CloudOps and Infrastructure as Code | 26 Apr 2027 – 13 Jun 2027 | HashiCorp Certified: Terraform Associate; AWS Certified CloudOps Engineer – Associate |
| 6. Solutions Architect Professional: enterprise AWS | 14 Jun 2027 – 22 Aug 2027 | AWS Certified Solutions Architect – Professional |
| 7. DevOps Engineer Professional: containers and delivery | 23 Aug 2027 – 24 Oct 2027 | AWS Certified DevOps Engineer – Professional |
| 8. Security Specialty: detect, respond and prove | 25 Oct 2027 – 19 Dec 2027 | AWS Certified Security – Specialty |
| 9. Data and AI on AWS: lakes, ML and generative AI | 20 Dec 2027 – 26 Mar 2028 | AWS Certified AI Practitioner; AWS Certified Data Engineer – Associate; AWS Certified Machine Learning Engineer – Associate; AWS Certified Generative AI Developer – Professional |
| 10. Remote career launch and the elite audit | 27 Mar 2028 – 4 Jun 2028 | Checkpoint 10: the elite audit, portfolio and mock interview review |

Mentors can move the start date, change the daily hours, stretch or shorten each stage and add holidays from the hub; every date moves with them.

## What's here

| File | What it does |
|---|---|
| `public/index.html` | The roadmap app, copied from the `ai-engineer` branch. Content differs (`LEVELS`, `COPY`, `COMMITMENT`, `PHASE_RANGES`), and the progress-card panel adds a short post, a daily GitHub entry and a downloadable logbook |
| `public/firebase-config.js` | Firebase settings, admin email, and this roadmap's id (`aws`), title and hub link |
| `public/roadmap.json` | Outline read by the hub. Regenerate after changing `LEVELS`: `node tools/export-outline.cjs` |
| `ROADMAP.md` | The same plan as a readable document, with costs, scholarships and honest limits |
| `LOGBOOK.md` | Blank logbook tables |

## Add it to the platform

1. Create the branch (commit without signing), copy these files in, then push:

```bash
git switch -c aws-engineer origin/ai-engineer
# copy this folder's files over the working tree, then:
node tools/export-outline.cjs
git add README.md ROADMAP.md LOGBOOK.md public
git -c commit.gpgsign=false commit --no-gpg-sign -m "Add the AWS Engineer roadmap"
git push -u origin aws-engineer
```

2. On `Master`, add this entry to `HUB.roadmaps` in `public/firebase-config.js`:

```js
{ id: "aws", branch: "aws-engineer", path: "aws", title: "AWS Engineer", tagline: "Ten stages from Linux to every reachable AWS certification, public projects recruiters remember, scholarships, a logbook, daily posts and GitHub entries, and a plan to land a remote job abroad from Cameroon.", url: "/aws/", levels: 10, dailyHours: 2, startDate: "2026-11-02", order: 6 }
```

3. Run `npm run deploy` from `Master`, then assign a mentor in the hub.

Prices, exam codes, scholarship dates and retirement dates were read in October 2026 and change often: confirm each on the official page before you book, pay or apply.

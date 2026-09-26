# Roadmaps

Career roadmaps with a mentor. Students sign up once, choose a roadmap, and follow it with a signed commitment, a daily log, assignments, grades and a daily progress card to post. The admin manages everything and can add mentors who each look after specific roadmaps.

Everything is published on one address, so people sign in once for every roadmap: **https://roadmaps-2b061.web.app**

## How the repository is organized

| Branch | What it is | Published at |
|---|---|---|
| `Master` | The **hub** (sign-up, choosing a roadmap, admin and mentor console), the **security rules** and the **build** that publishes everything | `/` |
| `dba-career-ladder` | DBA Career Ladder: seven levels, SQL to a professional DBA certification | `/dba/` |
| `ai-engineer` | AI Engineer Roadmap: four levels, first ML model to LLM systems, MLOps and a portfolio | `/ai/` |

`npm run build` copies each roadmap branch listed in `HUB.roadmaps` (in `public/firebase-config.js`) into its own folder of `dist/`, next to the hub. All roadmaps share one Firebase project (`roadmaps-2b061`).

## Roles

- **Admin** (`diyohshiloh4@gmail.com`, signed in with Google): sees and manages every roadmap, approves students, and adds mentors in the hub's **Mentors** section.
- **Mentor**: added by the admin with their Google email and the roadmaps they manage. They see only those roadmaps: class, approvals, assignments, grading, comments, plan settings and holidays.
- **Student**: signs up (Google, or email and password), chooses a roadmap, signs its commitment, and waits for approval. They stay on that roadmap until they choose **Switch roadmap**. Progress on each roadmap is kept.

## Data (Cloud Firestore)

| Path | Contents | Written by |
|---|---|---|
| `catalog/{roadmapId}` | Title, tagline, link, levels, mentors | The roadmap's mentors (kept in sync by the hub) |
| `teachers/{email}` | Mentor name, links and the roadmap ids they manage | Admin |
| `users/{uid}` | Name, current roadmap and roadmaps started | The student (mentors can correct the name) |
| `access/{uid}` | Approved, suspended or removed | Admin, or a mentor of the student's roadmap |
| `r/{roadmapId}/settings/plan` | Daily hours, start date, level lengths, holidays | The roadmap's mentors |
| `r/{roadmapId}/students/{uid}` (+ `weeks/`) | Commitment, milestones, exams, daily logs, submissions | The student |
| `r/{roadmapId}/assigned/{uid}` | Assignments, grades, comments, feedback | The roadmap's mentors |

The rules in `firestore.rules` enforce this.

## Deploying

You need Node.js and the Firebase CLI (`npm install -g firebase-tools`), logged in as the admin (`firebase login`). From this branch:

```bash
git checkout Master
git pull
npm run deploy
```

This builds the hub and every roadmap branch into `dist/` and publishes the site and the security rules together.

## Adding a new roadmap

1. Create a branch from `ai-engineer` or `dba-career-ladder` (for example `cloud-engineer`). In `public/index.html`, change only the content: `LEVELS`, `COPY` (card and routine wording), `COMMITMENT`, `PHASE_RANGES` (one entry per phase date label), `DEFAULT_START`, `PLAN_START`, and the titles and placeholders in the HTML.
2. In that branch's `public/firebase-config.js`, set a new `ROADMAP.id` (short, lowercase, e.g. `cloud`), title, tagline and order.
3. Run `node tools/export-outline.cjs` on that branch, commit and push.
4. On `Master`, add the roadmap to `HUB.roadmaps` in `public/firebase-config.js` with its `branch` and `path`, then run `npm run deploy`.
5. In the hub, assign the roadmap to a mentor if someone other than the admin will run it.

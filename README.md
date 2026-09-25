# Roadmaps

Smart roadmaps for students: career roadmaps with a teacher. Students sign up once, choose a roadmap, and follow it with a signed commitment, a daily log, assignments, grades and a daily progress card to post. The admin manages everything and can add teachers who each look after specific roadmaps.

## How the repository is organized

| Branch | What it is | Published at |
|---|---|---|
| `Master` | The **hub**: sign-up, choosing a roadmap, admin and teacher overview, and the **security rules** for the whole platform | https://roadmaps-2b061.web.app |
| `dba-career-ladder` | The DBA Career Ladder roadmap | https://roadmaps-2b061-dba.web.app |
| one branch per new roadmap | Each further roadmap | `https://roadmaps-2b061-<id>.web.app` |

All sites share one Firebase project (`roadmaps-2b061`), so one account works everywhere and a student's choice of roadmap is remembered across sites.

## Roles

- **Admin** (`diyohshiloh4@gmail.com`, signed in with Google): sees and manages every roadmap, approves students, and adds teachers in the hub's **Teachers** section.
- **Teacher**: added by the admin with their Google email and the roadmaps they manage. They sign in with Google and see only those roadmaps: class, approvals, assignments, grading, comments and plan settings.
- **Student**: signs up (Google, or email and password), chooses a roadmap, signs its commitment, and waits for approval. They stay on that roadmap until they choose **Switch roadmap**. Progress on each roadmap is kept.

## Data (Cloud Firestore)

| Path | Contents | Written by |
|---|---|---|
| `catalog/{roadmapId}` | Title, tagline, link, levels | The roadmap's teachers (registered automatically when a teacher opens the roadmap) |
| `teachers/{email}` | Teacher name and the roadmap ids they manage | Admin |
| `users/{uid}` | Current roadmap and roadmaps started | The student |
| `access/{uid}` | Approved or removed | Admin, or a teacher of the student's roadmap |
| `r/{roadmapId}/settings/plan` | Daily hours, start date, holidays | The roadmap's teachers |
| `r/{roadmapId}/students/{uid}` (+ `weeks/`) | Commitment, milestones, exams, daily logs, submissions | The student |
| `r/{roadmapId}/assigned/{uid}` | Assignments, grades, comments, feedback | The roadmap's teachers |

The rules in `firestore.rules` enforce this. Deploy them **only from `Master`**.

## Deploying

You need Node.js and the Firebase CLI (`npm install -g firebase-tools`), logged in as the admin (`firebase login`).

**Hub and security rules** (this branch):

```bash
git checkout Master
git pull
firebase deploy --only hosting,firestore:rules
```

**A roadmap** (its own branch):

```bash
git checkout dba-career-ladder
git pull
firebase deploy --only hosting
```

## Adding a new roadmap

1. Create a branch from `dba-career-ladder` (for example `cloud-engineer`) and change the roadmap's content in `public/index.html` (levels, phases, exams, commitment).
2. In `public/firebase-config.js`, set a new `ROADMAP.id` (short, lowercase, e.g. `cloud`), title, tagline and order.
3. Create a hosting site for it once: `firebase hosting:sites:create roadmaps-2b061-cloud`, and put that name in the branch's `firebase.json` under `"site"`.
4. In the Firebase console → **Authentication → Settings → Authorized domains**, add `roadmaps-2b061-cloud.web.app`.
5. Deploy with `firebase deploy --only hosting`, then open the new site once while signed in as the admin. It registers itself and appears in the hub for every student.
6. In the hub, assign the roadmap to a teacher if someone other than the admin will run it.

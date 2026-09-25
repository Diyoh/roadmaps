# DBA Career Ladder

A seven-level database administration roadmap for a class. Students sign in, sign a commitment, log their study every day, submit assigned work and post a daily progress card. The teacher approves students, assigns and grades work, comments, and sets the daily study time, start date and holidays for everyone.

This branch (`dba-career-ladder`) holds one roadmap. Other roadmaps live on their own branches of this repository.

## How it's built

| Part | What it does |
|---|---|
| `public/index.html` | The whole site: pages, styles and app code |
| `public/firebase-config.js` | Your Firebase project settings and the teacher's email |
| `firestore.rules` | Security rules: who can read and write what |
| `firebase.json`, `.firebaserc` | Firebase Hosting and Firestore settings |

- **Sign-in:** Firebase Authentication (Google, or email and password)
- **Data:** Cloud Firestore
- **Hosting:** Firebase Hosting (the repository is private, so GitHub Pages isn't used)

## Who can do what

| | Student | Teacher |
|---|---|---|
| Own plan, milestones, exams, daily log | Read and write | Read |
| Other students' data | No access | Read |
| Assignments, grades, comments, approval | Read their own | Read and write |
| Plan settings (hours, start date, holidays) | Read | Read and write |

The teacher is whoever signs in **with Google** using the email set in both `public/firebase-config.js` and `firestore.rules`. New students must be approved by the teacher before they can use the plan.

## One-time setup

### 1. Firebase project
1. Go to <https://console.firebase.google.com> and create a project (e.g. `diyoh-roadmaps`).
2. **Build → Authentication → Get started → Sign-in method**: enable **Google** and **Email/Password**.
3. **Build → Firestore Database → Create database**: choose **production mode** and a location near your students.
4. **Project settings (gear) → General → Your apps → Web (`</>`)**: register an app and copy the `firebaseConfig` values.

### 2. Fill in the settings
1. Paste the values into `public/firebase-config.js`.
2. Put your project ID in `.firebaserc`.
3. Check that the teacher email is the same in `public/firebase-config.js` and `firestore.rules`.

### 3. Deploy (from your computer)
You need Node.js installed (<https://nodejs.org>).

```bash
npm install -g firebase-tools
firebase login
git clone https://github.com/Diyoh/roadmaps.git
cd roadmaps
git checkout dba-career-ladder
firebase deploy --only hosting,firestore:rules
```

The site is then live at `https://<your-project-id>.web.app`.

After this, every time the code changes, run `git pull` and `firebase deploy --only hosting,firestore:rules` again.

### 4. Add your domain (optional)
In Firebase **Hosting → Add custom domain** you can connect a domain you own, such as `roadmaps.yourschool.com`.

## Using it

**Teacher**
1. Open the site and choose **Continue with Google** with the teacher account.
2. Go to **Plan settings** to set the daily study time, start date and holidays, then save.
3. Share the site link with students. When they sign in and sign their commitment, they appear under **Waiting for approval** on the **Class** page. Approve them.
4. Use **Assign a task** to give work, and **View** on a student to grade it and comment.

**Students**
1. Open the site and sign in (Google, or create an account with email and password).
2. Read and sign the commitment with their full name, then wait for approval.
3. Log hours and what they did every day, submit assignments, and create and download their daily progress card to post on social media.

## Backups
Firestore data can be exported from the Firebase console (**Firestore → Import/Export**, which needs billing enabled) or read with the Firebase CLI. Export at least once a month during the course.

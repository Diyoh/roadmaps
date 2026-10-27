# Cloud Computing and AWS

One roadmap on the Roadmaps platform: 10 levels, from Linux and networking to eleven AWS certifications, Terraform, Kubernetes (CKA and CKS), Azure, Google Cloud and a public portfolio, at 2 hours a day. Every phase names a free route and, where it helps, a paid route.

- **Full readable plan:** `ROADMAP.md` in this folder. It also explains honestly what "top ten in the world" can and cannot mean.
- **Hub, security rules, build and full documentation:** the `Master` branch of the Roadmaps repository.

## The levels

| Level | Default dates | Exams and checkpoints |
|---|---|---|
| 1. Cloud foundations: Linux, networking, Git and scripting | 2 Nov 2026 – 13 Dec 2026 | Checkpoint 1: a hardened Linux web server with a backup script |
| 2. AWS Cloud Practitioner and your first safe account | 14 Dec 2026 – 24 Jan 2027 | AWS Certified Cloud Practitioner |
| 3. AWS Solutions Architect Associate: design real systems | 25 Jan 2027 – 21 Mar 2027 | AWS Certified Solutions Architect – Associate |
| 4. Developer and CloudOps Associates: serverless, delivery and operations | 22 Mar 2027 – 16 May 2027 | AWS Certified Developer – Associate; AWS Certified CloudOps Engineer – Associate |
| 5. Infrastructure as code, containers and Kubernetes | 17 May 2027 – 25 Jul 2027 | HashiCorp Certified: Terraform Associate; Certified Kubernetes Administrator |
| 6. AWS Solutions Architect Professional: enterprise-scale design | 26 Jul 2027 – 17 Oct 2027 | AWS Certified Solutions Architect – Professional |
| 7. AWS DevOps Engineer Professional: automation and reliability | 18 Oct 2027 – 26 Dec 2027 | AWS Certified DevOps Engineer – Professional |
| 8. Cloud security: AWS Security Specialty and Kubernetes security | 27 Dec 2027 – 5 Mar 2028 | AWS Certified Security – Specialty; Certified Kubernetes Security Specialist |
| 9. Data and AI on AWS: four more certifications | 6 Mar 2028 – 11 Jun 2028 | AWS Certified AI Practitioner; AWS Certified Data Engineer – Associate; AWS Certified Machine Learning Engineer – Associate; AWS Certified Generative AI Developer – Professional |
| 10. Multi-cloud, proof of skill and the elite audit | 12 Jun 2028 – 20 Aug 2028 | Microsoft Certified: Azure Administrator Associate; Google Cloud Professional Cloud Architect; Checkpoint 10: the elite audit and public portfolio review |

Mentors can move the start date, change the daily hours, stretch or shorten each level and add holidays from the hub; every date moves with them.

## What's here

| File | What it does |
|---|---|
| `public/index.html` | The roadmap app, copied from the `ai-engineer` branch. Only the content differs: `LEVELS`, `COPY`, `COMMITMENT`, `PHASE_RANGES`, `PLAN_START`, `DEFAULT_START`, titles and placeholders. |
| `public/firebase-config.js` | Firebase settings, admin email, and this roadmap's id (`cloud`), title and hub link |
| `public/roadmap.json` | Outline read by the hub. Regenerate after changing `LEVELS`: `node tools/export-outline.cjs` |
| `ROADMAP.md` | The same plan as a readable document, with costs and honest limits |

## Add it to the platform

1. Create the branch (commit without signing), copy these files in, then push:

```bash
git switch -c cloud-computing-aws origin/ai-engineer
# copy this folder's files over the working tree, then:
node tools/export-outline.cjs
git add README.md ROADMAP.md public
git -c commit.gpgsign=false commit --no-gpg-sign -m "Add the Cloud Computing and AWS roadmap"
git push -u origin cloud-computing-aws
```

2. On `Master`, add this entry to `HUB.roadmaps` in `public/firebase-config.js`:

```js
{ id: "cloud", branch: "cloud-computing-aws", path: "cloud", title: "Cloud Computing and AWS", tagline: "Ten levels from Linux and networking to AWS Professional and Specialty certifications, Kubernetes, Terraform and a multi-cloud portfolio, with a free route and a paid route at every step.", url: "/cloud/", levels: 10, dailyHours: 2, startDate: "2026-11-02", order: 4 }
```

3. Run `npm run deploy` from `Master`, then assign a mentor in the hub.

Prices, exam codes and retirement dates were read in October 2026 and change often: confirm each on the vendor's page before you book.

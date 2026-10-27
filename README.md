# DevOps Engineer

One roadmap on the Roadmaps platform: 10 levels, from Linux and Git to CI/CD, Terraform, Kubernetes, GitOps, observability, DevSecOps and AWS DevOps Professional, with the Kubestronaut certificates along the way, at 2 hours a day. Every phase names a free route and, where it helps, a paid route.

- **Full readable plan:** `ROADMAP.md` in this folder. It also explains honestly what "the best" can and cannot mean.
- **Hub, security rules, build and full documentation:** the `Master` branch of the Roadmaps repository.

## The levels

| Level | Default dates | Exams and checkpoints |
|---|---|---|
| 1. Foundations: Linux, networking, Git and scripting | 2 Nov 2026 – 13 Dec 2026 | Checkpoint 1: a Linux server built from a script, with a tested backup |
| 2. CI/CD with GitHub Actions, and containers with Docker | 14 Dec 2026 – 24 Jan 2027 | GitHub Actions certification |
| 3. Cloud for DevOps: AWS Solutions Architect Associate | 25 Jan 2027 – 21 Mar 2027 | AWS Certified Solutions Architect – Associate |
| 4. Infrastructure as code and configuration management | 22 Mar 2027 – 2 May 2027 | HashiCorp Certified: Terraform Associate |
| 5. Kubernetes: KCNA, CKA and CKAD | 3 May 2027 – 25 Jul 2027 | Kubernetes and Cloud Native Associate; Certified Kubernetes Administrator; Certified Kubernetes Application Developer |
| 6. GitOps, delivery and platform engineering | 26 Jul 2027 – 19 Sep 2027 | GitOps Certified Associate |
| 7. Observability and site reliability | 20 Sep 2027 – 14 Nov 2027 | Prometheus Certified Associate |
| 8. DevSecOps: Vault, Kubernetes security and the Kubestronaut title | 15 Nov 2027 – 23 Jan 2028 | HashiCorp Certified: Vault Associate; Kubernetes and Cloud Native Security Associate; Certified Kubernetes Security Specialist |
| 9. Professional cloud DevOps: AWS DevOps Engineer Professional | 24 Jan 2028 – 2 Apr 2028 | AWS Certified DevOps Engineer – Professional |
| 10. Capstone, portfolio and your first DevOps role | 3 Apr 2028 – 28 May 2028 | Checkpoint 10: capstone platform demonstration; Checkpoint 11: portfolio and application pack review |

Mentors can move the start date, change the daily hours, stretch or shorten each level and add holidays from the hub; every date moves with them.

## What's here

| File | What it does |
|---|---|
| `public/index.html` | The roadmap app, copied from the `ai-engineer` branch. Only the content differs: `LEVELS`, `COPY`, `COMMITMENT`, `PHASE_RANGES`, `PLAN_START`, `DEFAULT_START`, titles and placeholders. |
| `public/firebase-config.js` | Firebase settings, admin email, and this roadmap's id (`devops`), title and hub link |
| `public/roadmap.json` | Outline read by the hub. Regenerate after changing `LEVELS`: `node tools/export-outline.cjs` |
| `ROADMAP.md` | The same plan as a readable document, with costs and honest limits |

## Add it to the platform

1. Create the branch from `ai-engineer`, copy these files over it, then commit without signing and push:

```bash
git switch -c devops-engineer origin/ai-engineer
# copy this folder's files over the working tree, then:
node tools/export-outline.cjs
git add README.md ROADMAP.md public
git -c commit.gpgsign=false commit --no-gpg-sign -m "Add the DevOps Engineer roadmap"
git push -u origin devops-engineer
```

2. On `Master`, add this entry to `HUB.roadmaps` in `public/firebase-config.js`:

```js
{ id: "devops", branch: "devops-engineer", path: "devops", title: "DevOps Engineer", tagline: "Ten levels from Linux and Git to CI/CD, Terraform, Kubernetes, GitOps, observability and DevSecOps, with the Kubestronaut certificates and a platform you can show, and a free route and a paid route at every step.", url: "/devops/", levels: 10, dailyHours: 2, startDate: "2026-11-02", order: 5 }
```

3. Run `npm run deploy` from `Master`, then assign a mentor in the hub.

Prices, exam codes and renewal rules were read in October 2026 and change often: confirm each on the vendor's page before you book.

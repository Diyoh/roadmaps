# AI Engineer Roadmap

One roadmap on the Roadmaps platform: four levels, from your first machine learning model to deployed LLM systems, MLOps and an AI engineering portfolio, at 2 hours a day.

- **Live site:** https://roadmaps-2b061.web.app/ai/
- **Hub, security rules, build and full documentation:** the `Master` branch of this repository.

## The four levels

| Level | Default dates | Certificates and projects |
|---|---|---|
| 1. Machine learning foundations | 4 Sep – 20 Dec 2026 | ML Zoomcamp midterm (Flagship 1), Machine Learning Specialization |
| 2. Deep learning and applications | 21 Dec 2026 – 21 Mar 2027 | ML Zoomcamp certificate (Flagship 2), Deep Learning Specialization |
| 3. LLMs, RAG and agents | 22 Mar – 27 Jun 2027 | Generative AI with LLMs, Hugging Face Agents, IBM Generative AI Engineering, Flagship 3 |
| 4. MLOps and work-ready | 28 Jun – 30 Sep 2027 | English test, MLOps Zoomcamp (Flagship 4), portfolio and applications |

Mentors can move the start date, change the daily hours, stretch or shorten each level and add holidays from the hub; every date above moves with them.

## What's here

| File | What it does |
|---|---|
| `public/index.html` | The roadmap app: levels, phases, exams, commitment, daily log, assignments, grading, plan settings, progress card. The content is in `LEVELS`, `COPY`, `COMMITMENT` and `PHASE_RANGES`; the rest is shared with the other roadmap branches. |
| `public/firebase-config.js` | Firebase settings, admin email, and this roadmap's id (`ai`), title and hub link |
| `public/roadmap.json` | Outline read by the hub. Regenerate after changing `LEVELS`: `node tools/export-outline.cjs` |

## Deploy

This branch is published from `Master`, together with the hub and every other roadmap:

```bash
git checkout Master
git pull
npm run deploy
```

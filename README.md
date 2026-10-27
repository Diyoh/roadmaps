# AI for Everyday Work

One roadmap on the Roadmaps platform: Level 1 for everyone, one chosen track (graphics, brand and writing; video, voice and short-form; websites, apps and automation; or business operations, ads and sales) and a Launch level for everyone, from your first everyday AI tasks to video, design, websites, business operations, ads and a first paid client, at 2 hours a day. Every phase has a free route and a paid route.

- **Full readable plan:** `ROADMAP.md` in this folder.
- **Hub, security rules, build and full documentation:** the `Master` branch of the Roadmaps repository.

## Levels and tracks

Level 1 and Launch are for everyone. Each student picks one track on the **My track** page; the admin can approve extra tracks, which are added after Launch. Student dates are personal; the dates below are the full catalogue laid end to end.

| Level | Default dates | Certificates and checkpoints |
|---|---|---|
| 1. AI foundations and your free toolkit | 2 Nov 2026 – 29 Nov 2026 | OpenAI Academy: AI Foundations; Google Skills: Introduction to Generative AI learning path |
| 2. Graphics, brand and writing | 30 Nov 2026 – 3 Jan 2027 | Google AI Essentials; Track checkpoint: brand kit and 12 posts reviewed by your mentor or study group |
| 3. Video, voice and short-form content | 4 Jan 2027 – 14 Feb 2027 | Track checkpoint: eight published short videos reviewed by your mentor or study group |
| 4. Websites, apps and automation | 15 Feb 2027 – 11 Apr 2027 | Anthropic Academy: a course of your choice; OpenAI Academy: Agents and Workflows; Track checkpoint: live website and three running automations |
| 5. Business operations, ads and sales | 12 Apr 2027 – 23 May 2027 | OpenAI Academy: Applied AI Foundations; HubSpot Academy Digital Marketing certification; Google Ads certification; Meta Certified Digital Marketing Associate |
| 6. Launch: portfolio, clients and first income | 24 May 2027 – 4 Jul 2027 | Launch checkpoint: portfolio site with six case studies; Startup credit applications sent; Launch checkpoint: first paid project delivered |

Mentors can move the start date, change the daily hours, stretch or shorten each level and add holidays from the hub; every date above moves with them.

## What's here

| File | What it does |
|---|---|
| `public/index.html` | The roadmap app, copied from the `ai-engineer` branch. Only the content differs: `LEVELS`, `COPY`, `COMMITMENT`, `PHASE_RANGES`, `PLAN_START`, `DEFAULT_START`, the titles and placeholders, and the daily-routine wording. |
| `public/firebase-config.js` | Firebase settings, admin email, and this roadmap's id (`everyday`), title and hub link |
| `public/roadmap.json` | Outline read by the hub. Regenerate after changing `LEVELS`: `node tools/export-outline.cjs` |
| `ROADMAP.md` | The same plan as a readable document, with a price and limit sheet |

## Add it to the platform

1. Create the branch from this folder (commit without signing):

```bash
git switch --orphan ai-everyday-work     # or: git switch -c ai-everyday-work origin/ai-engineer, then copy these files over
# copy this folder's contents in, then:
git add -A
git -c commit.gpgsign=false commit --no-gpg-sign -m "Add the AI for Everyday Work roadmap"
git push -u origin ai-everyday-work
```

2. On `Master`, add this entry to `HUB.roadmaps` in `public/firebase-config.js`:

```js
{
  id: "everyday",
  branch: "ai-everyday-work",
  path: "everyday",
  title: "AI for Everyday Work",
  tagline: "Everyone starts with AI foundations, then picks a track (graphics and writing, video and voice, websites and automation, or business and ads) and finishes with a Launch level for a first paid client. Free route and paid route at every step.",
  url: "/everyday/",
  levels: 3,
  dailyHours: 2,
  startDate: "2026-11-02",
  order: 3
}
```

3. Run `npm run deploy` from `Master`, then assign a mentor in the hub if someone other than the admin will run it.

Free limits and prices in the plan were checked against third-party sources in October 2026. They change often: confirm each on the vendor's page before relying on it.

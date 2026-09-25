// Writes public/roadmap.json: the outline of this roadmap (levels, milestones, exams and their
// default dates). The hub reads it to show and edit the timeline.
// Run after changing LEVELS in public/index.html:  node tools/export-outline.cjs
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.join(__dirname, "..", "public", "index.html"), "utf8");
const cfg = fs.readFileSync(path.join(__dirname, "..", "public", "firebase-config.js"), "utf8");
const start = html.indexOf("var LEVELS = [");
const end = html.indexOf("];\n", start) + 1;
const LEVELS = eval(html.slice(start + "var LEVELS = ".length, end));
const id = (cfg.match(/id:\s*"([^"]+)"/) || [])[1];
const title = (cfg.match(/title:\s*"([^"]+)"/) || [])[1];
const defStart = (html.match(/var DEFAULT_START="([^"]+)"/) || [])[1];
const defHours = +((html.match(/DEFAULT_HOURS=(\d+(\.\d+)?)/) || [])[1] || 2);
const outline = {
  id, title, defaultStart: defStart, defaultHours: defHours,
  levels: LEVELS.map((L) => ({
    n: L.n, name: L.name, tag: L.tag, start: L.start, end: L.end, hours: L.hours,
    tasks: L.tasks,
    exams: L.exams.map((e) => ({ id: e.id, name: e.name, date: e.date, cost: e.cost, earn: e.earn }))
  }))
};
fs.writeFileSync(path.join(__dirname, "..", "public", "roadmap.json"), JSON.stringify(outline, null, 2) + "\n");
console.log("Wrote public/roadmap.json with", outline.levels.length, "levels");

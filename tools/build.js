// Builds the whole platform into dist/: the hub (this branch's public/ folder) plus every
// roadmap branch listed in HUB.roadmaps, each copied into its own folder (e.g. dist/dba/).
// Everything is then published on one address, so people sign in once for all roadmaps.
//
//   npm run build     build dist/ only
//   npm run deploy    build, then publish the site and the security rules
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { HUB } = await import(pathToFileURL(path.join(root, "public", "firebase-config.js")).href);
const git = (args, opts = {}) => execFileSync("git", args, { cwd: root, maxBuffer: 1 << 28, ...opts });

const dist = path.join(root, "dist");
fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(path.join(root, "public"), dist, { recursive: true });
console.log("Hub copied to dist/");

console.log("Fetching the latest roadmap branches…");
git(["fetch", "origin"], { stdio: "inherit" });

for (const r of HUB.roadmaps || []) {
  if (!r.branch || !r.path) continue;
  const ref = "origin/" + r.branch;
  const files = git(["ls-tree", "-r", "--name-only", ref, "--", "public"], { encoding: "utf8" }).split("\n").filter(Boolean);
  if (!files.length) throw new Error("No public/ folder found on branch " + r.branch);
  for (const f of files) {
    const out = path.join(dist, r.path, f.slice("public/".length));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, git(["show", ref + ":" + f]));
  }
  console.log("Roadmap “" + r.title + "” (" + r.branch + ") → dist/" + r.path + "/ (" + files.length + " files)");
}
console.log("Build finished.");

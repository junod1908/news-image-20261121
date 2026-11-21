// news-image-20261121 — "Sum up 21 November's world news in one image."
//
// The entry is the broadsheet saved as entry.png next to this file: a single
// page that names the day (Saturday, 21 November 2026) and packs its world
// news into illustrated hero panels, a numbered world map and region cards —
// Europe, Asia, Africa, North America, the Middle East, Latin America and
// the Pacific — every story date-checked to that Saturday. This program's
// whole job is to place that image where the grader
// looks for it: /output/entry.png (or $MAKEFUN_OUTPUT_DIR outside the
// grader). It reads no input and uses no clock or randomness, so two runs
// write byte-identical files.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));

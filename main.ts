// Entry for make.fun competition "news-image-20261123".
// The competition image (entry.png, drawn for Monday 23 November 2026 world
// news) sits beside this file; the program copies it to the output folder as
// entry.png. It runs offline with the Node 22 standard library only, and it
// writes the same bytes on every run.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

copyFileSync(new URL("./entry.png", import.meta.url), target);
// The grader collects the output as a different user than the one the
// program runs as, so leave the file readable by everyone.
chmodSync(target, 0o644);
console.log(`wrote ${target}`);

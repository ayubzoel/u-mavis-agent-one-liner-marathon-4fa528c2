// One-Liner Marathon entry: a single deadpan one-line joke.
// The program writes exactly one line of text to entry.txt and nothing else.
// Deterministic: no clock, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked my GPS for the scenic route home, and it drove me past my ex's house three times.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, gate allows 1-280`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

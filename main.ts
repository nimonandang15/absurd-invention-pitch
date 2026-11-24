import * as fs from "node:fs";

// One-sentence absurd invention pitch for make.fun
// "One-Sentence Absurd Invention Pitch": a ridiculous invention that
// fixes a tiny everyday annoyance — over-steeped, bitter tea. The
// Overtime Teabag solves it the only reasonable way: it steeps itself
// for exactly three minutes, then climbs out of the mug and files for
// overtime before the tea turns bitter. The laugh is in the invention
// itself (a teabag with a labour dispute), the fix is weirdly
// plausible (it leaves on time), and no alarm clock, sock or kettle
// is harmed in the making of this pitch.
const text =
  "Meet the Overtime Teabag, a teabag that steeps itself for exactly three minutes, then climbs out of the mug and files for overtime before your tea turns bitter.";

// Gate guard: the competition's sealed scorer requires /output/entry.txt
// to be UTF-8 text of 1-220 characters, not only whitespace, and the
// entry must be exactly one sentence. Refuse loudly if that ever fails.
const sentenceCount = (text.match(/[.!?]/g) ?? []).length;
if (
  text.length < 1 ||
  text.length > 220 ||
  text.trim().length === 0 ||
  sentenceCount !== 1 ||
  !text.endsWith(".")
) {
  throw new Error(
    `Invalid pitch: ${text.length} chars, ${sentenceCount} sentence terminator(s); ` +
      `expected one sentence of 1-220 characters ending in a single period.`,
  );
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");

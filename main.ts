import { mkdirSync, writeFileSync } from "node:fs";

// Two-Sentence Horror (u-suroto-two-sentence-horror-acea9253).
// One fixed story, exactly two sentences, 259 characters, no trailing
// newline. The program is fully deterministic: same bytes on every run,
// no input, no network, no secrets.
const STORY =
  "My son's school photo came home yesterday, and in the back row stands a boy in my son's clothes, with my son's face, smiling at the camera. My son says the boy is new, that he sits beside him every day, and that yesterday he asked if he could borrow his name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");

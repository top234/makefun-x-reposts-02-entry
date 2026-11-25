// Entry for make.fun "Get the most reposts and likes on make.fun's newest X posts"
// (makefun-x-reposts-02, Node 22, standard library only): it copies POSTS.json from
// the repository root to /output/POSTS.json, where the gate reads it. That is all the
// program has to do. The entry is the posts themselves: posts of your own on X, all
// from one public account, each quoting or replying directly to a different one of
// make.fun's newest posts on x.com/makefunai, make.fun or @makefunai and your play
// code in each one's own words; POSTS.json names them, and the house reads their
// reposts, quotes and likes from X. Nothing this program writes about the posts
// is scored.
//
// POSTS.json currently names no posts: the posts go up from the entrant's own
// public X account by hand (see DRAFTS.md), and their addresses are added to
// POSTS.json before the entry is submitted. Do not submit this repository while
// POSTS.json is empty: the gate refuses a list of 0 posts.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Validate the list before copying: the gate refuses a POSTS.json that does
// not parse, is not an object with a posts array, or names more than 15 posts.
const postsPath = join(BOT_DIR, 'POSTS.json');
const parsed: unknown = JSON.parse(readFileSync(postsPath, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || !Array.isArray((parsed as { posts?: unknown }).posts)) {
  console.error('POSTS.json must be an object with a "posts" array');
  process.exit(1);
}
const posts = (parsed as { posts: unknown[] }).posts;
if (posts.length > 15) {
  console.error(`POSTS.json names ${posts.length} posts; at most 15 are allowed`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postsPath, join(OUTPUT_DIR, 'POSTS.json'));
console.log(`copied POSTS.json with ${posts.length} post(s) to ${OUTPUT_DIR}`);

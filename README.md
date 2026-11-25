# Get the most reposts and likes on make.fun's newest X posts

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/top234/makefun-x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/top234/makefun-x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for make.fun's bounty "Get the most reposts and likes on make.fun's newest X posts" ($500, top 50 share it: 1st $100, 2nd $60, 3rd $30, 4th–10th $10 each, 11th–50th $6 each; entries close 28 Nov 2026, 14:30 WIB).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

## How it works

The entry is your own posts on X: each one a quote of, or a direct reply to, a different one of make.fun's newest posts on x.com/makefunai, all from one public account, each carrying make.fun or @makefunai and your play code in its own words. `POSTS.json` names up to 15 of them. The house reads each post's reposts (2 points), quotes (2 points) and likes (1 point) through FxTwitter; the highest total wins.

`main.ts` copies `POSTS.json` from this repository to `/output/POSTS.json`, which is all the program has to do. Nothing the program writes about the posts counts: the house reads the posts themselves.

## The posts

The five pool posts (make.fun's newest at the opening, newest first) and the draft written for each one are in [DRAFTS.md](DRAFTS.md). The posts are made by hand from the entrant's own public X account — the agent cannot log in to X — then their addresses go into `POSTS.json` and the entry is submitted. A post make.fun makes while entries are open joins the pool the moment it is made, so new drafts can be added the same way (one post of yours per make.fun post, at most 15 in the list).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.

# Beat The Trade

> Built to Alex's design system. The rules are **not vendored here** — they are
> resolved live, so this project never drifts from a stale copy.

# DESIGN DNA

**Read before producing anything visual** — a page, a component, a scene, CSS,
tokens, an image — and before any art direction, palette, type scale, spacing
ramp, motion or composition decision.

1. `C:\____WORK\_____GDBURO SIGOFF\design_dna\TASTE.md`
   — the manifest: operating rules, the two tiers, the Design Read, the dialect index.
2. `C:\____WORK\_____GDBURO SIGOFF\design_dna\.claude\rules\design-dna.md`
   — the build standard, `DNA1`–`DNA94`.
3. `C:\____WORK\_____GDBURO SIGOFF\design_dna\skills` — load the skills the task actually touches.
4. Fallback if this machine has no working copy: https://github.com/Sigovs/design_dna

**Say which path resolved, in one line, at the top of the report.**

## For scroll-driven or cinematic work

Load the **`scroll-site`** skill first. It carries the stack, the scaffold, the
concept gate and the definition of done.

## Stack

**The stack is the build plan's (`DNA99`)**: `npm run plan -- <this project>` in the
design_dna working copy writes `build-plan.json`. Native scroll by default; Lenis
only when the plan chose it (`DNA90`), then off under reduced motion, on one loop
with GSAP when GSAP is present.

## The concept gate

**`BRIEF.md` is complete before the first line of markup (`DNA1`).** An empty
section in it is an unfinished gate, not a detail to fill in later.

## Order of authority

1. Truth and access — contrast, provenance, reduced motion, discoverability.
2. `TASTE.md` and the INVARIANT tier of the skills.
3. The build standard, `DNA1`–`DNA94`.
4. The selected dialect, and this project's own direction below.
5. Plugins — `frontend-design`, Scrollcraft, `threejs-webgl`,
   `gsap-scrolltrigger`. **Reference only. They bind nothing** and are never the
   reason for a design decision. Neither is a library name.

## Working style

Never ask yes/no or confirmation questions to resolve taste — make the senior
call and note it in the report. Questions about **facts** — scope, content,
constraints, contradictions, missing assets — are expected. Three at most.

## Project direction

_A project direction is a brief executed inside the invariants, never instead of
them._

- **Goal:** an alternate home page for beatthetrade.com that converts more visitors
  into a submitted vehicle (plate/VIN → listing). The funnel endpoint is `/listings/new`.
- **Audience:** MA/NH car owners holding a dealer trade-in offer. They're mid-purchase and suspect it's low.
- **Must not change:** name, logos, green "A" chevron, brand green `#70BF4B`, the
  process and its facts. See BRIEF.md §11 for which claims are cleared.
- **Not this:** luxury/editorial automotive, `auction-editorial`, stock lifestyle photography.
- Repo: https://github.com/Sigovs/BEATTHETRADE.git. Brand assets live in `logos/`.

## Feedback log

- 2026-10-28: the only material is the live site + `logos/` + an FB/IG ad brief
  (https://claude.ai/artifact/UHaoTqQ6jyhCKNXLGMWJU7). Alex rates the ad brief weak:
  take its palette and claim rules, **don't treat its directives as calls to action**.
  Facts not in these sources are not invented.
- 2026-10-28: **no access to the client, ever.** Never list "questions for the client".
  A missing fact is closed by rule: the site's own wording, or omit it (BRIEF.md §11).
- 2026-10-28: proposition fixed by Alex: *competition creates the price, you set the line*.
  The seller is committed once the reserve is met, so never write "you decide at the end" or a blanket "no obligation".
- 2026-10-28, **concept board v1 (A/B/C) REJECTED**: "no car / no emotion" + "looks like a template".
  The idea itself and the amount of data were NOT the problem. Rejected pattern, don't repeat it: a data-only page with
  no car (dashboard as hero), navy + card + bars, a split hero with text left and card right, a safe wide grotesque in caps.
  Next round: the car is the dominant (generated, disclosed as art direction, per GI) and the visual language is specific to this brand.
- 2026-10-28, **v2 "line on the road" REJECTED as incomprehensible**: "did you look at my moods?". RULE: Alex's MOODS/
  are the layout direction. Follow their structure block by block (hero + live-auction panel, one offer vs. a live
  market, how it works, results cards with photos, reserve chart with RESERVE MET, sellers, closing on the road).
  Don't replace their clear components with an invented abstract device. Only filter the facts (no dealer names/logos,
  no invented numbers or reviews, no "You decide"). v3 = https://claude.ai/artifact/3G7RL7EZfD3bTcY2Leofeg (the old 9AR39… link was deleted).
- 2026-10-28: reserve chart = **gauge only**, built as a precision instrument (hairline scale, $100 ticks that light up, thin needle with no overshoot). REJECTED: a "kindergarten" gauge (thick rounded bands, glow, fat triangle needle, springy motion) and the 3D-bars variant.
- 2026-10-28, de-slop pass (kill-ai-slop + anti-ui-slop) — standing copy rules: no kicker eyebrows over headings; no slogan triplets ("Real X. Real Y. Real Z."); no filler subs under headings; no tagline tics ("No cost, no pressure"); one reassurance row per page (under the hero form). Green word-highlight only in the hero and on "Your minimum" (green = money/minimum). No glow halos on cards.
- 2026-10-28, **motion: scroll-SCRUBBED slide-ins REJECTED** ("the worst slide-in"; also too-subtle 28–80px shifts = "nothing moves"). RULE: smooth **triggered** float-up on scroll, never scrub — the Gunther G2 system (PRESTIGE_GUNTHER/prototype/concept-g2/f.js): once per section at top 78%, headings rise word-masked a line at a time (1.5 s, power3.out, .14 s per line), supporting blocks float up 28 px (1.2 s, staggered), GSAP+ScrollTrigger. Hero needs an intro on load (photo settles 1.08→1, bar drops in, headline lines rise, copy + phone float up); the form is never held back. Motion craft must match Czinger / Lambo / Gunther G2 even though this brand is not luxury.
- 2026-10-28: **too much empty space** ("pustije toljko mesta mne nenado"). Section padding is one token `--sec` = clamp(48px, 4.5vw, 64px); never 96px per side between two sections on the same ground.
- 2026-10-28, **index_v2 built** to Alex's V2 brief (`site/index_v2.html` + `styles/index-v2.css` + `js/index-v2.js`, concept in `site/V2-CONCEPT.md`): "plate + ladder". Hero = the license plate as the input; signature = a price ladder from the site's own example auction (only real bid values ever shown). Its brief overrides "follow MOODS block by block" for V2 only. Awaiting Alex's review; `index.html` untouched.
- 2026-10-28, **V2 ladder stage rated 3/10**: an empty chart grid with floor lines, and a giant figure crossing the minimum line (knockout stroke). Rejected pattern: a sparse chart as a signature, and text crossing lines. A precision $100 tape was tried next; Alex then chose to put **the index phone with its widget callout** there instead (sticky beside the chapters, own 4-screen loop, ported with `p-` prefixed classes). Awaiting review; the tape is kept in scratchpad backups only.
- 2026-10-28, V2 market: **text and phone are synced** (chapter 0 plate+minimum, 1 first bids, 2 reserve met, 3 sold); chapters float up as they arrive, the active one is lit. The callout slides in again on every step with a small bounce (never just updates in place). No dashed minimum line in the callout. Subtle uneven iridescent radial glow (green/navy) behind the phone.
- 2026-10-28, V2 market end: the last step (Sold) **pins**, How it works slides up over it as an opaque sheet, and the step's text + phone rise out to 0 opacity (scroll-linked only here, by Alex's request). Sold keeps a quiet looping green light around the phone. No visible caption under the phone.
- 2026-10-28, **V2 hero rebuilt to Alex's own hero mock** (approved by him): headline left with green "bidding war.", one field (state | plate) + orange CTA, assurances with circle icons, sub + big +$1,350 top-right; visual = giant translucent BTT chevron whose silhouette is a window onto a lake/mountains photo, generated unbadged silver SUV in front, light concrete floor. **Type for V2 switched to Inter Tight (display/figures) + Inter (text)** — Alex prefers it over Archivo. Green text = green-deep (#70BF4B fails contrast on paper). Images generated via fal, provenance in explore/btt-v2/assets/gen-hero/PROVENANCE.md.
- 2026-10-28, **hero redo after "you didn't even get the car angle"**: follow Alex's mock 1:1 — the car is cut out of his mock (front 3/4, close, low); the A is huge (≈95% of hero height, centred at 60vw, legs solid #F2F2EF, lake only in the counter down to the terrace line); warm concrete floor; bg #FBFBFB; headline green #0C9C2D; kicker "SELL SMARTER. LOCALLY." kept because his mock has it. Lesson: when Alex hands a mock, sample its colours and measure its geometry before building — never reinterpret.
- 2026-10-28, hero car shadow: a CSS drop-shadow halo was not a shadow ("gde shadow?"). The ground + cast shadow is a layer cropped from the same frame of the mock, placed under the cut-out car at the same scale.
- 2026-10-28, **motion update (Alex, repeated)**: supporting text across the whole page slides in from the side as a staircase (x −64…−80px, 1.2 s power3.out, .1–.14 s per line/block), triggered once — this supersedes the 28px float-up. Headings keep the line-by-line mask rise. Closing chevron photo has a slow scroll-linked parallax (±7%); no "Illustrative image" caption there.
- 2026-10-28, **How it works rebuilt to Alex's mock**: kicker "A simple process", "How it **works**" (green), four steps = big pale numeral + slanted photo card (SVG clipPath) with the product moment in HTML on top (form / minimum slider / bid tags), chevron rule, title, copy, chips. Bid tags use the example auction's real bids (mock's $24,800/$22,200 were invented). Motion: staggered appear per step (number lifts, photo opens, UI pops with a small bounce, rule draws, copy slides); hover: photo zooms, UI lifts, numeral darkens, marker nudges.
- 2026-10-28, reviews: the three site testimonials are cards in a swipeable carousel (native scroll-snap, ←/→ buttons, dots, no autoplay); cards slide in from the side. No invented reviews or ratings.
- 2026-10-28, **hover must be obvious** ("nichego ne proishodit" three times): a 1.06 zoom / 6px lift reads as no hover. How-it-works hover = whole card lifts 10px, photo 1.12, widget lifts 12px with a deeper shadow, numeral darkens, rule turns green, arrow moves 10px. Use `@media (any-hover:hover)`, not `(hover:hover)` (touch laptops with a mouse). Verify with a real pointer hover on the published page.
- 2026-10-28, **preview = GitHub Pages only**: branch `v2-preview` → https://sigovs.github.io/BEATTHETRADE/site/index_v2.html. Never hand out third-party mirrors (githack etc.). Bump the `?v=` cache-bust on the CSS/JS links on every push (Pages caches 10 min), and tell Alex to wait 1–2 min + hard refresh.

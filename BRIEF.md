# BRIEF — Beat The Trade

The concept gate. **No markup exists before this file does (`DNA1`).** An empty
section is an unfinished gate.

Status 2026-10-28: facts from the live site and the client's one-line brief.
Sections 2–8 are a **proposal awaiting Alex's concept approval**, not an approved direction.

Client brief, verbatim: *"I need an improved alternate home page design for high
conversion for this site. Its kind of like you submit here and they send it to a
quick auction of 100+ local dealers."*

---

## 1. Design Read

- **Deliverable / audience / family** — an alternate, conversion-first home page for
  beatthetrade.com. Built for MA/NH owners of everyday cars (Camry, Accord, CR-V,
  RAV4, F-150; often 5–10 years old, high mileage welcome) who are thinking about
  selling or trading in. The sharpest segment already holds a dealer trade-in offer
  and suspects it's low. Family:
  a *live market board for one car*, closer to a consumer fintech product than to a
  dealership site.
- **Mandate** — REDESIGN. Carried through untouched: the name, both logos (stacked +
  wordmark), the green "A" chevron, the palette green `#70BF4B` · orange `#F77B28` ·
  navy `#1C3E69` · white (the ad brief gives the palette, and Alex cleared it), the
  product's process and facts. In scope: layout, hierarchy, the funnel entry, type
  below the logo, colour *roles*, imagery. Michroma is a *site* face, not a logo
  carrier, so it gets re-decided in the render. The ad brief asks for "heavy bold
  uppercase geometric sans", which is in line with the logo.
  **Contrast fact (computed):** white on orange 2.69 and white on green 2.27 both
  fail AA. A button in either colour carries dark ink (ink on orange 6.86, on green
  8.11), or the colour sits on navy as type (green on navy 4.76, orange 4.03 → large
  text only). White on navy 10.81.
- **Dialect** — brief-derived / no stored dialect. One action and density of proof
  outrank restraint. `auction-editorial` is **not** used: it isn't named, and the word
  "auction" doesn't license it (TASTE §2).
- **Dimensionality role** — SUPPORT. One time-based demonstration (the bid ladder)
  reinforces a page that is complete when still. No 3D, no scroll-scrub.

## 2. The concept

**Proposition (fixed, from Alex 2026-10-28): competition creates the price, and you
set the line.** Working headline: *MAKE DEALERS COMPETE FOR YOUR CAR.* The trade-in
is the number they have to beat. The reserve is never shown apart from the competition.
The first screen makes the visitor *feel* the competition before reading about the process.

EXPLORE (three directions, one proposition, different ways of making it felt).
Evidence: `research/competitors.md`, `research/inspiration.md`. Nobody in the category shows
bids, a clock or a line, which is the white space.

```
A · The line to beat — demonstration: form left, one auction's bid stack right; screen 2 is ONE chart
    on one scale (trade-in → your minimum → bids cross → RESERVE MET → +$X). Every figure dated and sourced.
   advantage: explains the business in two seconds; no competitor shows bids; closest to Alex's spec
   risk:      example numbers read as a promise; the hero card slides into "SaaS card"; form and card
              compete as two dominants
B · You start it — participation: the hero IS the form. One oversized plate field + state, then an
    optional "What did the dealer offer you?" that draws YOUR number as the line; real results sit
    against it. Light ground, giant type, almost no chrome
   advantage: highest micro-commitment; owns "beat YOUR number" (everyone else uses averages)
   risk:      needs a prefill handoff to /listings/new; a result shown "against your number" can read
              as a prediction; a plate-styled field can turn cute
C · One afternoon — time: scroll is the 1–5pm clock. Form in the hero, then one pinned run (~2.5vh)
    over a real result: bids stack as the clock advances, the line is crossed, 5:00 → SOLD +$X
   advantage: owns the time-boxed event and "the dealers are on the clock, not you"; each stage
              delivers a new truth
   risk:      the scroll budget delays proof; pinning costs mobile and conversion; heaviest build (GSAP)
```

Superseded draft: *"Your trade-in offer is the opening bid, not the price."*

## 3. The feeling curve (`DNA29`)

| # | Feeling | Caused by |
|---|---|---|
| 1 | "I knew that number was low" (recognition) | Headline aimed at the trade-in offer the visitor already holds |
| 2 | Curiosity → appetite | A real past auction replayed: the bids climb above its trade-in line |
| 3 | Safety | Reserve: nothing sells below your number · only the winner contacts you · free |
| 4 | Belief | Real recent results, the modest ones included (+$300 beside +$2,000) |
| 5 | "Today, actually" | Today's auction window (1–5pm) and the entry field again, with no new idea |

## 4. The peak (`DNA28`)

*"You type in what the dealer offered you, local dealers bid it up that afternoon,
and if they don't beat it you just keep your car."*

## 5. Page grammar (`DNA36`)

**Live surface**: the page reads like a market board, with numbers, time and a
line to beat as its compositional material. There's no lifestyle photography.

**How it differs from the last build:** the recent records (lux-cars, prestige,
gunther werks) are collector/editorial automotive. This one has no hero car, no
atelier register, and type and data instead of photography.

## 6. The signature move (`DNA37`)

**"The line to beat."** Two marks on one scale: the trade-in offer (one dealer's
number, quiet) and **your minimum** (your number, green). Bids arrive and stack above,
each marked with the brand chevron, and the winning gap is labelled `+$X over
trade-in`. One device carries both the appetite (act 2) and the safety (act 3): if
nothing crosses your line, nothing sells. The replayed auction is a **real record**
from the results feed, labelled as such. Until the feed exists, it's the live site's
own Camry example, labelled "Example". It is never a prediction for the visitor's car.
*Convergence noted:* the ad brief's "reserve price" angle (a "Your minimum" line
with bids crossing it) reached the same image independently.

## 7. Shot list (`DNA27`, `DNA50`)

| Act | Shot | Device | Viewport-heights |
|---|---|---|---|
| 1 | Proposition + plate/VIN entry + three risk-removers · the line to beat (replayed real auction) | Entry form is the CTA; ladder plays once, then rests on its final frame | 1.0 |
| 2 | One day on a clock: submit → 1pm live → 5pm results → winner contacts you → paid | Static timeline, product UI fragments (the live site's strongest section, redrawn) | 0.9 |
| 3 | The three fears answered: low bids (reserve) · calls (who sees your details) · payment | Three plain answers, no cards-for-cards | 0.7 |
| 4 | Real recent results, on one base and one fact set (`C23`) | Data list from the feed; empty/loading/error states designed | 0.8 |
| 5 | Close: today's window + the entry field + short FAQ | Same form component as Act 1 | 0.8 |
| — | Footer, with the dealer link de-emphasised | | 0.3 |

Testimonials: **cut** unless the client can verify them (`CP`, `C24`). Recoverable.

## 8. Mobile shot list (`DNA67`, `MJ8`)

The entry field is the first thing below the headline. The ladder shrinks to a
compact strip under it (trade-in → top bid → +$X). After the hero leaves the
viewport, a sticky bottom bar holds the entry and is counted as a mass. Act 2
becomes a vertical clock. Act 4 becomes a single-column list.

## 9. Budget (`DNA38`, `DNA72`, `DM3`)

- Total viewport-heights — ~4.5 desktop / ~6 mobile
- Total payload — < 600 KB (no video, no photography required)
- Largest single asset — logo SVG / web font
- Frame budget — 60fps, transform/opacity only
- LCP target — < 1.8 s (LCP = headline text)

## 10. Assets (`GI3`, `GI6`)

- **Supplied:** `logos/` has the stacked logo (black + green A, PNG 1299×529), the chrome
  wordmark (PNG 2621×390) and the chevron mask (white PNG 308×230). All raster.
- **To derive locally:** the chevron as SVG (simple geometry) and a light-on-dark
  logo. Both are derivatives, flagged until the client supplies vector files.
- **Not used:** the live site's stock lifestyle photography (family leaning out of a car).
- **Car photos:** only from the results feed, as documentary images, if the client
  confirms their provenance. No generated cars.

## 11. Claims ledger (`CP1`)

| Claim | Source | Date | Status |
|---|---|---|---|
| Sellers average $1,350 over trade-in offers | live site hero | 2026-10-28 | **methodology unknown**, held until confirmed |
| 100% free for sellers | live site + FAQ | 2026-10-28 | usable |
| Submission under 10 min / 5–10 min | live site hero / FAQ | 2026-10-28 | usable as "about 10 minutes" |
| "Hundreds of local dealers" (site, ad brief) vs "100+" (client) | live site / ad brief / client email | 2026-10-28 | use **"100+"**, which holds under every source; verified count still asked |
| "$1,350" must always read "average" over trade-in | ad brief | 2026-10 | rule |
| Banned: guaranteed more money/sale · "highest offer" · "instant offer" · "cash for cars" · "we buy any car" · "any condition" · real dealer names/logos | ad brief | 2026-10 | rule. Note the live site's "cash on the spot" sits close to the ban |
| Reserve protects from selling low; it does **not** promise higher bids | ad brief | 2026-10 | rule for copy |
| Areas: Boston, Lowell, Danvers, Nashua and nearby | ad brief + live demo bids | 2026-10 | usable as examples, not a coverage list |
| High mileage welcome (2019 Camry, 147,398 mi example) | ad brief | 2026-10 | needs the result before use |
| MA and NH only | live site badge | 2026-10-28 | usable |
| 4-hour auction, weekdays 1–5pm EST | live site FAQ | 2026-10-28 | usable |
| Reserve: no sale below it, editable, free relist | live site FAQ | 2026-10-28 | usable |
| Paid "cash on the spot" by the winning dealer | live site step 3 | 2026-10-28 | **vague**: method/timing needed |
| Dealer pays $500 flat only if they win | /dealers | 2026-10-28 | usable (supports "free for you") |
| Dealers finish the purchase within 3 days | /dealers | 2026-10-28 | usable |
| Recent results (Silverado +$2,000, Accord +$1,900, Tacoma +$300) | live site | 2026-10-28 | real, but should come from the feed, dated |
| 10 testimonials with $ figures | live site | 2026-10-28 | **unverified**, not used |

### Verified on the site 2026-10-28 (/terms, /faq, /how-it-works, /dealers, /auctions/*)

| Fact | Source (verbatim, abridged) | Consequence for the page |
|---|---|---|
| **Once the reserve is met, the seller is committed** | /terms: Seller "shall make reasonable efforts to complete the sale … if there is a winning bid"; /dealers FAQ: seller "agreed in advance to sell the vehicle at that price or higher"; /faq: a live auction can't be cancelled | Never "You decide at the end". The decision is **the minimum, set up front**. Copy: "Below your minimum, it doesn't sell" ✓; "No obligation" ✗ (only "no obligation below your minimum") |
| Reserve editable during the live auction; visible only to the seller; BTT checks it against the wholesale range | home FAQ | "Your number, private, adjustable" |
| **Contacts: public listing shows first name + initial and town only** ("Seller: Shane W.", "Charlton, MA"); bids show the dealer's *town*, not its name; after the auction "we connect you directly with the winning dealer" | /auctions/2017-honda-accord-ex-l, /faq, /how-it-works | Structure says only the winner gets in touch, but **no page states it explicitly**. Use the site's own sentence "We connect you with the winning dealer"; "only the winner contacts you" waits on the client |
| **The public never sees bid amounts**, only "+$ from bidding"; only verified dealers and the seller see the full figures | /faq | The public page can't show a dollar bid ladder from real auctions. Real replays use **deltas** (Accord: Baseline → +$100 Londonderry NH → +$200 Derry NH → +$300 → +$1,900 Merrimack NH, 5 bids). Dollar ladders only as a labelled **Example** (the site's own Camry) |
| **"+$X from bidding" = increase since the first bid**, not over trade-in | auction page: "Increase since first bid" | Results are labelled "+$X from bidding", never "over trade-in". "+$X over trade-in" exists only in testimonials and the $1,350 average |
| Payment: per listing, e.g. "ACH, Bank Check, Certified Check, Cash"; the dealer handles payment and paperwork; pickup only after payment | auction page, /faq, /dealers | Answers "how do I get paid". "Cash on the spot" isn't needed |
| Bids in the last 60 s extend the clock by 60 s (the Accord closed 5:14 PM) | /faq, auction page | Real anti-sniping detail for direction C |
| If the winner fails to complete: BTT goes to the next-highest bidder, or you relist | /faq | A reassurance line |
| Vehicles built after 1992; listing needs only an email (magic link) | /faq | |
| Results feed is public: of the 10 latest, 4 sold, 6 "Left the Lane" (e.g. F-250 Lariat 23 bids +$5,750) | /auctions/results | A live results tape shows unsold cars too, so the client decides whether to show only sold ones |
| A seller dashboard has a "dealer market graph next to the bids … against the market and my reserve" | home testimonial (Priya S.) | **The product already draws the line idea, so ask for screenshots of the real seller UI** |

### No client access: every open fact is closed by rule (Alex, 2026-10-28)

The client can't be asked anything. **Rule: the page says only what the live site or the
client's own brief publicly states. Where a fact is missing, the site's own wording is used,
or the line is omitted.** Nothing is "pending the client".

| Open fact | Closed as |
|---|---|
| Who sees the seller's contacts | Site wording only: "We connect you directly with the winning dealer." Plus the verifiable "Your listing shows your first name and town." **Not used:** "only the winner contacts you", "no spam" |
| Dealer count | **"100+ local dealers"**: the client's own brief; the site's "hundreds" entails it |
| $1,350 | Used, always with "average", attributed as BTT's figure (footnote). Methodology isn't stated, and we don't invent one |
| Testimonials | Client-published on the live site, not independently verified. **At most one**, quoted verbatim with the name as published, choosing one that names no competitor. The page must stand without it |
| Real product UI | No dashboard screenshots. The seller UI is **redrawn as an "Example"** from the site's own 3-step mock (2023 Camry SE numbers) |
| Real auctions | Public deltas only (e.g. the Accord's bid history). Dollar ladders only as an "Example" |
| Unsold results | The results tape shows reserve-met results with dates, titled "Recent results", never "all" or "latest auctions". It's the same selection the live home page makes |
| Car photography | No supplied photography. Documentary photos only from the public results listings; anything else is disclosed art direction or no photo |

Remaining unknowns, not to be claimed: the methodology behind the average · payout timing beyond "pickup only
after payment" · whether the seller's phone is ever shown ·
are the site testimonials verifiable, and may a quote name a competitor (CarMax)? · how $1,350 is calculated ·
do losing dealers ever see the seller's contact details · payout method and timing ·
is there a results/auctions data feed · A/B variant inside their stack, or a free
concept · mobile share and the funnel drop-off point.

## 12. Reference (`DNA3`)

There's no storyboard. The live site's strongest section, the 3-step product-UI mockups,
sets the bar for craft. Its ideas are redrawn; its components aren't reused. Production
stack observed: Rails asset pipeline + Tailwind (`application-tw-*.css`), Inter + Michroma.

## 13. Moodboard scan (DNA100) — `MOODS/`, 2026-10-28

Four images from Alex: one hi-fi generated home-page mock (white, green display, dealer logos, Camry render) and three
Midjourney boards (cream/navy bands, top-down cars with dealer nodes, line charts, faces).

**Signals (3):** ① *one car, many dealers converging* (in all four) ② *a minimum line with bids rising past it, winner highlighted*
③ *live countdown + stacked bid cards*. → Thesis is consistent with A/C: bids converge on one car and rise past your line.

**Taken:** ① became the "One car. Dealers from three towns." band in A. It's drawn on real geography from the public
Accord bid history (Charlton, MA ← Merrimack / Londonderry / Derry, NH, 56–61 mi), with **towns only**.
② is already the signature ("the line to beat"). ③ is already in A and C, using the real schedule instead of a fake timer.

**Not taken, and why:** real dealer-group names/logos (Herb Chambers, McGovern, Quirk…): banned by the ad brief, and the site
hides dealer identities · results cards "trade-in $15,200 → BTT $18,600": invented, and the public data has no trade-in figures ·
star-rated testimonials with stock faces: unverifiable · "You decide / walk away": false once the reserve is met (Terms) ·
cream ground: an AI-default look · luxury SUVs: the ad brief says everyday cars · a ticking countdown on a non-existent auction.

Board: `explore/btt-2026-10-28/` → https://claude.ai/artifact/E14BLcfrE1tDJ1HFwa9e6y

### 13b. Three more moods (`eb077eb2…`, `d6570fd2…`, `055491b1…`): generated renders of Alex's own page spec

They show what v1 lacked: **a cinematic car as the dominant**. Dusk and golden hour, wet asphalt, light on paint, the car
large behind the headline (scene, not cut-out), the auction UI as a device/panel beside it, and car photography on
results, reserve and closing. Same structure as Alex's pasted spec.
**Taken:** the photographic register (dusk light, scene-led hero, car as subject), a product-UI device beside the car, and car imagery
carrying the reserve and closing sections. **Not taken:** dealer names/logos (Herb Chambers, McGovern, Quirk, Tulley, BMW of Nashua),
invented figures ($28,000 vs $32,750; "4.9 from 1,200+ reviews"; results with trade-ins), stock-face testimonials, the
ZIP field (the real flow asks plate/VIN + state), "You decide", "No obligation", luxury cars (X5 / Range Rover). The audience
drives Camrys, Accords, RAV4s and F-150s, so the emotion has to come from **light**, not from the price of the car.

## 14. v2 (2026-10-28): BUILD, one direction, after v1 was rejected (no car / template look)

`explore/btt-v2/` → https://claude.ai/artifact/Cedvb3EFoXrdWbVBgLmDcX. The idea is unchanged. Signature: **"the line on the road"**,
the auction scale drawn across the wet asphalt in front of the car, with bids travelling along it past the minimum. Route: hero scene
(form + road line) → "the market shows you" + 4 steps → reserve (R1 taillights) → real results → closing (C1 coastal road) + CTA.
Display face Saira (rounded-square geometry like the logo). Imagery: generated and disclosed (`explore/btt-v2/assets/src/PROVENANCE.md`).
Accepted compromise: at 1024×768 the car's rear is cropped at the right edge (4:3 can't hold copy + whole car).

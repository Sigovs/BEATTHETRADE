# Beat The Trade

<!-- impeccable:product-schema 1 -->

Product record for the alternate home page project. Facts come from the live site
(beatthetrade.com, read 2026-10-28: home, /faq, /terms, /how-it-works, /dealers,
/auctions/*) and the client's one-line brief. There is no access to the client:
a fact not stated by one of those sources is left out, not guessed. Full ledger:
[BRIEF.md §11](BRIEF.md).

## Platform

web

## Users

- **Sellers (primary):** owners of everyday cars registered in Massachusetts or New
  Hampshire, built after 1992. The sharpest segment is mid-purchase, already holding a
  dealer trade-in offer and suspecting it is low.
- **Dealers (secondary):** verified, licensed local dealers who buy inventory directly
  from sellers. They have their own page (/dealers) and are not the home page's audience.

## Product Purpose

A seller lists a car once (license plate or VIN, then a few details; 5–10 minutes),
and local dealers bid on it in a live online auction. The seller sets a private
minimum (reserve) up front; the highest bid at or above it wins. Success for the
home page is a submitted vehicle: plate/VIN entered, which hands off to
`/listings/new`.

## Positioning

Competition creates the price, and the seller sets the line. A trade-in is one
dealer's number; Beat The Trade puts 100+ local dealers on the same car at the same
time. Nobody in the category shows bids, a clock or a reserve line (see
[research/competitors.md](research/competitors.md)).

## Operating Context

- Auctions run weekdays, 1:00–5:00 PM ET, 4 hours. A bid in the last 60 seconds adds 60 seconds.
- The public listing shows the seller's first name, last initial and town; bids show the
  dealer's town, not its name. The public sees "+$ from bidding" (rise since the first
  bid), not bid amounts.
- After the auction: "We connect you directly with the winning dealer." The dealer pays
  (methods per listing, e.g. ACH, bank check, certified check, cash), handles the
  paperwork, and picks the car up only after payment. Dealers finish the purchase within 3 days.
- If the winner fails to complete, the car goes to the next-highest bidder, or the seller relists.

## Capabilities and Constraints

- **Cost:** free for sellers. A dealer pays a $500 flat fee, only when it wins.
- **Reserve:** visible only to the seller, editable during the live auction, checked by
  BTT against the wholesale range. Below it the car does not sell; relisting is free.
- **Commitment:** once the reserve is met, the seller is committed to sell (/terms), and a
  live auction cannot be cancelled. Never write "you decide at the end" or a blanket
  "no obligation".
- **Coverage:** MA and NH only.
- **Unknown, never claimed:** how the $1,350 average is calculated; payout timing beyond
  "pickup only after payment"; whether losing dealers ever see seller contacts; a verified
  dealer count beyond "100+".
- **Banned claims:** guaranteed more money or sale, "highest offer", "instant offer",
  "cash for cars", "we buy any car", "any condition", real dealer names or logos.

## Brand Commitments

- Name Beat The Trade (BTT), the wordmark and stacked logos, and the green "A" chevron
  ([logos/](logos/)). Brand green `#70BF4B`, with orange `#F77B28`, navy `#1C3E69` and white.
- "$1,350" always reads as an **average** over trade-in offers and is attributed to BTT.
- Dealer count is written "100+ local dealers" (the client's brief; the site's "hundreds" entails it).
- "+$X from bidding" for public results; "+$X over trade-in" only in testimonials and the average.

## Evidence on Hand

- Live site copy, FAQ, terms and the process described above.
- The site's example auction: 2023 Toyota Camry SE, trade-in $20,700, bids rising to
  $23,800 (16 bids), shown only as a labelled **Example**.
- Public results with sellers' photos (plates blurred): 2019 F-250 Lariat +$5,750,
  2024 Silverado 2500HD +$2,000, 2017 Accord EX-L +$1,900, 2011 Tacoma +$300
  ([explore/btt-v3/assets/listings/SOURCE.md](explore/btt-v3/assets/listings/SOURCE.md)).
- Testimonials as published on the live site, quoted verbatim, not independently verified.
- **Absent, never to be fabricated:** product photography, real seller-dashboard
  screenshots, dealer names, review scores, press. Scene images are generated
  illustrations, disclosed on the page.

## Product Principles

1. The seller's one decision is the minimum, made up front; everything else is the market's job.
2. Show the competition, don't describe it: bids, clock and the reserve line.
3. Every number has a source on the live site, or it is not on the page.
4. One action: get the plate or VIN in.

## Accessibility & Inclusion

WCAG 2.2 AA. White on brand green (2.27) and white on orange (2.69) fail, so buttons in
those colours carry dark ink. Every animation has a prefers-reduced-motion state, and
auto-playing demonstrations can be paused (2.2.2).

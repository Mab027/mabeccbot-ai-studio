# MabeccBot AI Studio — website (Phase 1 draft)

Static site. No build step, no dependencies, no backend, no database.
Designed for free Cloudflare Pages hosting.

## Files

```
mabeccbot-site/
├── index.html          Home
├── services.html       Services
├── pricing.html        Pricing
├── book.html           Book a demo (Cal.com placeholder)
├── about.html          About
├── contact.html        Contact (mailto form)
├── privacy.html        Privacy Policy  (draft — noindex)
├── terms.html          Terms of Service (draft — noindex)
├── refunds.html        Refund Policy   (draft — noindex)
├── 404.html            Not found
├── robots.txt          Crawler rules
├── _headers            Cloudflare Pages security headers
├── README.md           This file
└── assets/
    ├── css/styles.css  All styling (~430 lines)
    └── js/main.js      Nav toggle, year, mailto form
```

## How to preview on an iPhone before deployment

**Option A — local preview from this server (no internet needed):**

```bash
cd ~/.hermes/assets/mabeccbot-site && python3 -m http.server 8080
```

This binds to the server, not your phone — see Option B for a phone-friendly route.

**Option B — zero-deploy preview via Cloudflare Pages (recommended):**
1. Sign in to dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Drag the *contents* of `mabeccbot-site/` (not the folder itself) into the uploader
3. Cloudflare returns a `*.pages.dev` URL — open it on your iPhone

Nothing is published to a custom domain and nothing costs money. You can delete the
project from the dashboard at any time.

**Option C — ask me to serve it:** I can start a local HTTP server on this box, but this
tenant has no public inbound port, so your phone cannot reach it. Deployment to
`*.pages.dev` is the only route that works from a phone.

## Placeholders — everything you need to supply

| Where | What | Status |
|---|---|---|
| `book.html` | Cal.com link (`YOUR-CAL-LINK` in the commented snippet) | placeholder |
| `pricing.html` | Payment provider checkout (Paystack/Flutterwave) | placeholder |
| `privacy.html` | Registered entity, address, country, log retention, analytics choice, keep-durations, statutory response window | `[TO SUPPLY]` |
| `terms.html` | Registered name, address, jurisdiction, dispute venue, portfolio-rights decision, liability confirmation | `[TO SUPPLY]` |
| `refunds.html` | Cancellation notice period, response windows, refund turnaround, jurisdiction | `[TO SUPPLY]` |
| `about.html` | Business registration details (optional) | `[TO SUPPLY]` |
| `robots.txt` | Replace `SITE-URL` in the sitemap line once deployed | placeholder |
| all pages | No analytics installed — add consciously, then update Privacy Policy | none |

Every placeholder is highlighted in amber on the page itself so you cannot miss one.

## What is deliberately NOT claimed

- No "unlimited" anything.
- No guaranteed views, growth, sales or monetisation.
- No invented company registration, address or legal jurisdiction.
- No payment credentials, API keys or secrets anywhere in these files.
- No fake testimonials, client logos or case studies.

## Checks run

- Every internal link resolves to a file that exists (validated by script).
- All 9 pages parse as valid HTML (Python `html.parser`, tag-balance checked).
- No inline secrets; no external scripts; no third-party trackers.
- Mobile-first CSS; nav collapses below 900px.
- No web fonts — system font stack only, so no external requests and no layout shift.

## Accessibility

Semantic landmarks, skip link, visible focus rings, `aria-expanded` on the nav toggle,
`aria-current` on the active nav item, labelled form fields, sufficient contrast on the
dark theme.

## Next phase (not done)

1. Connect Cal.com and replace the booking placeholder.
2. Connect Paystack/Flutterwave and replace the payment placeholder.
3. Fill in the `[TO SUPPLY]` legal details.
4. Deploy to `*.pages.dev` and test on a real phone.
5. Optional: buy a domain, add Cloudflare Web Analytics, submit sitemap.

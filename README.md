# Champion Boxing Gym website

Static website built for GitHub Pages and the custom domain `championboxinggym.net`.

## Pages
- `index.html` — home
- `memberships.html` — pricing + Stripe checkout links
- `about.html` — gym history and community mission
- `faq.html` — FAQ accordion
- `contact.html` — contact + map
- `privacy.html` — simple privacy policy

## Stripe links currently wired into the site
- Youth / Adult 1-year membership — $25/week: `https://buy.stripe.com/7sY6oJ9TG26JeGraEu48005`
- 6-month group membership — $35/week: `https://buy.stripe.com/bJe7sN9TGfXz55R3c248006`
- 6 months paid in full — $500: `https://buy.stripe.com/3cIaEZ7LyeTvaqbaEu48007`
- Personal training membership — $250/month: `https://buy.stripe.com/eVqdRbc1O9zb1TF9Aq48004`
- One-on-one session — $50: `https://buy.stripe.com/4gMfZj1na3aNcyjbIy48008`
- Drop-in — $25: `https://buy.stripe.com/bJecN7d5Sh1D2XJcMC48009`

## IMPORTANT: $30 registration fee before launch
The website correctly states that new recurring weekly/monthly memberships carry a one-time $30 registration fee, while the $500 paid-in-full option does not.

The Stripe checkout screenshots supplied during development showed the recurring links charging only their base recurring price. Before publishing the site, configure Stripe so the applicable recurring checkout flows also collect the one-time $30 registration fee. If you replace any Payment Link URLs while doing that, update the corresponding `data-url` value in `memberships.html`.

Do **not** place Stripe secret keys in this repository. This site uses hosted Stripe checkout links only.

## Contact form
Because GitHub Pages is static and no email destination was supplied, the contact form creates a pre-filled SMS to 833-382-1408 on supported devices. If you later want inquiries saved to a CRM/email inbox, connect a form service or your existing CRM endpoint.

## Reviews
The site embeds the existing public review widget used by the current Champion Boxing Gym website.

## GitHub Pages
1. Create or open the GitHub repository.
2. Upload the contents of this folder so `index.html` is at the repository root.
3. Go to **Settings → Pages** and deploy from `main` / root.
4. Set the custom domain to `championboxinggym.net`.
5. Update DNS at the domain registrar to point to GitHub Pages.
6. Turn on **Enforce HTTPS** after DNS is verified.


## August 10, 2026 homepage/page-header revision
- Simplified homepage by removing the Welcome/Train With Purpose, Why Champion/Built Different, and Gym in Action/Champion Culture sections.
- Moved Training Options directly beneath the 2025 award banner and renamed the section heading from “Find Your Corner” to “Training Options.”
- Changed homepage hero slogan to “Hard Work, Dedication.”
- Replaced the homepage hero image with a Champion Boxing Gym team photo.
- Removed the large hero/header blocks from Memberships, About Us, and Contact pages.

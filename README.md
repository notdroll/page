# droll.page — minimal site starter

This is a tiny, fast static site. No build tools needed.

## Structure
- `/index.html` — home
- `/papers/index.html` — list of papers
- `/papers/your-paper-slug/index.html` — your first paper page
- `/assets/css/main.css` — styles
- `/robots.txt`, `/sitemap.xml`, `/_redirects`

## How to publish (Netlify)
1. Create a new GitHub repo and push these files.
2. On Netlify, **New site from Git** → pick your repo → Build command: _none_ → Publish directory: `/` (root).
3. After deploy, add **Custom domain**: `droll.page`.
4. In your DNS (Cloudflare or your registrar), add:
   - `CNAME` for `www` → your Netlify subdomain (e.g., `your-site.netlify.app`)
   - `A/ANAME/ALIAS` (or CNAME flattening) for apex `droll.page` → use Netlify DNS or your DNS provider’s ALIAS to the same subdomain.
   - Or simply use **Netlify DNS** to avoid ALIAS details.
5. Set **primary domain** to `droll.page`. Netlify will provision HTTPS.

## How to publish (GitHub Pages)
- Put the site on `main`, enable Pages (root), and point `droll.page` via:
  - `A` to GitHub Pages IPs (documented) for apex,
  - `CNAME` `www` → `<username>.github.io`.
  - Add a `CNAME` file with `droll.page`.

## Add your paper
- Replace the placeholder content in `/papers/your-paper-slug/index.html`.
- Put your PDF as `/papers/your-paper-slug/Your-Paper.pdf` (or rename the link).
- Add the paper to `/papers/index.html` list (title + date).

## Branding tweaks
- Change the site “brand” text in headers to your preference.
- Update meta titles/descriptions for each page.

## Redirect old domain
If you want `rollingher.com` to redirect to `droll.page`, deploy a tiny site there with a `_redirects` file:
```
https://rollingher.com/*  https://droll.page/:splat  301!
http://rollingher.com/*   https://droll.page/:splat  301!
```

## Email (daniel@rollingher.com)
Set up MX/SPF/DKIM/DMARC with your mail provider. Keep web DNS proxied and mail DNS unproxied.

## Privacy
- WHOIS privacy on.
- Strip EXIF from images before posting.
- Keep PDFs’ document properties minimal.

Enjoy.

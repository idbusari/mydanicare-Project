# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production (also auto-generates sitemap)
npm run lint         # Run ESLint
npm start            # Run production build locally
```

There are no automated tests in this project.

## Architecture Overview

**Next.js 15 App Router** site for DaniCare, a psychiatry/telehealth practice. All routing lives under `app/`. The project uses React 19.

### Layout Composition

The root layout (`app/layout.js`) is a Server Component that wraps every page:

```
HeaderTop → SocialMediaSidebar → Header
→ ClientLayout (client boundary)
    ├── ADHDPopup (global popup, on every page)
    └── {children}
→ Footer → FooterETop → SocialMediaRow → FooterBottom
```

`app/ClientLayout.js` owns the client boundary — it initialises AOS animations and imports Bootstrap JS. Any component that needs `"use client"` or browser APIs belongs here or beneath it.

### Page Structure

Each route directory (e.g. `app/become-a-patient/`) renders a page component imported from the matching folder in `components/` (e.g. `components/BecomePatient/`). The `app/` page file is thin; logic and markup live in the component directory.

### API Routes

All API routes (`app/api/*/route.js`) follow the same pattern:
1. Parse JSON body, validate required fields
2. Build an HTML email string
3. Send via Nodemailer using SMTP credentials from environment variables
4. Return JSON `{ message }` with appropriate HTTP status

Routes: `register`, `contact`, `adhd-waitlist`, `referral`, `partner`, `imm`.

### Styling

SASS + CSS Modules + Bootstrap 5. Component styles are co-located with their `.jsx` (e.g. `Header.jsx` + `Header.scss`). Global design tokens live in `app/globals.css`:

- Fonts: `--font-outfit` (headings), `--font-dm-sans` (body)
- Brand colors: `--yel` `#ffcc00`, `--ornge` `#e66926`, `--blck` `#333132`, `--warmblue` `#5e6883`
- Primary CTA class: `.btn-yellow`

### Path Aliases

Configured in `jsconfig.json`:
- `@/components/*` → `components/*`
- `@/lib/*` → `lib/*`

### Blog Content

Posts are hardcoded in `lib/posts.js` as a JS array (not a CMS or filesystem). Each post has `id` (used as slug), HTML `content`, and an `seo` object. The dynamic route `/blog/[slug]/` uses `generateStaticParams()` for static pre-rendering.

### URL Redirects

Defined in `next.config.ts`:
- `/adhd-waitlist` → `/adhd-get-started` (permanent)
- `/get-started` → `/adhd-get-started` (permanent)

### Analytics

`app/analytics.js` exports `trackEvent()` and `trackPageView()`. GTM (GTM-PN7M6L9W) is injected via `<Script>` in the root layout. Import these helpers in client components to fire events.

### Environment Variables

Required in `.env.local` for email sending:
```
SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
RECIPIENT_EMAIL, SMTP_FROM, NAME
```

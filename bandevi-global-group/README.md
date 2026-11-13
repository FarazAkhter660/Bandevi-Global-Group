# Bandevi Global Group — React Website

A responsive, multi-page frontend starter built with React, Vite, React Router, CSS and Lucide icons.

## Pages included
- Home — hero, trust indicators, services, industries, selected projects, company values and CTA.
- Services — website/app development, CRM/ERP, travel technology, AI automation, integrations and delivery process.
- Industries — eight industry solution categories.
- Our Work — project showcase cards.
- About — company introduction and company-information placeholders.
- Contact — contact details and enquiry form UI.
- Privacy Policy and Terms & Conditions — clearly marked legal placeholders.

## Reusable components
`Navbar`, `Footer`, `Logo`, `SectionHeading`, `ContactForm`, and `WhatsAppButton`.

## Assets
- `public/logo.svg`, `public/logo.png`, `public/favicon.svg`
- `public/images/` includes custom SVG illustrations for the hero dashboard, Trip Sarathi, CRM, MaximTrip and office/team.
- `src/assets/` retains the original illustration source files.

## Run locally
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Build for deployment
```bash
npm run build
npm run preview
```
The production build is output to `dist/`.

## Important before publishing
1. The BG monogram is a proposed logo concept, not confirmed official brand artwork. Replace it if the company has an approved logo.
2. All project and dashboard graphics are illustrative SVG concepts, not proof of delivered client projects. Replace them with company-approved screenshots and case studies.
3. Verify company statistics, team experience, website counts, phone numbers, email addresses, address and market coverage with authorised company sources.
4. The contact form currently prepares an email using `mailto:`. It does not save enquiries to a database or CRM. A backend/API or approved form provider is required for direct submission.
5. Privacy Policy and Terms & Conditions pages are placeholders and must be replaced with company-approved legal text.
6. Social media links currently point to platform homepages; replace them with the company's official profile URLs.
7. Configure SPA fallback routing with your hosting provider so direct visits to routes such as `/services` and `/contact` return `index.html`.

## Deployment
Build the site using `npm run build`, then deploy the generated `dist/` folder to your approved hosting environment. Keep the existing website live until the new site has been reviewed and approved.

## Brand and design reference files
- `public/brand/logo-dark.svg` — dark-text horizontal logo concept.
- `public/brand/logo-white.svg` — white-text horizontal logo concept for dark backgrounds.
- `public/brand/logo-mark.svg` — BG monogram mark.
- `design-reference/` — generated visual design concepts for comparison while implementing the site. These are references only, not page-ready responsive assets.

# Bandevi Global Group — Website

A responsive company website built with **React 18, Vite 6, React Router and Lucide Icons**.

## Pages
- Home
- Services
- Industries
- Our Work
- About
- Contact
- Privacy Policy
- Terms & Conditions

## Features
- Responsive navigation and page layouts
- Reusable React components
- Premium visual system with reduced-motion support
- Custom SVG illustrations and brand assets
- Contact links and WhatsApp contact shortcut
- SEO and social-sharing metadata
- Client-side routing with scroll-to-top behaviour

## Local development

**Requirements:** Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL provided by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in the `dist` directory.

## Before publishing

- Verify company details, contact information, statistics and service claims.
- Replace illustrative project visuals with approved screenshots and case studies.
- Add official social profile URLs when confirmed by the company.
- Connect the contact form to an approved backend or form service if enquiries must be stored. The current form opens a pre-filled email draft and does not submit to a server.
- Have the Privacy Policy and Terms & Conditions reviewed and approved by the company.
- Confirm Vercel project root is set to `bandevi-global-group`, because the app is nested in that folder.

## Deployment

Connect the repository to Vercel and deploy the `bandevi-global-group` project directory. Preview deployments should be reviewed before promoting changes to production.

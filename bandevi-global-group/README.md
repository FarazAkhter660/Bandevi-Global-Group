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

## AI Project Advisor

The site includes a floating AI assistant for visitors to explore Bandevi services and clarify project requirements. It calls a Vercel serverless function at `/api/ai-assistant`, which uses the OpenAI Responses API. The API key is never sent to the browser.

Before the assistant can answer on a deployed site, add these environment variables in the Vercel project settings (Production and Preview as needed):

- `OPENAI_API_KEY` — a server-side OpenAI API key. Never add this to a `VITE_` variable or commit it to Git.
- `OPENAI_MODEL` — optional; defaults to `gpt-6-astra`.

Redeploy after setting environment variables. Without `OPENAI_API_KEY`, the widget displays a friendly setup message and the rest of the website continues to work.

## Deployment

Connect the repository to Vercel and deploy the `bandevi-global-group` project directory. Preview deployments should be reviewed before promoting changes to production.

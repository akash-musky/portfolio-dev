# Akash Kumar — Portfolio

A responsive backend engineering portfolio built with Next.js, React, and TypeScript. Career content reflects the
supplied résumé and subsequent title and metric corrections, including Fleetx, Celigo, Optum, and the SmartForms
hackathon win.

## Run locally

```sh
npm install --legacy-peer-deps --package-lock=false
npm run dev
```

Open http://localhost:3000. The legacy project includes a Yarn v1 lockfile; the npm command leaves that lockfile
unchanged. The existing dependency tree still needs a separate modernization pass.

## Production

```sh
npx tsc --noEmit
npm run build -- --no-lint
npm start
```

The homepage is statically generated. It does not fetch GitHub data or load external fonts, icon services, or animation
libraries. The original standalone deployment configuration is retained.

## Update content

- `content/profile.ts`: site metadata, work stories, career history, personal projects, and skills.
- `components/Portfolio.tsx`: page layout, architecture illustration, workflow illustrations, and interactions.
- `styles/portfolio.css`: theme tokens, locally hosted fonts, responsive layouts, print styles, and reduced-motion
  support.
- `components/SEO.tsx`: metadata and Person structured data.
- `public/social-preview.svg` and `public/social-preview.png`: editable source and rendered social sharing image.

Set `profile.url` to the production domain if hosting changes. It controls canonical and social sharing URLs.

Personal contact details, profile links, education details, and downloadable résumés are intentionally excluded from the
public site.

## Features

- Dark graphite and lime visual identity. Every fresh page load starts in dark mode; visitors can switch to light mode
  for the current visit.
- Interactive systems diagram with backend, integration, and applied-AI modes.
- Locally bundled Space Grotesk and DM Sans variable fonts; licenses are included in `public/fonts/`.
- Mobile navigation, section links, keyboard controls, and skip link.
- Expandable company experience entries and four professional case studies covering SmartForms, document signing, API
  performance, and financial APIs, with ownership and outcomes visible up front.
- Custom CSS/SVG visuals; workflow concepts are labeled rather than presented as product screenshots.
- Fluid 16–18px body typography, responsive layouts, subtle section animations, reduced-motion support, and print
  styling.

Legacy template components and `portfolio.ts` remain for reference. The active homepage uses `content/profile.ts`; it
does not render the old template containers or load Bootstrap/Argon styles.

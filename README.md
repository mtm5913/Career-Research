# Career Research — Megan McNeal

A research-focused VitePress site comparing Deltek UX research, Provectus FDE, and Anthropic AI product engineering. Supporting coursework is secondary to employer evidence and learning decisions.

Structure inspired by [the instructor's AI Career Atlas](https://github.com/kaw393939/ai-career-research): role profiles, employer explorer, source ledger, and learning roadmap. The instructor's job dataset and site assets are not copied.

## Run locally

Node 22+ and pnpm 11.25.0:

```sh
pnpm install
pnpm dev
pnpm build
pnpm check
pnpm preview
```

## GitHub Pages

Repository name: `Career-Research`. In Settings → Pages select **GitHub Actions**. The workflow deploys the static build on pushes to main. Base path is `/Career-Research/`; set `SITE_BASE=/` for a root-domain build.

## Content and privacy

Only public professional summaries belong in `docs/`. The full private career research record and participant transcripts are deliberately excluded. Supporting case studies disclose AI help, group attribution, and untested proposals. IS373 group-system contribution, public Olive demo, résumé, and LinkedIn are pending rather than invented. This is a career-research site, not the final checked portfolio.

VitePress hosts this static portfolio, not the FastAPI application. Olive needs its own server.

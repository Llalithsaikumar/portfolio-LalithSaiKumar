# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout note

The actual Next.js project is the **`portfolio-LalithSaiKumar/`** subdirectory (it holds `package.json`, `.git`, and `src/`). Run all commands from inside that directory, not from the outer `portfolio/` folder.

## Commands

```bash
npm install --legacy-peer-deps   # install (peer-dep conflicts require the flag; React 19 + libs)
npm run dev                      # dev server with Turbopack
npm run build                    # production build
npm start                        # serve production build
npm run lint                     # ESLint (next/core-web-vitals + next/typescript)
```

There is no test runner configured in this project.

## Environment

Blog features require a `.env.local`:

```env
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

Without valid credentials, `getPublishedPosts()` throws and the app falls back to hardcoded mock posts (see below) — the build still succeeds.

## Architecture

Next.js 15 App Router (RSC), React 19, TypeScript (strict), Tailwind CSS 4, shadcn/ui (new-york style), Motion for animation. Path alias `@/*` → `src/*`.

Content comes from two independent sources:

- **Projects — static, code-defined.** `src/utilities/data.ts` exports `projectsData: ProjectItem[]`. This array is the single source of truth for the projects grid and detail pages. `/projects/[slug]` uses `generateStaticParams()` over this array and looks up by `slug`. To add/edit a project, edit `data.ts` (images live under `public/assets/thumbnails/...`; remote images must have their host whitelisted in `next.config.ts` `images.domains`).

- **Blog — dynamic, Notion-backed.** `src/lib/notion.ts` is the entire blog data layer. Key detail: it queries via the Notion **data sources API**, not the legacy databases-query API — it first calls `databases.retrieve()` to resolve `data_sources[0].id`, then `dataSources.query(...)`. Notion page `properties` expected: `Title`, `Slug`, `Excerpt`, `Published` (checkbox filter), `Date`, `Category`. `getPostContent()` fetches block children (paginated) and `renderBlocks()`/`renderBlock()` convert them to an **HTML string with Tailwind classes baked in**, injected via `dangerouslySetInnerHTML` in the blog detail component. Supported block types are limited (paragraph, headings 1–3, lists, quote, code, image) — unsupported blocks render as empty. On any Notion error, functions log and return mock data / fallback HTML rather than throwing, so `mock-*` ids are handled specially in `getPostContent()`.

Blog routes use ISR: `export const revalidate = 60`. `getPostBySlug` and the routing both re-slugify with the internal `slugify()` helper, so slug comparison is normalization-tolerant.

### Route → component pattern

`src/app/*/page.tsx` files are thin server components: they fetch data (Notion or `projectsData`), set `metadata`/`generateMetadata`, and delegate rendering to a client/presentational component in `src/components/<feature>/`. Feature folders: `home/`, `projects/`, `blog/`, `contact/`, `root/` (navbar, footer, theme toggle). `src/components/ui/` is generated shadcn/ui primitives — prefer composing these over hand-rolling; `cn()` from `src/lib/utils.ts` merges class names.

Root layout (`src/app/layout.tsx`) wraps every page with `Navbar`, `Footer`, and the Sonner `Toaster`, and wires Geist fonts via CSS variables. Design tokens and theme (dark/light via `next-themes`) live in `src/app/globals.css`.

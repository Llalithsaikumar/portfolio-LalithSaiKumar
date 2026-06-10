# Lalith Sai Kumar — Portfolio

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS 4**, and **Motion** (Framer Motion). Features smooth animations, dark/light theme toggle, SEO-optimized pages, and a Notion-powered blog.

## ✨ Features

- **Home** — Hero section, work experience, featured projects, and skills overview
- **Projects** — Detailed project pages with tech stacks, screenshots, and live/GitHub links
- **Blog** — Notion-connected blog with search, category filtering, and dynamic SEO metadata
- **Contact** — Contact form and embedded Google Maps
- **Responsive** — Fully responsive across all screen sizes
- **Dark/Light Mode** — Seamless theme toggle with system preference detection
- **Smooth Transitions** — Butter-smooth page transitions and micro-animations

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion (Framer Motion)](https://motion.dev/)
- [shadcn/ui](https://ui.shadcn.com/) components
- [Notion SDK](https://github.com/makenotion/notion-sdk-js) for blog integration

## 🚀 Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── blog/             # Blog index & detail pages
│   ├── contact/          # Contact page
│   ├── projects/         # Projects index & detail pages
│   ├── globals.css       # Global styles & design tokens
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── blog/             # Blog list & detail components
│   ├── contact/          # Contact form component
│   ├── home/             # Hero, projects, experience, skills
│   ├── projects/         # Project listing & detail components
│   ├── root/             # Navbar, footer, theme toggle
│   └── ui/               # shadcn/ui primitives
├── lib/                  # Notion client, utilities
└── utilities/            # Project data definitions
```

## 📄 License

MIT

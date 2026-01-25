# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page builder for "Academia Lendária" - an AI education ecosystem. The project manages multiple landing page versions (v2-v18) for A/B testing, with the home page currently using v17 components.

## Development Commands

```bash
npm run dev      # Start dev server on port 3003
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Architecture

### Version System

Each landing page version lives in `app/v{N}/` with its own components. The home page (`app/page.tsx`) imports from the current active version (currently v17). Version components are prefixed (e.g., `V15Hero`, `V15Problem`) but may be reused across versions.

### Component Organization

- **Shared components** (`/components/`): Reusable across all versions - Footer, Header, ImersaoFAQ, ImersaoTeam, ImersaoCases, etc.
- **Version-specific components** (`app/v{N}/components/`): Isolated per version with their own CSS modules
- **CSS Modules**: Each component typically has a corresponding `.module.css` file

### Key Patterns

**Batch/Lote Pricing System**: `lib/loteConfig.ts` manages pricing tiers with expiration dates. CountdownTimer and LoteCountdown components display remaining time. TEST_MODE flag available for development (disabled in production).

**Multi-language Support**: LanguageContext in `/contexts/` provides `useLanguage()` hook with `t` (translations) and `setLanguage()`. Supports pt/en/es, persisted to localStorage.

**Client Components**: Most interactive components use `'use client'` directive for React Context, scroll animations, and timers.

### Routing

- `/` - Main landing page (v17)
- `/v{N}` - Version-specific pages
- `/alunos`, `/alunos-2` - Student-focused variants
- `/certificacao-gestor`, `/vale-do-silicio` - Specialized landing pages
- Fallback rewrites to WordPress at `wp.academialendaria.ai`

## Design System

Reference `DESIGN_SYSTEM.md` for complete specifications:

- **Theme**: Dark background (#000000) with gold accent (#FFD44A)
- **Spacing**: 8px base grid system
- **Typography**: Inter font, desktop-first responsive scale
- **Effects**: Glassmorphism (`rgba(255,255,255,0.08)` + backdrop-filter), animated border gradients
- **Breakpoints**: Desktop-first - 1280px, 1024px (tablet), 768px (mobile), 580px (small mobile)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- CSS Modules + Tailwind utilities (clsx, tailwind-merge)
- Animations: react-spring, motion
- 3D: cobe (globe), ogl (WebGL)
- Deployed on Vercel with GTM tracking

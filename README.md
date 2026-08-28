# 💼 Portfolio - Matheus Pimentel Do Couto

> **Professional Portfolio Website** - Showcasing my journey in technology

My personal portfolio is a modern web application built with **Angular 21**, designed to showcase my professional journey, certifications, technical expertise, and key projects through a clean, responsive, and performance-focused interface.

The platform strengthened my professional positioning by improving how recruiters and companies visualize my experience, technical depth, and measurable results. With a structured presentation of projects and a clear value proposition, it enhanced engagement and contributed to a higher conversion rate on LinkedIn, increasing profile visits and professional opportunities.

---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🧰 Tools and Services](#-tools-and-services)
- [📦 Prerequisites](#-prerequisites)
- [⬇️ Prior Downloads](#️-prior-downloads)
- [🚀 How to Run Locally](#-how-to-run-locally)
- [⌨️ Useful Commands](#️-useful-commands)
- [📐 Conventional Commits](#-conventional-commits)
- [⚙️ GitHub Actions Workflows](#️-github-actions-workflows)
- [🏗️ Production Build](#️-production-build)
- [🧪 Testing](#-testing)
- [📚 Documentation](#-documentation)
- [♿ Accessibility](#-accessibility)
- [👨‍💻 Author](#-author)

---

## ✨ Key Features

### 🎯 Portfolio Sections
- ✅ **About Me** — Professional introduction and career overview
- ✅ **Skills** — Technical competencies and expertise areas
- ✅ **Experience** — Professional background and work history with tabs (Professional/Academic)
- ✅ **Projects** — Showcase of developed applications with descriptions and technologies
- ✅ **Certifications** — Professional certificates with pagination (lazy loading)
- ✅ **Articles** — Academic publications and technical writing
- ✅ **Contact** — Contact form with email integration and social links

### 🎨 User Experience
- ✅ **Responsive Design** — Mobile-first approach with Bootstrap 5 breakpoints (sm/md/lg/xl/xxl)
- ✅ **Smooth Animations** — AOS (Animate On Scroll) library integration
- ✅ **Interactive UI** — Dynamic typing effect on page header
- ✅ **Optimized Performance** — OnPush change detection and Angular Signals
- ✅ **Custom Components** — Reusable components from mpc-lib-angular
- ✅ **Accessible** — WCAG 2.1 AA compliant (ARIA, contrast, keyboard navigation)

### 📁 Project Structure
```
📦 matheuspcouto.dev
├── 📁 .github/workflows/
│   ├── 📄 pr-check.yml               → PR validation (Lint, Test, Build)
│   ├── 📄 deploy-dev.yml             → Manual deploy to preview (workflow_dispatch)
│   └── 📄 deploy-prod.yml            → Manual deploy to production (workflow_dispatch)
├── 📁 .husky/
│   ├── 📄 commit-msg                 → Hook: validates commit message via commitlint
│   └── 📄 pre-push                   → Hook: runs lint, build and tests before each push
├── 📁 public/
│   └── 📁 img/                       → Static images (profile, projects, icons)
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 app.component.ts       → Main application component (loader + sections)
│   │   ├── 📄 app.config.ts          → Application configuration (ViewTransitions, ComponentInputBinding)
│   │   ├── 📄 app.routes.ts          → Routing configuration
│   │   ├── 📁 features/              → Feature-specific components (not reusable)
│   │   │   ├── 📁 about/             → About section with computed age
│   │   │   ├── 📁 articles/          → Academic publications showcase
│   │   │   ├── 📁 certifications/    → Certificates with pagination
│   │   │   ├── 📁 contact/           → Contact form (Reactive Forms)
│   │   │   ├── 📁 experience/        → Career timeline with tabs
│   │   │   ├── 📁 mpc-footer/        → Footer with social links
│   │   │   ├── 📁 navbar/            → Responsive navigation (desktop + mobile offcanvas)
│   │   │   ├── 📁 page-header/       → Animated typing header
│   │   │   ├── 📁 projects/          → Projects showcase with tech badges
│   │   │   └── 📁 skills/            → Skills grid by category
│   │   └── 📁 shared/                → Shared resources (reusable across features)
│   │       ├── 📁 constants/         → Shared constants (URLs, timings)
│   │       ├── 📁 enums/             → Shared enumerations (routes)
│   │       ├── 📁 helpers/           → Utility functions (window helper + injection token)
│   │       └── 📁 models/            → TypeScript interfaces (Article, Certification, etc.)
│   ├── 📁 environments/              → Environment configs (dev, prod)
│   ├── 📄 index.html                 → HTML entry point with preload/preconnect
│   ├── 📄 main.ts                    → TypeScript entry point (bootstrap)
│   ├── 📄 styles.scss                → Global styles with CSS custom properties
│   └── 📄 test-setup.ts              → Vitest configuration (zoneless TestBed for performance)
├── 📄 .editorconfig                  → Editor configuration
├── 📄 .gitignore                     → Git ignore rules
├── 📄 angular.json                   → Angular CLI configuration
├── 📄 commitlint.config.ts           → Conventional Commits rules
├── 📄 eslint.config.mjs              → ESLint configuration (flat config)
├── 📄 package.json                   → Dependencies and npm scripts
├── 📄 tsconfig.json                  → Base TypeScript configuration
├── 📄 tsconfig.app.json              → TypeScript config for build
├── 📄 tsconfig.spec.json             → TypeScript config for tests
└── 📄 vitest.config.ts               → Vitest + coverage configuration
```

---

## 🛠️ Technologies Used

### Core
- **Node.js** 24 — Runtime for build and tooling
- **TypeScript** 5.9 — Static typing
- **Angular** 21.2 (`@angular/core`, `common`, `compiler`, `forms`, `platform-browser`, `router`) — UI framework (Signals, Standalone Components)
- **RxJS** 7.8 — Reactive programming (minimal usage, Signals preferred)
- **Zone.js** 0.16 — Angular change detection
- **tslib** — TypeScript runtime helpers (reduces bundle size)

### UI & Design
- **SCSS** + **Bootstrap** 5.3 — Responsive styling with grid and utilities
- **Bootstrap Icons** 1.13 — Consistent iconography (font-based)
- **AOS** 2.3 — Animate On Scroll library
- **mpc-lib-angular** 0.2.3 — Custom component library (inputs, cards, buttons, tabs)

### Testing & Dev
- **Vitest** 4.1 — Fast unit testing framework
- **@analogjs/vitest-angular** 2.6 — Angular testing integration (ComponentFixture, TestBed)
- **@vitest/coverage-v8** 4.1 — Code coverage provider (V8)
- **jsdom** 26.1 — Virtual DOM for tests

### Quality & Linting
- **ESLint** 9.39 — Static code linting
- **angular-eslint** 21.4 — Angular rules and templates for ESLint
- **typescript-eslint** 8.66 — TypeScript parser and rules for ESLint
- **eslint-plugin-security** 4.0 — Insecure pattern detection
- **eslint-plugin-no-secrets** 2.3 — Hardcoded secrets detection

### Build & Tooling
- **@angular/cli** 21.2 — Angular CLI (ng serve, ng build, ng lint)
- **@angular/build** 21.2 — Angular builder (esbuild + vite)
- **@angular/compiler-cli** 21.2 — AOT compiler (ahead-of-time)

### Git & CI
- **Husky** 9.1 — Automated Git hooks (pre-push, commit-msg)
- **@commitlint/cli** 21.2 + **@commitlint/config-conventional** 21.2 — Conventional Commits validation

---

## 🧰 Tools and Services

| Tool | Purpose | Access |
|------|---------|--------|
| **Vercel** | Hosting and global CDN (Edge Network) | [vercel.com](https://vercel.com) |
| **GitHub Actions** | CI/CD — lint, tests and automated deploy | [github.com](https://github.com) |

---

## 📦 Prerequisites

- **Node.js** 24.x (24.13.0 recommended)
- **npm** 10.x or higher
- **Git**

---

## ⬇️ Prior Downloads

- **Node.js 24.x (includes npm):** https://nodejs.org/en/download
- **Git:** https://git-scm.com/download/win

After installing, validate in the terminal:

```bash
node -v
npm -v
git --version
```

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/matheuspcouto/matheuspcouto.dev.git
cd matheuspcouto.dev
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Start the development server

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:4200`

### 4. View the application

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

---

## ⌨️ Useful Commands

```bash
npm start              # Start Angular in development mode (auto-open browser)
npm run build          # Build for production
npm run build:dev      # Build for development
npm run build:prod     # Build for production (explicit)
npm run lint           # Run ESLint
npm test               # Run tests with coverage (80% minimum)
npm run reset-project  # Reinstall everything, build, test, lint and audit
npm run prepare        # Install git hooks (automatic on npm install)
```

### Recommended Development Flow

```bash
# Local development
npm start

# Before pushing (automatically executed by husky)
npm run lint && npm run build && npm test
```

---

## 📐 Conventional Commits

The project uses **commitlint** + **husky** to ensure all commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) standard. Validation is done automatically by the `.husky/commit-msg` hook on every `git commit`.

### Required Format

```
type(scope): description
```

**Example:** `feat(navbar): add mobile offcanvas menu`

### Allowed Types

| Type | When to use |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting (no logic change) |
| `refactor` | Refactoring (no feat nor fix) |
| `perf` | Performance improvement |
| `test` | Adding or fixing tests |
| `chore` | Maintenance (deps, configs, scripts) |
| `ci` | CI/CD changes (workflows, actions) |
| `build` | Build changes (tsconfig, angular.json) |
| `revert` | Reverts previous commit |

### Active Git Hooks

| Hook | Action | Configuration |
|------|--------|---------------|
| `pre-push` | Runs lint, build and tests — aborts on errors | `.husky/pre-push` |
| `commit-msg` | Validates message via commitlint — aborts if outside Conventional Commits pattern | `.husky/commit-msg` |

### Examples

```bash
# ✅ Correct
git commit -m "feat(certifications): add pagination with lazy loading"
git commit -m "fix(navbar): correct scroll behavior on mobile"
git commit -m "docs: update README with new commands"
git commit -m "chore(deps): update Angular to 21.2.22"

# ❌ Incorrect
git commit -m "Adding new feature"              # missing type
git commit -m "feat: "                          # empty description
git commit -m "FEAT(navbar): something"         # type must be lowercase
git commit -m "feat(navbar): something."        # no period at the end
```

---

## ⚙️ GitHub Actions Workflows

All workflows are in `.github/workflows/`. They consume reusable workflows from [`avodah-docs-devops`](https://github.com/matheuspcouto/avodah-docs-devops).

| Workflow | File | Trigger | Description |
|----------|------|---------|-------------|
| ✅ **PR Check** | [pr-check.yml](.github/workflows/pr-check.yml) | Automatic — PR open/sync/reopen to `main` | 5 jobs: Audit, Gitleaks, Lint, Tests + Coverage, Build. All checks run automatically (no skip). |
| 🚀 **Deploy DEV** | [deploy-dev.yml](.github/workflows/deploy-dev.yml) | Manual — `workflow_dispatch` | Code Check (with granular skip via inputs) → Frontend Deploy (Vercel preview). |
| 🚀 **Deploy PROD** | [deploy-prod.yml](.github/workflows/deploy-prod.yml) | Manual — `workflow_dispatch` | Code Check (with granular skip via inputs) → Frontend Deploy (Vercel production). |

### Workflow Configuration

| Parameter | Value |
|-----------|-------|
| Node.js version | 24.13.0 |
| Coverage threshold | 80% |
| Install command | `npm install --legacy-peer-deps` |
| Vercel CLI version | 54 |

---

## 🏗️ Production Build

```bash
npm run build
```

This command will:
1. ✅ Compile TypeScript to JavaScript
2. ✅ Bundle and optimize all assets
3. ✅ Generate optimized production files in `dist/matheuspcouto.dev/`
4. ✅ Apply tree-shaking and minification

**Build artifacts:**
- Output directory: `dist/matheuspcouto.dev/`
- Optimized for production performance
- Ready for deployment to static hosting (Vercel, Netlify, etc.)

### Bundle Size

| Type | Size (gzip) |
|------|-------------|
| Initial | ~140 KB |
| Main chunk | ~90 KB |
| Styles | ~24 KB |
| Scripts (AOS) | ~26 KB |

---

## 🧪 Testing

### Run Tests with Coverage

```bash
npm test
```

Minimum coverage configured at **80% per file** (branches, functions, lines, statements):

| Metric | Coverage |
|--------|----------|
| Statements | ≥80% |
| Branches | ≥80% |
| Functions | ≥80% |
| Lines | ≥80% |

### Code Quality

```bash
npm run lint
```

ESLint is configured with:
- **angular-eslint** — Angular-specific rules
- **eslint-plugin-security** — Security vulnerability detection
- **eslint-plugin-no-secrets** — Secret detection in code

---

## 📚 Documentation

### Component Architecture

The portfolio uses **Angular 21 Standalone Components** with **Signals** and **OnPush Change Detection**:

| Pattern | Implementation |
|---------|----------------|
| **Angular Signals** | Reactive state with `signal()`, `computed()`, `input()` |
| **afterNextRender** | Modern lifecycle for browser-only initialization |
| **OnPush Change Detection** | Optimized rendering in all components |
| **Explicit imports** | Better tree-shaking and bundle optimization |
| **styleUrl** (singular) | Modern component decorator syntax |
| **withViewTransitions** | Smooth route transitions |
| **withComponentInputBinding** | Route params bound to component inputs |

### Key Components (features/)

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **app-navbar** | Responsive navigation | Desktop menu + mobile offcanvas, scroll tracking |
| **app-page-header** | Animated typing header | Dynamic text animation with signals |
| **app-about** | About me section | Personal introduction, computed age |
| **app-skills** | Technical skills display | Grid layout, category organization |
| **app-experience** | Work history timeline | Tabs (Professional/Academic), mpc-card-evento |
| **app-projects** | Project showcase | Cards with tech badges, external links |
| **app-certifications** | Certificates display | Paginated grid with lazy loading |
| **app-articles** | Academic publications | Links to external journals |
| **app-contact** | Contact form | Reactive Forms with validation, mailto link |
| **app-mpc-footer** | Footer component | Social links, contact info, current year |

### Environment Configuration

| Environment | File | Usage |
|-------------|------|-------|
| Development | `src/environments/environment.ts` | Local development |
| Production | `src/environments/environment.prod.ts` | Production builds |

### Custom Library

The project uses **mpc-lib-angular** (v0.2.3) — a custom Angular component library.

**Documentation:** [MPC Lib Angular](https://github.com/matheuspcouto/mpc-lib-angular)

---

## ♿ Accessibility

This project follows **WCAG 2.1 level AA** accessibility criteria:

| Criterion | Implementation |
|-----------|----------------|
| 1.1.1 Non-text content | Descriptive `alt` on images, `aria-label` on functional icons |
| 1.4.3 Minimum contrast | Ratio ≥ 4.5:1 for normal text |
| 2.1.1 Keyboard | All interactive elements accessible via Tab |
| 2.4.1 Bypass blocks | Skip link available (if needed) |
| 4.1.2 Name, Role, Value | ARIA roles and labels on custom components |

### Specific Implementations

- **Decorative icons** — `aria-hidden="true"` on purely visual icons
- **Functional icons** — Descriptive `aria-label` on action buttons
- **Navigation** — `role="navigation"`, `role="menubar"`, `role="menuitem"`
- **External links** — `rel="noopener noreferrer"` and `target="_blank"`
- **Forms** — Labels associated via `for`/`id`, validation with Reactive Forms
- **Keyboard events** — `(keydown.enter)` alongside `(click)` for accessibility

> ⚠️ Full WCAG validation requires manual testing with assistive technologies and expert accessibility review.

---

## 👨‍💻 Author

**Matheus Pimentel Do Couto**
- 📧 Email: [matheuspcouto70@gmail.com](mailto:matheuspcouto70@gmail.com)
- 🐙 GitHub: [@matheuspcouto](https://github.com/matheuspcouto)
- 💼 LinkedIn: [matheuspcouto](https://www.linkedin.com/in/matheuspcouto/)
- 📸 Instagram: [matheuspcouto](https://www.instagram.com/matheuspcouto/)

---

⭐ **matheuspcouto.dev** — Professional Portfolio | Built with Angular 21, TypeScript, Signals, and ❤️

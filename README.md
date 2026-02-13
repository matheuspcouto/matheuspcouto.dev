# 💼 Portfolio - Matheus Pimentel Do Couto

> **Professional Portfolio Website** - Showcasing my journey in technology

**matheuspcouto.dev** is a modern portfolio website built with Angular that highlights my professional trajectory, certifications, technical skills, and projects. Through a clean and responsive design, I present my passion for technology and my dedication to creating innovative and impactful solutions.

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📦 Prerequisites](#-prerequisites)
- [🚀 How to Run Locally](#-how-to-run-locally)
- [🏗️ Production Build](#-production-build)
- [📁 Project Structure](#-project-structure)
- [🧪 Testing](#-testing)
- [📚 Documentation](#-documentation)
- [👨‍💻 Author](#-author)

## ✨ Key Features

### 🎯 Portfolio Sections
- ✅ **About Me** - Professional introduction and career overview
- ✅ **Skills** - Technical competencies and expertise areas
- ✅ **Experience** - Professional background and work history
- ✅ **Projects** - Showcase of developed applications with descriptions and technologies
- ✅ **Certifications** - Professional certificates and achievements
- ✅ **Articles** - Technical writing and knowledge sharing
- ✅ **Contact** - Contact form with WhatsApp integration and resume download

### 🎨 User Experience
- ✅ **Responsive Design** - Mobile-first approach with Bootstrap 5
- ✅ **Smooth Animations** - AOS (Animate On Scroll) library integration
- ✅ **Interactive UI** - Dynamic typing effect on page header
- ✅ **Toast Notifications** - User feedback with ngx-toastr
- ✅ **Optimized Performance** - Lazy loading and efficient routing
- ✅ **Custom Components** - Reusable components from mpc-lib-angular

### 📁 Project Structure (Angular Standalone)
```
src/
├── app/
│   ├── app.component.ts              # Main application component
│   ├── app.config.ts                 # Application configuration
│   ├── app.routes.ts                 # Routing configuration
│   └── shared/
│       ├── components/               # Feature components
│       │   ├── about/                # About section
│       │   ├── articles/             # Articles showcase
│       │   ├── certifications/       # Certifications display
│       │   ├── contact/              # Contact form
│       │   ├── experience/           # Career timeline
│       │   ├── skills/               # Skills grid
│       │   ├── projects/             # Projects showcase
│       │   ├── page-header/          # Animated header
│       │   └── mpc-footer/           # Footer component
│       ├── enums/                    # Shared enumerations
│       ├── pipes/                    # Custom pipes
│       └── services/                 # Shared services
├── assets/                           # Static assets
│   └── img/                          # Images and media
├── environments/                     # Environment configs
│   ├── environment.ts                # Development environment
│   └── environment.prod.ts           # Production environment
├── index.html                        # HTML entry point
├── main.ts                           # TypeScript entry point
└── styles.scss                       # Global styles

```

## 🛠️ Technologies Used

### Core
- **Angular** 19.2 - Modern web application framework
- **TypeScript** 5.7 - Typed JavaScript superset
- **RxJS** 7.8 - Reactive programming library
- **Zone.js** 0.15 - Execution context for Angular

### UI & Design
- **Bootstrap** 5.3 - CSS framework for responsive design
- **SCSS** - CSS preprocessor for advanced styling
- **AOS** 2.3 - Animate On Scroll library
- **ngx-toastr** 19.0 - Toast notification library
- **mpc-lib-angular** 0.2.3 - Custom component library

### Development & Build
- **Angular CLI** 19.2 - Command line interface
- **@angular-devkit/build-angular** 19.2 - Build system
- **TypeScript Compiler** 5.7 - Type checking and compilation

### Testing
- **Jest** 29.7 - JavaScript testing framework
- **jest-preset-angular** 14.6 - Jest preset for Angular
- **@types/jest** 29.5 - TypeScript definitions

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git**

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/matheuspcouto/matheuspcouto.dev.git
cd matheuspcouto.dev
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:4200`

**Available scripts:**
- `npm start` - Start dev server with auto-open browser
- `npm run ng serve` - Start dev server without opening browser
- `npm run build` - Build for production
- `npm test` - Run unit tests with coverage

### 4. View the application

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## 🏗️ Production Build

### Build the application

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
- Ready for deployment to static hosting (GitHub Pages, Netlify, Vercel, etc.)

**Budget limits:**
- Initial bundle: Maximum 1.5MB (warning at 1MB)
- Ensures optimal loading performance

## 🧪 Testing

### Test Coverage

The project maintains high test coverage with comprehensive unit tests:

```bash
npm test
```

## 📚 Documentation

### Component Architecture

The portfolio uses **Angular Standalone Components** architecture:

- **No NgModules** - Modern standalone approach
- **Explicit imports** - Better tree-shaking and bundle optimization
- **Shared components** - Reusable across the application
- **Enum-based routing** - Type-safe navigation

### Key Components

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **page-header** | Animated typing header | Dynamic text animation, responsive design |
| **about** | About me section | Personal introduction, career overview |
| **skills** | Technical skills display | Grid layout, category organization |
| **experience** | Work history timeline | Company details, role descriptions |
| **projects** | Project showcase | Cards with tech stacks, links, descriptions |
| **certifications** | Certificates display | Grid of achievements with details |
| **articles** | Blog posts/articles | Links to external content |
| **contact** | Contact form | WhatsApp integration, resume download |
| **mpc-footer** | Footer component | Social links, copyright info |

### Environment Configuration

- **Development:** `src/environments/environment.ts`
- **Production:** `src/environments/environment.prod.ts`

Configure API endpoints, feature flags, or external service URLs in these files.

### Custom Library

The project uses **mpc-lib-angular** (v0.2.3) - a custom Angular component library created specifically for this portfolio.

**Documentation:** [MPC Lib Angular Documentation](https://github.com/matheuspcouto/mpc-lib-angular)

## 👨‍💻 Author

**Matheus Pimentel Do Couto**
- Email: matheuspcouto70@gmail.com
- GitHub: [@matheuspcouto](https://github.com/matheuspcouto)
- LinkedIn: [matheuspcouto](https://www.linkedin.com/in/matheuspcouto/)
- Instagram: [matheuspcouto](https://www.instagram.com/matheuspcouto/)
---

⭐ **matheuspcouto.dev** - Professional Portfolio | Built with Angular, TypeScript, and ❤️

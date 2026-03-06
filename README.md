# EduVerse – Angular 18 Educational Platform

A production-grade educational platform built with **Angular 18** (standalone components), inspired by [PW Live](https://www.pw.live/).

## 🚀 Quick Start

```bash
npm install
ng serve
```
Open http://localhost:4200

## 🏗️ Project Architecture

```
src/
├── app/
│   ├── components/          # Reusable shared components
│   │   ├── navbar/          # Sticky navbar + announcement banner
│   │   ├── hero/            # Hero section with live classes card
│   │   ├── marquee/         # Animated exam ticker
│   │   ├── exams/           # Exam categories grid
│   │   ├── features/        # Platform features grid
│   │   ├── teachers/        # Top educators section
│   │   ├── testimonials/    # Student success stories
│   │   ├── course-card/     # Reusable course card component
│   │   ├── app-download/    # Mobile app download section
│   │   ├── footer/          # Site footer
│   │   ├── auth-modal/      # Login/Signup modal
│   │   └── toast/           # Toast notification component
│   │
│   ├── pages/               # Routed page components
│   │   ├── home/            # Landing page
│   │   ├── courses/         # Course listing with search + filter
│   │   └── dashboard/       # Student dashboard
│   │
│   ├── services/
│   │   ├── auth.service.ts  # Auth state (login/logout/modal)
│   │   ├── data.service.ts  # All mock data (courses, teachers, etc.)
│   │   └── toast.service.ts # Global toast notifications
│   │
│   ├── models/
│   │   └── models.ts        # TypeScript interfaces
│   │
│   ├── app.component.ts     # Root component
│   ├── app.config.ts        # App configuration + providers
│   └── app.routes.ts        # Lazy-loaded routes
│
├── styles.css               # Global styles + CSS variables
└── index.html
```

## ✨ Features

- **Angular 18** with standalone components, signals, and control flow (`@if`, `@for`)
- **Lazy-loaded routing** with `loadComponent`
- **Reactive state** using Angular signals
- **3 Pages**: Home, Courses, Dashboard
- **12 Components**: Each with its own HTML, CSS, and TS
- **3 Services**: Auth, Data, Toast
- **Responsive design** – mobile-first, works on all screen sizes
- **Dark theme** with CSS custom properties

## 📦 Tech Stack

- Angular 18 (Standalone Components + Signals)
- Angular Router with lazy loading
- TypeScript
- CSS (no external UI framework)

## 🔧 Build for Production

```bash
ng build --configuration production
```

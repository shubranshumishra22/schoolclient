# Prentice The school — Frontend

A responsive school website built with React, Vite, Tailwind CSS v3, and Framer Motion.

## Features

- **7 public pages** — Home, About, Academics, Admissions, Gallery, Events, Contact
- **Admin dashboard** — login/signup with JWT auth, view admission enquiries and contact messages
- **Animated UI** — scroll-triggered animations via Framer Motion
- **Form validation** — React Hook Form + Zod schemas
- **Mobile friendly** — responsive nav with slide-out menu
- **API ready** — Axios client configured to talk to the backend API

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| Vite 6 | Build tool / dev server |
| Tailwind CSS v3 | Styling |
| Framer Motion | Animations |
| React Router v6 | Client-side routing (lazy loaded) |
| React Hook Form + Zod | Form state + validation |
| Axios | HTTP client |
| Lucide React | Icons |

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Backend

The frontend expects a backend API running at the URL set in `VITE_API_URL` (see `.env`).  
The corresponding backend (Express + PostgreSQL) is at https://github.com/Supriyamishra1992/prenticetheschool.

### API Endpoints Used

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /news | Latest news |
| GET | /events | Upcoming events |
| GET | /gallery | Photo gallery |
| POST | /contact | Submit contact form |
| POST | /admissions | Submit admission enquiry |
| POST | /auth/signup | Admin registration |
| POST | /auth/login | Admin login |
| GET | /auth/me | Verify JWT token |
| GET | /admissions | List enquiries (auth) |
| GET | /contact | List messages (auth) |

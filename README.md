# Notedly
> **Note**: This `README.md` was created with the help of AI. The app is still a work in progress, with some bugs and areas that need improvement.

> **Your Brain's Best Friend** — Capture ideas instantly, organize effortlessly, and find anything in seconds.

Notedly is a modern, full-stack note-taking application built with Next.js 16, featuring a beautiful UI, powerful organization tools, and seamless user experience. Transform the way you think, work, and create with categorized pages and notes.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Prisma](https://img.shields.io/badge/Prisma-7.0-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38BDF8)

## ✨ Features

- 🗂️ **Organized Pages** — Create multiple pages with custom categories and slugs
- 📋 **Nested Notes** — Add unlimited notes within each page
- 🎨 **16 Categories** — Organize with General, Work, Personal, Ideas, Tasks, Shopping, Health, Travel, Education, Entertainment, Reminders, Events, Music, Messages, and Passwords
- 🔍 **Smart Search** — Find your notes instantly with semantic search
- 📱 **Responsive Design** — Beautiful UI that works on all devices
- ⚡ **Real-time Updates** — Instant revalidation and updates
- 🎭 **Smooth Animations** — Powered by Framer Motion
- 🌙 **Modern UI** — Built with Radix UI and shadcn/ui components
- 🔐 **Type-safe** — Full TypeScript support with Zod validation

## 🚀 Tech Stack

**Frontend:**
- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19.2](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [shadcn/ui](https://ui.shadcn.com/) — Reusable, customizable UI components
- [Lucide React](https://lucide.dev/) — Beautiful icons

**Backend:**
- [Prisma 7](https://www.prisma.io/) — Type-safe ORM
- [PostgreSQL](https://www.postgresql.org/) — Relational database
- [Zod 4](https://zod.dev/) — Schema validation
- Server Actions — Next.js native data mutations

**Developer Tools:**
- ESLint — Code linting
- PostCSS — CSS processing
- pnpm — Fast package manager

## 📦 Installation

### Prerequisites

- Node.js 20.x or higher
- PostgreSQL database
- pnpm (recommended) or npm/yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/anthonyA1214/notedly.git
   cd notedly
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Update the `DATABASE_URL` in `.env`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/notedlydb?schema=public"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   pnpm prisma generate
   
   # Run migrations
   pnpm prisma migrate dev
   
   # (Optional) Seed the database
   pnpm prisma db seed
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

```prisma
model Page {
  id        String   @id @default(ulid())
  title     String
  slug      String   @unique
  category  Category
  notes     Note[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Note {
  id        String   @id @default(ulid())
  page      Page     @relation(fields: [pageId], references: [id])
  pageId    String
  title     String
  category  Category
  content   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 📁 Project Structure

```
notedly/
├── app/                      # Next.js App Router
│   ├── (main)/               # Landing page route group
│   ├── (notes)/              # Notes app route group
│   │   └── notes/
│   │       └── [slug]/       # Dynamic page routes
│   ├── config/               # App configuration
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── landing/              # Landing page components
│   ├── notes/                # Notes app components
│   └── ui/                   # Reusable UI components (shadcn)
├── hooks/                    # Custom React hooks
├── lib/
│   ├── actions/              # Server Actions
│   ├── data/                 # Static data & config
│   ├── generated/            # Generated Prisma client
│   ├── schemas/              # Zod validation schemas
│   ├── services/             # Business logic
│   └── types/                # TypeScript types
├── prisma/
│   ├── schema.prisma         # Database schema
│   ├── migrations/           # Database migrations
│   └── seed.ts               # Database seeding
└── public/                   # Static assets
```

## 🎯 Key Features Explained

### Pages & Notes Organization
- Create **Pages** as containers for related notes
- Add multiple **Notes** within each page
- Organize both with 16 predefined categories
- Automatic slug generation from titles

### Categories Available
General, Work, Personal, Ideas, Tasks, Shopping, Health, Travel, Education, Entertainment, Reminders, Events, Music, Messages, Passwords

### Smart UI Components
- **Collapsible Sidebar** — Easy navigation with off-canvas mobile support
- **Floating Action Button** — Quick note creation
- **Category Icons** — Visual organization with Lucide icons
- **Empty States** — Helpful guidance when no content exists
- **Dialog Forms** — Create, edit, and delete with validation
- **Dropdown Menus** — Context actions for pages and notes

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start dev server

# Build
pnpm build        # Generate Prisma client & build for production

# Production
pnpm start        # Start production server

# Linting
pnpm lint         # Run ESLint

# Database
pnpm prisma generate     # Generate Prisma Client
pnpm prisma migrate dev  # Run migrations
pnpm prisma studio       # Open Prisma Studio GUI
pnpm prisma db seed      # Seed database
```

---

<div align="center">
  <strong>Built with ❤️ using Next.js</strong>
</div>

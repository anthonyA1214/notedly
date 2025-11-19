import { Category } from "@/lib/generated/prisma/enums"

export const pages = [
    {
        title: "Personal Notes",
        slug: "personal-notes",
        category: Category.personal,
        notes: {
            create: [
                {
                    title: "Grocery List",
                    content: "- Milk\n- Eggs\n- Coffee\n- Chicken breast",
                    category: Category.shopping,
                },
                {
                    title: "Workout Plan",
                    content: "Monday: Chest & Triceps\nWednesday: Back & Biceps\nFriday: Legs",
                    category: Category.health,
                },
            ],
        },
    },
    {
        title: "Work",
        slug: "work",
        category: Category.work,
        notes: {
            create: [
                {
                    title: "Meeting Summary",
                    content: "Discussed roadmap changes. Priorities:\n1. Improve onboarding\n2. Fix search issues\n3. Optimize database queries",
                    category: Category.work,
                },
                {
                    title: "API Ideas",
                    content: "- Add rate limiting\n- Introduce audit logs\n- Simplify developer onboarding flow",
                    category: Category.work,
                },
            ],
        },
    },
    {
        title: "Projects",
        slug: "projects",
        category: Category.general,
        notes: {
            create: [
                {
                    title: "Next.js App Refactor",
                    content: "Refactor components into `app/(dashboard)` layout.\nMove server functions into separate folder.\nImprove error boundaries.",
                    category: Category.general,
                },
                {
                    title: "Prisma Migration Plan",
                    content: "1. Add new relations\n2. Run migration on staging\n3. Replicate data to production\n4. Validate with feature flags",
                    category: Category.general,
                },
            ],
        },
    },
];

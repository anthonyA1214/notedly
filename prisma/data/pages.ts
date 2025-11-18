export const pages = [
    {
        title: "Personal Notes",
        slug: "personal-notes",
        icon: "StickyNote",
        notes: {
            create: [
                {
                    title: "Grocery List",
                    content: "- Milk\n- Eggs\n- Coffee\n- Chicken breast",
                },
                {
                    title: "Workout Plan",
                    content: "Monday: Chest & Triceps\nWednesday: Back & Biceps\nFriday: Legs",
                },
            ],
        },
    },
    {
        title: "Work",
        slug: "work",
        icon: "Megaphone",
        notes: {
            create: [
                {
                    title: "Meeting Summary",
                    content:
                        "Discussed roadmap changes. Priorities:\n1. Improve onboarding\n2. Fix search issues\n3. Optimize database queries",
                },
                {
                    title: "API Ideas",
                    content:
                        "- Add rate limiting\n- Introduce audit logs\n- Simplify developer onboarding flow",
                },
            ],
        },
    },
    {
        title: "Projects",
        slug: "projects",
        icon: "Hash",
        notes: {
            create: [
                {
                    title: "Next.js App Refactor",
                    content:
                        "Refactor components into `app/(dashboard)` layout.\nMove server functions into separate folder.\nImprove error boundaries.",
                },
                {
                    title: "Prisma Migration Plan",
                    content:
                        "1. Add new relations\n2. Run migration on staging\n3. Replicate data to production\n4. Validate with feature flags",
                },
            ],
        },
    },
];

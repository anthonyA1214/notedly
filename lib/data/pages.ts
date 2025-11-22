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
                {
                    title: "Read Later",
                    content: "- Atomic Habits\n- Clean Code\n- The Pragmatic Programmer",
                    category: Category.education,
                },
                {
                    title: "Project Ideas",
                    content: "- Build a personal dashboard\n- AI-powered notes search\n- Expense tracker mobile app",
                    category: Category.ideas,
                },
                {
                    title: "Birthday Gift Ideas",
                    content: "- Headphones\n- Custom mug\n- Hoodie\n- Mechanical keyboard",
                    category: Category.events,
                },
                {
                    title: "Work Tasks",
                    content: "• Update project documentation\n• Fix login bug\n• Prepare sprint report",
                    category: Category.work,
                },
                {
                    title: "Travel Packing List",
                    content: "- Passport\n- Clothes\n- Charger\n- Toiletries\n- Power bank",
                    category: Category.travel,
                },
                {
                    title: "Movies To Watch",
                    content: "- Dune 2\n- Oppenheimer\n- The Batman\n- Whiplash",
                    category: Category.entertainment,
                },
                {
                    title: "Music Playlist",
                    content: "- NIKI – Take a Chance With Me\n- Keshi – Limbo\n- Joji – Glimpse of Us",
                    category: Category.music,
                },
                {
                    title: "Reminders",
                    content: "- Pay electricity bill\n- Renew domain\n- Water the plants",
                    category: Category.reminders,
                },
                {
                    title: "Important Passwords",
                    content: "Email: ********\nGitHub: ********\nBank App: ********",
                    category: Category.passwords,
                },
                {
                    title: "Shopping List 2",
                    content: "- Shampoo\n- Soap\n- Toothpaste\n- Bottled water",
                    category: Category.shopping,
                },
                {
                    title: "Meal Prep Plan",
                    content: "Mon: Pasta\nWed: Salmon bowl\nFri: Chicken rice\nSun: Stir fry",
                    category: Category.health,
                },
                {
                    title: "Event Planning",
                    content: "• Venue: TBD\n• Guest list: 20 people\n• Catering options: 3\n• Theme ideas: minimalist",
                    category: Category.events,
                },
                {
                    title: "Work Meeting Notes",
                    content: "- Q1 goals alignment\n- Timeline adjustment\n- Assign new tasks to dev team",
                    category: Category.work,
                },
                {
                    title: "Personal Thoughts",
                    content: "Just trying to stay consistent every day. 1% better rule.",
                    category: Category.personal,
                },
                {
                    title: "Quick Messages",
                    content: "Call mom tonight\nSend file to John\nReply to HR",
                    category: Category.messages,
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
    {
        title: "Project Dashboard",
        slug: "project-dashboard",
        category: Category.work,
    },
    {
        title: "Morning Routine",
        slug: "morning-routine",
        category: Category.health,
    },
    {
        title: "Gift Ideas",
        slug: "gift-ideas",
        category: Category.shopping,
    },
    {
        title: "Workout Tracker",
        slug: "workout-tracker",
        category: Category.health,
    },
    {
        title: "Travel Plans 2025",
        slug: "travel-plans-2025",
        category: Category.travel,
    },
    {
        title: "Study Notes",
        slug: "study-notes",
        category: Category.education,
    },
    {
        title: "Bucket List",
        slug: "bucket-list",
        category: Category.personal,
    },
    {
        title: "Business Ideas",
        slug: "business-ideas",
        category: Category.ideas,
    },
    {
        title: "Weekly Tasks",
        slug: "weekly-tasks",
        category: Category.tasks,
    },
    {
        title: "Movie Watchlist",
        slug: "movie-watchlist",
        category: Category.entertainment,
    },
    {
        title: "Meeting Reminders",
        slug: "meeting-reminders",
        category: Category.reminders,
    },
    {
        title: "Event Planner",
        slug: "event-planner",
        category: Category.events,
    },
    {
        title: "Favorite Songs",
        slug: "favorite-songs",
        category: Category.music,
    },
    {
        title: "Important Messages",
        slug: "important-messages",
        category: Category.messages,
    },
    {
        title: "Secure Vault",
        slug: "secure-vault",
        category: Category.passwords,
    }
];

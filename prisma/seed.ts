import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'
import { pages } from "@/lib/data/pages";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

async function main() {
    for (const page of pages) {
        await prisma.page.create({
            data: page,
        });
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
});
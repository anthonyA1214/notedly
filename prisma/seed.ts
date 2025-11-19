import { PrismaClient } from "@/lib/generated/prisma/client";
import { pages } from "@/lib/data/pages";

const prisma = new PrismaClient();

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
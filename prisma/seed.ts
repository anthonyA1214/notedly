import { PrismaClient } from "@/lib/generated/prisma/client";
import { pages } from "@/prisma/data/pages";

const prisma = new PrismaClient();

async function main() {
    await prisma.note.deleteMany();
    await prisma.page.deleteMany();

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
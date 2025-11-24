import prisma from "@/lib/prisma";

export async function getPageItems() {
  const pages = await prisma.page.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
    },
    orderBy: { createdAt: "asc" },
  });

  return pages.map((page) => ({
    id: page.id,
    title: page.title,
    slug: page.slug,
    category: page.category,
  }));
}

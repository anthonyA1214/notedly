import { redirect } from "next/navigation";
import { EmptyPageState } from "@/components/notes/empty";
import prisma from "@/lib/prisma";

export default async function Page() {
  const pages = await prisma.page.findMany({
    select: {
      slug: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  if (pages.length > 0) {
    const latestPage = pages[pages.length - 1];
    redirect(`/notes/${latestPage.slug}`);
  }

  return <EmptyPageState />;
}

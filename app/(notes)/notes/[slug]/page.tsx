import prisma from '@/lib/prisma'

export default async function NotesPage({
    params
}: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const page = await prisma.page.findUnique({
        where: { slug },
        include: { notes: true }
    })

    if (!page) {
        return <div>not found</div>
    }

    return (
        <h1>hotdog</h1>
    )
}
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('general', 'work', 'personal', 'ideas', 'tasks', 'shopping', 'health', 'travel', 'education', 'entertainment', 'reminders', 'events', 'music', 'messages', 'passwords');

-- CreateTable
CREATE TABLE "Page" (
    "id" VARCHAR(26) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "category" "Category" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" VARCHAR(26) NOT NULL,
    "pageId" VARCHAR(26) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "category" "Category" NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

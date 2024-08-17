-- AlterTable
ALTER TABLE "WatchingList" ADD COLUMN     "duration" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,
    "episodeNo" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "isFiller" BOOLEAN NOT NULL DEFAULT false,
    "anilistId" INTEGER NOT NULL,
    "image" TEXT DEFAULT '',
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" INTEGER NOT NULL DEFAULT 0,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Errors" (
    "errorId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Errors_pkey" PRIMARY KEY ("errorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "History_episodeId_key" ON "History"("episodeId");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

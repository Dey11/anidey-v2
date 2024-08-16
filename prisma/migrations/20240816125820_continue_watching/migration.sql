-- CreateTable
CREATE TABLE "WatchingList" (
    "id" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,
    "episodeNo" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "isFiller" BOOLEAN NOT NULL DEFAULT false,
    "anilistId" INTEGER NOT NULL,
    "image" TEXT DEFAULT '',
    "timestamp" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WatchingList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WatchingList_episodeId_key" ON "WatchingList"("episodeId");

-- AddForeignKey
ALTER TABLE "WatchingList" ADD CONSTRAINT "WatchingList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

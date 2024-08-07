"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { AnilistEpisodeLink } from "@/lib/anilistApi/getStreamingLink";
import { LayoutGrid, LibraryBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EpisodesList = ({
  episodes,
  animeId,
  anilistId,
  episodeId,
}: {
  episodes: AnilistEpisodeLink[];
  animeId: string;
  anilistId: string;
  episodeId: string;
}) => {
  const noOfEpisodes = episodes.length;
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <div className="">
      <div className="flex h-[30px] items-center justify-end gap-x-2 px-3">
        <div className={viewMode == "list" ? "text-red-500" : ""}>
          <LibraryBig
            onClick={() => {
              // window.localStorage.setItem("viewMode", "list");
              setViewMode("list");
            }}
          />
        </div>
        <div className={viewMode == "grid" ? "text-red-500" : ""}>
          <LayoutGrid
            onClick={() => {
              // window.localStorage.setItem("viewMode", "grid");
              setViewMode("grid");
            }}
          />
        </div>
      </div>
      {viewMode == "list" ? (
        <ScrollArea className="h-dvh max-h-[550px] w-[304px] min-w-full max-w-[320px]">
          <div className="flex flex-col gap-1">
            {episodes.map((episode) => (
              <Link
                href={`/anime/watch/${animeId}/${episode.id}/${anilistId}`}
                key={episode.id}
              >
                <div
                  className={
                    "flex items-center gap-2 rounded-md p-2" +
                    (episode.id == episodeId ? " bg-red-500" : "bg-[#171717]")
                  }
                >
                  <div className="relative min-h-16 min-w-12 rounded-lg">
                    <Image
                      src={episode.image}
                      alt={episode.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm">
                      {episode.title
                        ? "Episode " + episode.number + ": " + episode.title
                        : "Episode: " + episode.number}
                    </p>
                    {/* <p className="text-xs text-gray-400">
                      Aired on:{" "}
                      {
                        new Date(episode.createdAt)
                          .toLocaleString()
                          .split(",")[0]
                      }
                    </p> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      ) : (
        <ScrollArea className="h-dvh max-h-[550px] w-full max-w-[320px] p-5">
          <div className="grid grid-cols-6 gap-2">
            {episodes.map((episode) => (
              <Link href={`/anime/watch/${animeId}/${episode.id}/${anilistId}`}>
                <div
                  key={episode.id}
                  className={
                    "h-10 w-10 rounded-md p-2 text-center text-sm" +
                    (episode.id == episodeId ? " bg-red-500" : "bg-[#171717]")
                  }
                >
                  {episode.number}
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default EpisodesList;

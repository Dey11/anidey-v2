"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AniwatchEpisodeList,
  getEpisodeList,
} from "@/lib/anilistApi/getStreamingLink";
import clsx from "clsx";
import { LayoutGrid, LibraryBig } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EpisodesList = ({
  anilistId,
  zoroId,
}: {
  anilistId: string;
  zoroId: string;
}) => {
  const [episodes, setEpisodes] = useState<AniwatchEpisodeList>();
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [error, setError] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const episodeIdOfAnime = `${zoroId}?ep=${searchParams.get("ep")}`;

  const fetchEpisodes = async () => {
    try {
      const episodeList = await getEpisodeList(zoroId);
      if (episodeList) {
        setEpisodes(episodeList);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [zoroId]);

  if (error) {
    return <div className="text-center text-3xl">Episodes Not Found</div>;
  }

  return (
    <div className="">
      <div className="flex h-[30px] items-center justify-end gap-x-2 px-3">
        <div className={viewMode == "list" ? "text-[#C30000]" : ""}>
          <LibraryBig
            onClick={() => {
              // window.localStorage.setItem("viewMode", "list");
              setViewMode("list");
            }}
          />
        </div>
        <div className={viewMode == "grid" ? "text-[#C30000]" : ""}>
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
            {episodes?.episodes.map((episode) => {
              return (
                <Link
                  href={`/anime/watch/${zoroId}/${anilistId}/${episode.episodeId}`}
                  key={episode.episodeId}
                >
                  <div
                    className={clsx(
                      "min-h-16 gap-2 rounded-md p-2",
                      episode.episodeId == episodeIdOfAnime
                        ? "bg-rose-500"
                        : "bg-[#171717]",
                    )}
                  >
                    <div className="flex flex-col">
                      <p className="text-sm">
                        {episode.title
                          ? "Episode " + episode.number + ": " + episode.title
                          : "Episode: " + episode.number}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollArea>
      ) : (
        <ScrollArea className="h-dvh max-h-[550px] w-full max-w-[320px] p-5">
          <div className="grid grid-cols-6 gap-2">
            {episodes?.episodes.map((episode) => (
              <Link
                href={`/anime/watch/${zoroId}/${anilistId}/${episode.episodeId}`}
                key={episode.episodeId}
              >
                <div
                  className={clsx(
                    "h-10 w-10 rounded-md bg-[#171717] p-2 text-center text-sm",
                    episode.episodeId == episodeIdOfAnime
                      ? "bg-rose-500"
                      : "bg-[#171717]",
                  )}
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

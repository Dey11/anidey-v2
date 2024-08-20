"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { StreamEpisodeList } from "@/lib/anilistApi/getStreamingLink";
import useFetchEpisodeList from "@/lib/hooks/useFetchEpisodeList";
import clsx from "clsx";
import { LayoutGrid, LibraryBig } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const EpisodesList = ({
  anilistId,
  zoroId,
}: {
  anilistId: string;
  zoroId: string;
}) => {
  const searchParams = useSearchParams();
  const { episodes, viewMode, setViewMode, error, episodeIdOfAnime } =
    useFetchEpisodeList(zoroId, anilistId, searchParams);

  if (error) {
    return <div className="text-center text-3xl">Episodes Not Found</div>;
  }

  return (
    <div className="">
      <div className="flex h-[30px] items-center justify-end gap-x-2 px-3">
        <div className={viewMode == "list" ? "text-[#C30000]" : ""}>
          <LibraryBig
            onClick={() => {
              setViewMode("list");
            }}
          />
        </div>
        <div className={viewMode == "grid" ? "text-[#C30000]" : ""}>
          <LayoutGrid
            onClick={() => {
              setViewMode("grid");
            }}
          />
        </div>
      </div>
      {viewMode == "list" ? (
        <ListView
          episodes={episodes}
          episodeIdOfAnime={episodeIdOfAnime}
          zoroId={zoroId}
          anilistId={anilistId}
        />
      ) : (
        <GridView
          episodes={episodes}
          episodeIdOfAnime={episodeIdOfAnime}
          zoroId={zoroId}
          anilistId={anilistId}
        />
      )}
    </div>
  );
};

export default EpisodesList;

const ListView = ({
  episodes,
  episodeIdOfAnime,
  zoroId,
  anilistId,
}: {
  episodes: StreamEpisodeList | undefined;
  episodeIdOfAnime: string;
  zoroId: string;
  anilistId: string;
}) => {
  return (
    <ScrollArea className="h-dvh max-h-[580px] w-[304px] min-w-full max-w-[320px]">
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
  );
};

const GridView = ({
  episodes,
  episodeIdOfAnime,
  zoroId,
  anilistId,
}: {
  episodes: StreamEpisodeList | undefined;
  episodeIdOfAnime: string;
  zoroId: string;
  anilistId: string;
}) => {
  return (
    <ScrollArea className="h-dvh max-h-[580px] w-full max-w-[320px] p-5">
      <div className="grid grid-cols-6 gap-2">
        {episodes?.episodes.map((episode) => (
          <Link
            href={`/anime/watch/${zoroId}/${anilistId}/${episode.episodeId}`}
            key={episode.episodeId}
          >
            <div
              className={clsx(
                "h-10 w-[38px] rounded-md bg-[#171717] p-2 text-center text-sm",
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
  );
};

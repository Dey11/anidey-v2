"use client";

import { VidstackPlayer } from "./vidstack-player";
import { useSearchParams } from "next/navigation";
import useFetchStreamingLinks from "@/lib/hooks/useFetchStreamingLinks";
import { KOFI_URL } from "@/lib/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";

const VideoPlayer = ({
  user,
  animeId,
  coverImg,
  anilistId,
}: {
  coverImg: string;
  anilistId: string;
  animeId: string;
  user: string | undefined;
}) => {
  const searchParams = useSearchParams();
  const episodeIdOfAnime = `${animeId}?ep=${searchParams.get("ep")}`;
  // const medium = searchParams.get("dub") === "true" ? "dub" : "sub";

  const [medium, setMedium] = useState<"sub" | "dub">("sub");

  const streamingLinks = useFetchStreamingLinks(
    episodeIdOfAnime,
    searchParams,
    medium,
  );

  return (
    <div className="flex w-full max-w-[1100px] flex-col">
      <div className="">
        {streamingLinks && (
          <VidstackPlayer
            video={streamingLinks}
            user={user}
            episode={episodeIdOfAnime}
            animeId={animeId}
            coverImg={coverImg}
            medium={medium}
          />
        )}
      </div>
      <div className="w-full rounded-b-lg bg-gradient-to-r from-[#E11D48] to-[#9916FF] p-2">
        <p className="text-sm">
          Anidey provides an ad-free experience. You can help us manage our
          costs by donating{" "}
          <a href={KOFI_URL} className="underline">
            here
          </a>{" "}
          or by simply sharing the website. Thanks!
        </p>
      </div>
      <div className="pt-2">
        <div className="flex justify-center space-x-2">
          <button
            className={cn(
              "rounded-lg bg-gray-800 px-4 py-2 text-white",
              medium === "sub" ? "bg-rose-500" : "",
            )}
            onClick={() => {
              setMedium("sub");
            }}
          >
            Sub
          </button>
          <button
            className={cn(
              "rounded-lg bg-gray-800 px-4 py-2 text-white",
              medium === "dub" ? "bg-rose-500" : "",
            )}
            onClick={() => {
              setMedium("dub");
            }}
          >
            Dub
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

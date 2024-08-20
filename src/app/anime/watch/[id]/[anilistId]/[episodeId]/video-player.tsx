"use client";

import { VidstackPlayer } from "./vidstack-player";
import { useSearchParams } from "next/navigation";
import useFetchStreamingLinks from "@/lib/hooks/useFetchStreamingLinks";
import { KOFI_URL } from "@/lib/constants";

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

  const streamingLinks = useFetchStreamingLinks(episodeIdOfAnime, searchParams);

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
          or by simply sharing the website. Thanks :3
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;

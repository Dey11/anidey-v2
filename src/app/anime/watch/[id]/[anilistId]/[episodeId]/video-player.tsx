"use client";

import {
  AniwatchEpisodeLink,
  getStreamingLinks,
} from "@/lib/anilistApi/getStreamingLink";
import { VidstackPlayer } from "./vidstack-player";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [streamingLinks, setStreamingLinks] =
    useState<AniwatchEpisodeLink | null>(null);
  const searchParams = useSearchParams();

  const episodeIdOfAnime = `${animeId}?ep=${searchParams.get("ep")}`;
  const getLinks = async () => {
    try {
      const links = await getStreamingLinks(episodeIdOfAnime);
      setStreamingLinks(links);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLinks();
  }, [searchParams.get("ep")]);

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
          <a href="https://ko-fi.com/anidey" className="underline">
            here
          </a>{" "}
          or by simply sharing the website. Thanks :3
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;

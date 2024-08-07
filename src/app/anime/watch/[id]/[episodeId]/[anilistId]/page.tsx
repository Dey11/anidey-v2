import React from "react";
import VideoPlayer from "./video-player";
import EpisodesList from "./episodes-list";
import { getStreamingLinks } from "@/lib/anilistApi/getStreamingLink";
import { getAnimeInfo } from "@/lib/anilistApi/getAnimeInfo";
import NameSection from "./name-section";
import { Recommendations } from "@/app/anime/info/[id]/recommendations";
import WideGenreCardSection from "@/app/anime/info/[id]/wide-genre-cards";

const page = async ({
  params,
}: {
  params: {
    id: string;
    episodeId: string;
    anilistId: string;
  };
}) => {
  const animeId = params.id;
  const episodeId = params.episodeId;
  const anilistId = params.anilistId;
  const episodes = await getStreamingLinks(anilistId);
  const animeInfo = await getAnimeInfo(anilistId);

  return (
    <div className="mx-auto max-w-[1440px] px-2 pt-20">
      <div className="justify-center gap-5 lg:flex">
        <VideoPlayer />
        <EpisodesList
          episodes={episodes!}
          animeId={animeId}
          anilistId={anilistId}
          episodeId={episodeId}
        />
      </div>
      <NameSection animeInfo={animeInfo!} />
      <div className="pt-12 xl:grid xl:grid-cols-6">
        <div className="col-span-4">
          <Recommendations info={animeInfo} />
        </div>
        <div className="col-span-2 pt-3">
          <WideGenreCardSection genre={animeInfo?.genres[0]!} />
        </div>
      </div>
    </div>
  );
};

export default page;

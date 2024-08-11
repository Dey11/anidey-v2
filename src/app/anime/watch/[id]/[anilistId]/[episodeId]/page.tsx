import React from "react";
import VideoPlayer from "./video-player";
import EpisodesList from "./episodes-list";
import { getAnimeInfo } from "@/lib/anilistApi/getAnimeInfo";
import NameSection from "./name-section";
import { Recommendations } from "@/app/anime/info/[id]/recommendations";
import WideGenreCardSection from "@/app/anime/info/[id]/wide-genre-cards";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { episodeId: string; animeId: string };
}): Promise<Metadata> {
  const response = await getAnimeInfo(params.animeId);
  const title = response?.title?.english || response?.title?.romaji;
  const description = `Stream ${title} episode ${params.episodeId} for free, without ads.`;
  const img = response?.cover;
  return {
    title,
    description,
    openGraph: {
      images: [img!],
    },
  };
}

const page = async ({
  params,
}: {
  params: {
    id: string;
    anilistId: string;
    episodeId: string;
  };
}) => {
  const animeId = params.id;
  const anilistId = params.anilistId;
  const episodeId = params.episodeId;
  const animeInfo = await getAnimeInfo(anilistId);
  const zoroId = animeInfo?.episodes[0].id.split("$")[0];

  return (
    <div className="mx-auto max-w-[1440px] px-2 pt-20">
      <div className="justify-center gap-5 lg:flex">
        <VideoPlayer episodeId={episodeId!} />
        <EpisodesList
          animeId={animeId}
          anilistId={anilistId}
          zoroId={zoroId!}
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

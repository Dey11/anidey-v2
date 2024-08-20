import React from "react";
import VideoPlayer from "@/components/watch-page/video-player";
import EpisodesList from "@/components/watch-page/episodes-list";
import { getAnimeInfo } from "@/lib/anilistApi/getAnimeInfo";
import NameSection from "@/components/watch-page/name-section";
import { Recommendations } from "@/components/info-page/recommendations";
import WideGenreCardSection from "@/components/info-page/wide-genre-cards";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { auth } from "@/auth";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { episodeId: string; animeId: string; anilistId: string };
}): Promise<Metadata> {
  const response = await getAnimeInfo(params.anilistId);
  const title = response?.title?.english
    ? response?.title?.english
    : response?.title?.romaji;
  const description = `Stream ${title} episodes for free, without ads.`;
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
  const animeInfo = await getAnimeInfo(anilistId);
  const coverImg = animeInfo?.image;
  const session = await auth();
  const user = session?.user?.id;

  // @ts-ignore
  if (animeInfo?.message) {
    return (
      <div className="h-dvh pt-24 text-center text-3xl">Anime Not Found</div>
    );
  }

  const zoroId = animeInfo?.episodes[0].id.split("$")[0];

  return (
    <div className={`mx-auto max-w-[1440px] px-2 pt-20 ${poppins.className}`}>
      <div className="justify-center gap-5 lg:flex">
        <VideoPlayer
          user={user}
          animeId={animeId}
          coverImg={coverImg || ""}
          anilistId={anilistId}
        />
        <EpisodesList anilistId={anilistId} zoroId={zoroId!} />
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

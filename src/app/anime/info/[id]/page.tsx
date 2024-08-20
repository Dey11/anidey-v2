import { getAnimeInfo } from "@/lib/anilistApi/getAnimeInfo";
import { UpperSection } from "@/components/info-page/upper-section";
import { CharSection } from "@/components/info-page/characters-section";
import { RelatedToAnime } from "@/components/info-page/related-section";
import { Recommendations } from "@/components/info-page/recommendations";
import WideGenreCardSection from "@/components/info-page/wide-genre-cards";
import { AnimeGenres } from "@/types/anilist";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
// const dotgotchic16 = DotGothic16({ weight: "400", subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await getAnimeInfo(params.id);
  const description = response?.description;
  const title =
    response?.title?.english || response?.title?.romaji || "Not Found";
  const img = response?.cover || "";
  return {
    title,
    description,
    openGraph: {
      images: [img!],
    },
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const info = await getAnimeInfo(params.id);
  // @ts-ignore
  if (info.message) {
    console.log("Not Found");
    return (
      <div className="h-dvh pt-24 text-center md:text-3xl">Anime Not Found</div>
    );
  }

  const genre = info?.genres[0];

  return (
    <div className={`mx-auto max-w-[1440px] px-2 pt-20 ${poppins.className}`}>
      <UpperSection anilistId={params.id} info={info} />
      <CharSection info={info} />
      <RelatedToAnime info={info} />
      <div className="xl:grid xl:grid-cols-6">
        <div className="col-span-4">
          <Recommendations info={info} />
        </div>
        <div className="col-span-2 pt-3">
          <WideGenreCardSection genre={genre as AnimeGenres} />
        </div>
      </div>
    </div>
  );
};

export default page;

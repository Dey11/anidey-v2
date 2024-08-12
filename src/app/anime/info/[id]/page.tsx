import { getAnimeInfo } from "@/lib/anilistApi/getAnimeInfo";
import { UpperSection } from "./upper-section";
import { CharSection } from "./characters-section";
import { RelatedToAnime } from "./related-section";
import { Recommendations } from "./recommendations";
import WideGenreCardSection from "./wide-genre-cards";
import { AnimeGenres } from "@/types/anilist";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await getAnimeInfo(params.id);
  const description = response?.description;
  const title = response?.title.english || response?.title.romaji;
  const img = response?.cover;
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
  if (info.message) return <div>Not Found</div>;
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

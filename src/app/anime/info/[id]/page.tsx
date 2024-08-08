import { getAnimeInfo } from "@/lib/anilistApi/getAnimeInfo";
import { UpperSection } from "./upper-section";
import { CharSection } from "./characters-section";
import { RelatedToAnime } from "./related-section";
import { Recommendations } from "./recommendations";
import WideGenreCardSection from "./wide-genre-cards";
import { AnimeGenres } from "@/types/anilist";

const page = async ({ params }: { params: { id: string } }) => {
  const info = await getAnimeInfo(params.id);
  // @ts-ignore
  if (info.message) return <div>Not Found</div>;
  const jpTitle = info?.title.native;
  const genre = info?.genres[0];

  return (
    <div className="mx-auto max-w-[1440px] px-2 pt-20">
      <UpperSection info={info} />
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

{
  /* <div className="fixed left-0 bg-slate-400 text-[50px] tracking-[46px] [writing-mode:vertical-lr]">
        {jpTitle}
      </div> */
}

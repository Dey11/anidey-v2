// @ts-nocheck

import { UpperSection } from "./upper-section";
import { CharSection } from "./characters-section";
import { RelatedToAnime } from "./related-section";
import { Recommendations } from "./recommendations";
import WideGenreCardSection, { WideCard } from "./wide-genre-cards";
import { getAnimeAboutInfo } from "aniwatch";

const page = async ({ params }: { params: { id: string } }) => {
  const animeInfo = await getAnimeAboutInfo(params.id);
  console.log(animeInfo.seasons);
  if (animeInfo == null) return <div>Not Found</div>;

  return (
    <div className="mx-auto max-w-[1440px] px-2 pt-20">
      <UpperSection animeInfo={animeInfo.anime} />
      {/* <CharSection charInfo={animeInfo.anime.info.charactersVoiceActors} /> */}
      <RelatedToAnime relatedAnimeInfo={animeInfo.relatedAnimes} />
      <div className="xl:grid xl:grid-cols-6">
        <div className="col-span-4">
          <Recommendations info={info} />
        </div>
        <div className="col-span-2 pt-3">
          {/* <WideGenreCardSection genre={genre as AnimeGenres} /> */}
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

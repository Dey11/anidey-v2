import {
  RecentEpisodes,
  Recommendation,
  Relation,
  TrendingAnime,
} from "@/types/anilist";
import { Info } from "lucide-react";
import Image from "next/image";

const AnimeCard = ({
  anime,
}: {
  anime: TrendingAnime | RecentEpisodes | Relation | Recommendation;
}) => {
  return (
    <div className="xs:h-44 xs:w-28 relative h-36 w-24 transform-gpu overflow-hidden rounded-md transition-transform hover:scale-105 sm:h-56 sm:w-36 md:h-72 md:w-48 lg:h-72 lg:w-52">
      <Image
        className="h-auto w-auto object-cover"
        fill
        sizes="100%"
        alt={anime.title.english ? anime.title.english : anime.title.romaji}
        src={anime.image}
      />
      <div className="relative left-1 top-2">
        <Info size={16} />
      </div>

      <div className="hover:shadow-3xl absolute left-0 top-0 z-10 h-48 w-28 items-center justify-center bg-transparent hover:bg-black hover:bg-opacity-30 md:h-72 md:w-52"></div>
    </div>
  );
};

export default AnimeCard;

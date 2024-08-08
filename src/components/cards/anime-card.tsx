import {
  RecentEpisodes,
  Recommendation,
  Relation,
  TrendingAnime,
} from "@/types/anilist";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AnimeCard = ({
  anime,
}: {
  anime: TrendingAnime | RecentEpisodes | Relation | Recommendation;
}) => {
  return (
    <div className="relative h-44 w-28 transform-gpu overflow-hidden transition-transform hover:scale-105 sm:h-56 sm:w-36 md:h-72 md:w-48 lg:h-72 lg:w-52">
      <Image
        className="h-auto w-auto object-cover"
        fill
        sizes="100%"
        alt={anime.title.english ? anime.title.english : anime.title.romaji}
        src={anime.image}
      />
      <div className="relative left-1 top-2 z-10">
        <Info size={16} />
      </div>
    </div>
  );
};

export default AnimeCard;

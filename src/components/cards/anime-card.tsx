import {
  LatestEpisodeAnimeAniwatch,
  SpotlightAnimeAniwatch,
} from "@/lib/aniwatch";
import { Info } from "lucide-react";
import Image from "next/image";

const AnimeCard = ({ anime }: { anime: LatestEpisodeAnimeAniwatch }) => {
  return (
    <div className="relative h-44 w-28 transform-gpu overflow-hidden transition-transform hover:scale-105 sm:h-56 sm:w-36 md:h-72 md:w-48 lg:h-72 lg:w-52">
      <Image
        className="h-auto w-auto rounded-md object-cover"
        fill
        sizes="100%"
        alt={anime.name!}
        src={anime.poster!}
      />
      <div className="relative left-1 top-2 z-10">
        <Info size={16} />
      </div>
    </div>
  );
};

export default AnimeCard;

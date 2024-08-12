import { AnimeGenres, SearchResult } from "@/types/anilist";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CalendarRange, Star } from "lucide-react";
import Link from "next/link";
import { genreSearch } from "@/lib/anilistApi/search";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const WideGenreCardSection = async ({ genre }: { genre: AnimeGenres }) => {
  const searchedResults = await genreSearch(genre);
  if (searchedResults == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1
        className={`pb-5 text-center text-xl font-bold text-[#E11D48] sm:text-left ${pressStart2P.className}`}
      >
        More from {genre}
      </h1>
      {searchedResults.map((anime) => (
        <WideCard anime={anime} key={anime.id} />
      ))}
    </div>
  );
};

export default WideGenreCardSection;

export const WideCard = ({ anime }: { anime: SearchResult }) => {
  return (
    <Link href={`/anime/info/${anime.id}`}>
      <div className="relative mb-2 h-[136px] overflow-hidden rounded-sm">
        <Image
          src={anime.cover}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={anime.title.english}
          className="h-auto w-auto object-cover"
        />
        <div className="relative flex h-[136px] items-center justify-start gap-x-2 bg-white bg-opacity-25 bg-gradient-to-r backdrop-blur-[2px]">
          <div className="h-auto w-auto">
            <Image
              className="ml-2 sm:ml-5"
              src={anime.image}
              alt={anime.title.english}
              height={80}
              width={80}
            />
          </div>

          <div className="text-black">
            <h1 className="truncate pb-1 text-sm font-bold text-black sm:text-lg">
              {anime.title.english}
            </h1>

            <div className="flex gap-1">
              {anime.genres.slice(0, 2).map((genre) => (
                <Badge className="bg-violet-500 text-[10px]" key={genre}>
                  {genre}
                </Badge>
              ))}
            </div>

            <div className="flex gap-x-2 pt-10">
              <div className="flex items-center gap-x-1">
                <Star size={16} />
                <p className="text-[10px] font-bold">{anime.rating}</p>
              </div>

              <div className="flex items-center gap-x-1">
                <CalendarRange size={16} />
                <p className="text-[10px] font-bold">{anime.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

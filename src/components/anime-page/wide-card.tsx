import { fetchPopularAnime } from "@/lib/anilistApi/getLists";
import { PopularAnime } from "@/types/anilist";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { CalendarRange, Clock, Star } from "lucide-react";
import Link from "next/link";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });
// const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const WideCardSection = async () => {
  const popularAnimeList = await fetchPopularAnime(1, 5);
  if (popularAnimeList == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1
        className={`pb-7 text-xl font-bold text-[#E11D48] ${pressStart2P.className}`}
      >
        All time classics
      </h1>
      {popularAnimeList.map((anime) => (
        <WideCard anime={anime} key={anime.id} />
      ))}
    </div>
  );
};

export default WideCardSection;

const WideCard = ({ anime }: { anime: PopularAnime }) => {
  return (
    <Link href={`/anime/info/${anime.id}`}>
      <div className={`relative mb-2 h-[136px] overflow-hidden rounded-md`}>
        <Image
          src={anime.cover}
          fill
          sizes="100%"
          alt={anime.title.english ? anime.title.english : anime.title.romaji}
          className="object-cover"
        />
        <div className="relative flex h-[136px] items-center justify-start gap-x-2 bg-white bg-opacity-25 bg-gradient-to-r backdrop-blur-[2px]">
          <div className="h-auto">
            <Image
              className="ml-2 sm:ml-5"
              src={anime.image}
              alt={
                anime.title.english ? anime.title.english : anime.title.romaji
              }
              height={80}
              width={80}
            />
          </div>

          <div className="text-black">
            <h1 className="truncate pb-1 text-sm font-bold text-black sm:text-lg">
              {anime.title.english ? anime.title.english : anime.title.romaji}
            </h1>

            <div className="flex gap-1">
              {anime.genres.slice(0, 2).map((genre) => (
                <Badge className="bg-[#8F00FF] text-[10px]" key={genre}>
                  {genre}
                </Badge>
              ))}
            </div>

            <div className="flex gap-x-2 pt-10">
              {anime.duration && (
                <div className="flex items-center gap-x-1">
                  <Clock size={16} />
                  <p className="text-[10px] font-bold">{anime.duration}</p>
                </div>
              )}

              {anime.rating && (
                <div className="flex items-center gap-x-1">
                  <Star size={16} />
                  <p className="text-[10px] font-bold">{anime.rating}</p>
                </div>
              )}

              {anime.releaseDate && (
                <div className="flex items-center gap-x-1">
                  <CalendarRange size={16} />
                  <p className="text-[10px] font-bold">{anime.releaseDate}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

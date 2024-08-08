import Image from "next/image";
import { CalendarRange, Clock, Tv } from "lucide-react";
import Link from "next/link";
import { SpotlightAnimeAniwatch } from "@/lib/aniwatch";

const WideCardSection = async ({
  spotlightAnimes,
}: {
  spotlightAnimes: SpotlightAnimeAniwatch[];
}) => {
  if (spotlightAnimes == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1 className="pb-5 text-2xl font-bold text-rose-500">
        Top Picks This Month
      </h1>
      {spotlightAnimes.slice(0, 5).map((anime) => (
        <WideCard anime={anime} key={anime.id} />
      ))}
    </div>
  );
};

export default WideCardSection;

const WideCard = ({ anime }: { anime: SpotlightAnimeAniwatch }) => {
  return (
    <Link href={`/anime/info/${anime.id}`}>
      <div className="relative mb-2 h-[136px] overflow-hidden rounded-sm">
        <Image
          src={anime.poster!}
          fill
          sizes="100%"
          alt={anime.name ? anime.name : anime.jname!}
          className="object-cover"
        />
        <div className="relative flex h-[136px] items-center justify-start bg-white bg-opacity-25 bg-gradient-to-r px-4 backdrop-blur-[2px]">
          {/* <div className="h-auto">
            <Image
              className="ml-2 sm:ml-5"
              src={anime.image}
              alt={
                anime.title.english ? anime.title.english : anime.title.romaji
              }
              height={80}
              width={80}
            />
          </div> */}

          <div className="text-black">
            <h1 className="text-sm font-bold text-black sm:text-lg">
              {anime.name ? anime.name : anime.jname!}
            </h1>

            {/* <div className="flex gap-1">
              {anime.genres.slice(0, 2).map((genre) => (
                <Badge className="bg-violet-500 text-[10px]" key={genre}>
                  {genre}
                </Badge>
              ))}
            </div> */}

            <div className="flex gap-x-2 pt-10">
              {anime.otherInfo && (
                <div className="flex items-center gap-x-1">
                  <Clock size={16} />
                  <p className="text-[10px] font-bold">{anime.otherInfo[1]}</p>
                </div>
              )}

              {anime.otherInfo && (
                <div className="flex items-center gap-x-1">
                  <Tv size={16} className="pb-[2px]" />
                  <p className="text-[10px] font-bold">{anime.otherInfo[0]}</p>
                </div>
              )}

              {anime.otherInfo && (
                <div className="flex items-center gap-x-1">
                  <CalendarRange size={16} className="pb-[2px]" />
                  <p className="text-[10px] font-bold">{anime.otherInfo[2]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

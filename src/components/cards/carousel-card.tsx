import { TrendingAnime } from "@/types/anilist";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  CalendarRange,
  Clock,
  History,
  Library,
  Play,
  Star,
} from "lucide-react";
import clsx from "clsx";
import { Button } from "../ui/button";
import Link from "next/link";
import { descriptionFormatter } from "@/lib/utils";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const CarouselCard = ({ anime }: { anime: TrendingAnime }) => {
  let animeId;

  if (anime?.title?.romaji) {
    animeId = anime?.title.romaji
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");
  } else {
    animeId = anime?.title.english
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");
  }

  let ratingColor = "text-[#FFB800]";
  if (anime.rating >= 80) ratingColor = "text-[#2AF332]";
  else if (anime.rating <= 40) ratingColor = "text-[#C30000]";

  const description = descriptionFormatter(anime.description);

  return (
    <div className="relative mb-10 h-[560px] bg-[#C30000]">
      <Image
        src={anime.cover}
        fill
        alt={anime.title.english ? anime.title.english : anime.title.romaji}
        priority
        sizes="100%"
        className="object-cover"
      />
      <div className="absolute top-0 h-[560px] w-full bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute left-10 top-1/2 w-4/6">
        <h1 className="truncate text-lg font-bold lg:text-3xl">
          {anime.title.english}
        </h1>

        <div className="gap-x-4 pt-2 sm:flex">
          <div className="flex gap-x-2">
            <div>
              <Badge className="bg-[#8F00FF]">{anime.genres[0]}</Badge>
            </div>
            <div>
              <Badge className="bg-[#8F00FF]">{anime.genres[1]}</Badge>
            </div>
          </div>

          <div className="flex items-center gap-x-2 pt-2 sm:pt-0">
            {anime.releaseDate && (
              <div className="flex items-center gap-x-1 pt-2 sm:pt-0">
                <CalendarRange />
                <p className="text-xs font-bold">{anime.releaseDate}</p>
              </div>
            )}

            {anime.status && (
              <div className="flex items-center gap-x-1 pt-2 text-[#E11D48] sm:pt-0">
                <History />
                <p className="text-sm font-extrabold">{anime.status}</p>
              </div>
            )}

            {anime.popularity && (
              <div className="flex items-center pt-2 sm:pt-0">
                <Library />
                <p className="text-sm font-semibold">{anime.popularity}</p>
              </div>
            )}

            {anime.rating && (
              <div className="flex items-center gap-x-1 pt-2 sm:pt-0">
                <Star size={20} />
                <p className={clsx("text-sm font-bold", ratingColor)}>
                  {anime.rating}
                </p>
              </div>
            )}
          </div>
          {anime.duration && (
            <div className="flex items-center gap-x-1 pt-2 sm:pt-0">
              <Clock />
              <p className="text-sm font-semibold">{anime.duration} Minutes</p>
            </div>
          )}
        </div>

        <p className="hidden pt-5 md:block">
          {description.slice(0, 349) + "..."}
        </p>

        <div className="flex gap-x-4 pt-5">
          {/* <Link href={`/anime/watch/${animeId}/${anime.id}}`}>
            <Button
              size={"lg"}
              variant={"outline"}
              className="border-slate-700 font-bold text-[#C30000]"
            >
              <Play size={20} className="pr-1" />
              Play
            </Button>
          </Link> */}
          <Button
            asChild
            size={"lg"}
            variant={"outline"}
            className="border-slate-700 font-bold text-[#E11D48]"
          >
            <Link
              href={`/anime/info/${anime.id}`}
              className={`${pressStart2P.className} text-sm`}
            >
              <Play size={24} className="pr-1" />
              Play
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

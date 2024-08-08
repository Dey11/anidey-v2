// @ts-nocheck

import AnimeCard from "@/components/cards/anime-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { CalendarRange, Clock, Library, Star } from "lucide-react";
import clsx from "clsx";
import { SpotlightAnimeAniwatch, Top10AnimeAniwatchItem } from "@/lib/aniwatch";

const SingleCarouselRow = ({
  list,
}: {
  list: SpotlightAnimeAniwatch[] | Top10AnimeAniwatchItem[];
}) => {
  if (!list)
    return <div className="pt-5 text-2xl text-rose-500">No anime found...</div>;

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="mb-10">
        {list.map((anime) => (
          <CarouselItem
            className="basis-1/3 sm:basis-1/4 xl:basis-1/6"
            key={anime.id}
          >
            <Link href={`/anime/info/${anime.id}`}>
              <div className="max-h-fit max-w-fit pt-2" key={anime.id}>
                <AnimeCard anime={anime} />
                <div className="">
                  <h1 className="max-w-28 truncate pt-2 text-xs hover:text-rose-500 sm:max-w-36 sm:text-sm md:max-w-48 lg:max-w-52">
                    {anime.name}
                  </h1>
                  <div className="flex items-center gap-x-1 pt-1 sm:gap-x-2">
                    {anime.episodes && (
                      <div className="flex items-center sm:gap-x-1">
                        <Library size={16} />
                        <p className="text-[9px] sm:text-xs">
                          {anime.episodes.sub}
                        </p>
                      </div>
                    )}

                    {anime.otherInfo && (
                      <div className="flex items-center sm:gap-x-1">
                        <CalendarRange size={16} />
                        <p className="text-[9px] sm:text-xs">
                          {anime.otherInfo[2]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SingleCarouselRow;

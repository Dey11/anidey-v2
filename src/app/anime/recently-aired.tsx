import AnimeCard from "@/components/cards/anime-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Library } from "lucide-react";
import { LatestEpisodeAnimeAniwatch } from "@/lib/aniwatch";

const RecentlyAired = async ({
  list,
}: {
  list: LatestEpisodeAnimeAniwatch[];
}) => {
  if (list == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1 className="pb-3 text-2xl font-bold text-rose-500">
        Recently Aired Episodes
      </h1>

      <RecentEpsCarouselRow list={list.slice(0, 4)} />
      <RecentEpsCarouselRow list={list.slice(4, 8)} />
    </div>
  );
};

export default RecentlyAired;

const RecentEpsCarouselRow = ({
  list,
}: {
  list: LatestEpisodeAnimeAniwatch[];
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        {list.map((anime) => (
          <CarouselItem className="basis-1/3 sm:basis-1/4" key={anime.id}>
            <Link href={`/anime/info/${anime.id}`}>
              <div className="max-h-fit max-w-fit pt-2" key={anime.id}>
                <AnimeCard anime={anime} />
                <div className="mb-8">
                  <h1 className="max-w-28 truncate pt-2 text-xs hover:text-rose-500 sm:max-w-36 sm:text-sm md:max-w-48 lg:max-w-52">
                    {anime.name}
                  </h1>

                  <div className="flex items-center pt-1">
                    <Library size={16} />
                    <p className="pl-1 pt-1 text-xs">{anime.episodes.sub}</p>
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

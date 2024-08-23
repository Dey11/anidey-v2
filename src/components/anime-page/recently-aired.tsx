import { fetchRecentlyAiredEpisodes } from "@/lib/anilistApi/getLists";
import AnimeCard from "@/components/cards/anime-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RecentEpisodes } from "@/types/anilist";
import Link from "next/link";
import { Library } from "lucide-react";
import { Press_Start_2P, Poppins } from "next/font/google";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const RecentlyAired = async () => {
  const recentlyAiredList = await fetchRecentlyAiredEpisodes(1, 10);
  if (recentlyAiredList == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1
        className={`pb-2 text-center font-bold text-[#E11D48] md:text-left md:text-xl lg:pb-5 lg:pl-3 ${pressStart2P.className}`}
      >
        Recently Aired Episodes
      </h1>

      <RecentEpsCarouselRow list={recentlyAiredList.slice(0, 4)} />
      <RecentEpsCarouselRow list={recentlyAiredList.slice(4, 8)} />
    </div>
  );
};

export default RecentlyAired;

const RecentEpsCarouselRow = ({ list }: { list: RecentEpisodes[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        {list.map((anime) => (
          <CarouselItem
            className="basis-1/3 sm:basis-1/4 lg:ml-[-10px] lg:pl-10"
            key={anime.id}
          >
            <Link href={`/anime/info/${anime.id}`}>
              <div
                className="max-h-fit max-w-fit rounded-md pt-2"
                key={anime.id}
              >
                <AnimeCard anime={anime} />
                <div className={`mb-8 ${poppins.className}`}>
                  <h1 className="max-w-28 truncate pt-2 text-xs hover:text-[#E11D48] sm:max-w-36 sm:text-sm md:max-w-48 lg:max-w-52">
                    {anime.title.english}
                  </h1>

                  <div className="flex items-center pt-1">
                    <Library size={16} />
                    <p className="pl-1 pt-1 text-xs">{anime.episodeNumber}</p>
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

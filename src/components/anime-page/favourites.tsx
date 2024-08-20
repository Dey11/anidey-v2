import { getFavouriteList } from "@/actions/getWatchingList";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Poppins, Press_Start_2P } from "next/font/google";
import { CalendarRange, Info, Library } from "lucide-react";
import Image from "next/image";

type favourites = {
  id: string;
  anilistId: number;
  animeTitle: string;
  image: string | null;
  totalEpisodes: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

const poppinsSmall = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBig = Poppins({ weight: "600", subsets: ["latin"] });
const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Favourites = async () => {
  const favourites = await getFavouriteList();
  if (!favourites?.length || favourites == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1
        className={`pb-5 text-xl font-bold text-[#E11D48] ${pressStart2P.className}`}
      >
        Favourites
      </h1>

      <FavouritesRow favourites={favourites} />
    </div>
  );
};

export default Favourites;

const FavouritesRow = ({ favourites }: { favourites: favourites[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
    >
      <CarouselContent className="mb-8">
        {favourites.map((anime) => (
          <CarouselItem
            className="basis-1/3 sm:basis-1/4 xl:basis-1/6"
            key={anime.id}
          >
            <Link href={`/anime/info/${anime.anilistId}`}>
              <div
                className="max-h-fit max-w-fit rounded-md pt-2"
                key={anime.id}
              >
                <div className="relative h-44 w-28 transform-gpu overflow-hidden rounded-md transition-transform hover:scale-105 sm:h-56 sm:w-36 md:h-72 md:w-48 lg:h-72 lg:w-52">
                  <Image
                    className="h-auto w-auto object-cover"
                    fill
                    sizes="100%"
                    alt={anime.animeTitle}
                    src={anime.image!}
                  />
                  <div className="relative left-1 top-2">
                    <Info size={16} />
                  </div>

                  <div className="hover:shadow-3xl absolute left-0 top-0 z-10 h-48 w-28 items-center justify-center bg-transparent hover:bg-black hover:bg-opacity-30 md:h-72 md:w-52"></div>
                </div>
                <div className={`${poppinsSmall.className}`}>
                  <h1
                    className={`max-w-28 truncate pt-2 text-xs hover:text-[#E11D48] sm:max-w-36 sm:text-sm md:max-w-48 lg:max-w-52 ${poppinsBig.className}`}
                  >
                    {anime.animeTitle}
                  </h1>
                  {
                    <div className="flex items-center gap-x-1 pt-1 sm:gap-x-2">
                      {anime.totalEpisodes && (
                        <div className="flex items-center sm:gap-x-1">
                          <Library size={16} className="" />
                          <p className="pt-[2px] text-[9px] sm:text-xs">
                            {anime.totalEpisodes}
                          </p>
                        </div>
                      )}

                      {anime.updatedAt && (
                        <div className="flex items-center sm:gap-x-1">
                          <CalendarRange size={16} />
                          <p className="pt-[2px] text-[9px] sm:text-xs">
                            {anime.updatedAt.getDate()}/
                            {anime.updatedAt.getMonth() + 1}/
                            {anime.updatedAt.getFullYear()}
                          </p>
                        </div>
                      )}
                    </div>
                  }
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

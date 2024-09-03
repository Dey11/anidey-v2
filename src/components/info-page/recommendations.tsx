import AnimeCard from "@/components/cards/anime-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimeInfo, Recommendation } from "@/types/anilist";
import clsx from "clsx";
import { Library } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppinsHeading = Poppins({ weight: ["600"], subsets: ["latin"] });

export const Recommendations = async ({ info }: { info: AnimeInfo | null }) => {
  const color = "text-[" + info?.color + "]";

  if (!info?.recommendations.length) return <div></div>;
  const secondCarousel = Math.min(9, info?.recommendations.length);

  return (
    <div className="pt-2">
      {color && (
        <h1
          className={`truncate text-center text-xl font-bold tracking-tight text-[#E11D48] sm:text-left md:text-3xl ${poppinsHeading.className}`}
        >
          More like{" "}
          <span className={clsx(color)}>
            {info?.title.english ? info?.title.english : info?.title.romaji}
          </span>
        </h1>
      )}
      <div className="overflow-x-hidden overflow-y-hidden">
        <RecommendationsCarouselRow list={info?.recommendations.slice(0, 4)!} />
        <RecommendationsCarouselRow
          list={info?.recommendations.slice(5, secondCarousel)!}
        />
      </div>
    </div>
  );
};

const RecommendationsCarouselRow = ({ list }: { list: Recommendation[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        // loop: true,
      }}
    >
      <CarouselContent className="">
        {list.map((anime) => (
          <CarouselItem
            className="basis-1/3 pt-3 sm:basis-1/4 lg:ml-[-10px] lg:pl-10 lg:pt-4"
            key={anime.id}
          >
            <Link href={`/anime/info/${anime.id}`}>
              <div className="max-h-fit max-w-fit" key={anime.id}>
                <AnimeCard anime={anime} />
                <div className="mb-10">
                  <h1 className="max-w-28 truncate pt-2 text-xs hover:text-[#E11D48] sm:max-w-36 sm:text-sm md:max-w-48 lg:max-w-52">
                    {anime.title.english
                      ? anime.title.english
                      : anime.title.romaji}
                  </h1>

                  <div className="flex items-center pt-1">
                    {anime.episodes && (
                      <>
                        <Library size={16} className="pt-[1px]" />
                        <p className="pl-1 pt-1 text-xs">{anime.episodes}</p>
                      </>
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

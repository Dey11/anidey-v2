"use client";

import CarouselCard from "@/components/cards/carousel-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { fetchTrendingAnime } from "@/lib/anilistApi/getLists";
import { TrendingAnime } from "@/types/anilist";
import { useEffect, useRef, useState } from "react";

const TopCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [data, setData] = useState<TrendingAnime[]>([]);

  const fetchSlides = async () => {
    try {
      const resp = await fetchTrendingAnime();
      if (resp == null) throw Error;
      setData(resp);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <div className="h-[560px] overflow-hidden">
      <Carousel
        // plugins={[plugin.current]}
        opts={{
          // align: "center",
          slidesToScroll: 1,
          loop: true,
        }}
      >
        <CarouselContent>
          {data.map((anime) => (
            <CarouselItem className="basis-full" key={anime.id}>
              <CarouselCard anime={anime} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TopCarousel;

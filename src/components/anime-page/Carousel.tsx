"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BANNERS } from "@/lib/constants";
import clsx from "clsx";
import { CalendarRange, History, Play, Star } from "lucide-react";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const rightArrowStyles = {
  top: "50%",
  transform: "translate(0, -50%)",
  right: "10px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 20,
  cursor: "pointer",
  opacity: 0.5,
};

const leftArrowStyles = {
  top: "50%",
  transform: "translate(0, -50%)",
  left: "10px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 20,
  cursor: "pointer",
  opacity: 0.5,
};

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  // transition: "all 0.1s",
  zIndex: 1,
  backgroundImage: `url(${BANNERS[0].url})`,
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  zIndex: 20,
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let ratingColor = "text-[#FFB800]";
  if (BANNERS[currentIndex].rating >= 80) ratingColor = "text-[#2AF332]";
  else if (BANNERS[currentIndex].rating <= 40) ratingColor = "text-[#C30000]";

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? BANNERS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === BANNERS.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${BANNERS[currentIndex].url})`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-[100%]">
      <div>
        <div
          onClick={goToPrevious}
          className="absolute"
          style={leftArrowStyles}
        >
          ❰
        </div>
        <div onClick={goToNext} className="absolute" style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div className="flex" style={slideStylesWidthBackground}></div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {BANNERS.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-transparent to-black">
        <div className="absolute left-10 top-2/4 w-4/6 lg:left-20">
          <h1 className="truncate text-lg font-bold lg:text-3xl">
            {BANNERS[currentIndex].title}
          </h1>

          <div className="gap-x-4 pt-2 sm:flex">
            <div className="flex gap-x-2">
              <div>
                <Badge className="bg-[#8F00FF]">
                  {BANNERS[currentIndex].genres[0]}
                </Badge>
              </div>
              <div>
                <Badge className="bg-[#8F00FF]">
                  {BANNERS[currentIndex].genres[1]}
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-x-2 pt-2 sm:pt-0">
              {BANNERS[currentIndex].date && (
                <div className="flex items-center gap-x-1 pt-2 sm:pt-0">
                  <CalendarRange className="h-4 w-4 lg:h-5 lg:w-5" />
                  <p className="text-xs font-bold lg:text-sm">
                    {BANNERS[currentIndex].date}
                  </p>
                </div>
              )}

              {BANNERS[currentIndex].status && (
                <div className="flex items-center gap-x-1 pt-2 text-[#E11D48] sm:pt-0">
                  <History className="h-4 w-4 lg:h-5 lg:w-5" />
                  <p className="text-xs font-extrabold lg:text-sm">
                    {BANNERS[currentIndex].status}
                  </p>
                </div>
              )}

              {BANNERS[currentIndex].rating && (
                <div className="flex items-center gap-x-1 pt-2 sm:pt-0">
                  <Star className="h-4 w-4 lg:h-5 lg:w-5" />
                  <p
                    className={clsx(
                      "text-xs font-bold lg:text-sm",
                      ratingColor,
                    )}
                  >
                    {BANNERS[currentIndex].rating}
                  </p>
                </div>
              )}
            </div>
            {/* {anime.duration && (
              <div className="flex items-center gap-x-1 pt-2 sm:pt-0">
                <Clock />
                <p className="text-sm font-semibold">
                  {anime.duration} Minutes
                </p>
              </div>
            )} */}
          </div>

          <p className="hidden pt-5 md:block">
            {BANNERS[currentIndex].description.slice(0, 250) + "..."}
          </p>

          <div className="flex gap-x-4 pt-2">
            <Button
              asChild
              variant={"outline"}
              className="border-slate-700 text-xs font-bold text-[#E11D48] lg:text-base"
            >
              <Link
                href={`/anime/${BANNERS[currentIndex].link}`}
                className={`${pressStart2P.className} text-sm`}
              >
                <Play size={24} className="pr-1" />
                Play
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

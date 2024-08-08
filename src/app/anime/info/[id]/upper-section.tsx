import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { descriptionFormatter } from "@/lib/utils";
import { AnimeInfo } from "@/types/anilist";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const UpperSection = async ({ info }: { info: AnimeInfo | null }) => {
  let animeId;

  if (info?.title?.romaji) {
    animeId = info?.title.romaji
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");
  } else {
    animeId = info?.title.english
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");
  }

  return (
    <div className="gap-x-5 sm:flex">
      <div className="relative mx-auto h-96 w-72 bg-slate-400">
        <Image
          src={info?.image as string}
          fill={true}
          className="object-cover"
          alt={
            (info?.title.english as string)
              ? (info?.title.english as string)
              : (info?.title.romaji as string)
          }
        />
      </div>

      <div className="w-full">
        <h1 className="pt-5 text-center text-2xl sm:pt-0 sm:text-left">
          {info?.title.english ? info?.title.english : info?.title.romaji}
        </h1>

        <div className="pt-6">
          {info?.genres.slice(0, 4).map((genre) => (
            <Badge
              key={genre}
              className="mr-2 bg-violet-500 text-[10px] font-bold"
            >
              {genre}
            </Badge>
          ))}
        </div>

        <div className="flex w-full flex-row justify-between pt-5 text-sm font-light uppercase sm:justify-normal sm:gap-x-40">
          <div className="flex flex-col gap-y-3">
            <p>
              Rating: <span className="text-green-500">{info?.rating}</span>
            </p>

            <p>Status: {info?.status}</p>

            <p>
              Aired: {info?.startDate.day}. {info?.startDate.month}.{" "}
              {info?.startDate.year} - {info?.endDate.day}.{" "}
              {info?.endDate.month}. {info?.endDate.year}
            </p>

            <p>Episodes: {info?.totalEpisodes}</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p>Studio: {info?.studios}</p>

            <p>Season: {info?.season}</p>
          </div>
        </div>

        <div className="pt-5 text-sm font-light">
          <ScrollArea className="sm:h-20 md:h-24">
            <p className="leading-6 tracking-wider">
              <span className="uppercase">Description:</span>{" "}
              <span>{descriptionFormatter(info?.description as string)}</span>
            </p>
          </ScrollArea>
        </div>

        <div className="">
          <Button
            className="mx-auto mt-3 flex gap-1 font-bold text-rose-500 sm:mx-0 sm:w-20"
            variant={"secondary"}
            asChild
          >
            <Link
              href={`/anime/watch/${animeId}/${animeId}-episode-1/${info?.id}`}
            >
              <Play size={15} />
              Play
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

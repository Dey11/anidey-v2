import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimeInfoAniwatchItem, MoreInfoAniwatchItem } from "@/lib/aniwatch";
import { descriptionFormatter } from "@/lib/utils";
import { AnimeInfo } from "@/types/anilist";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const UpperSection = async ({
  animeInfo,
}: {
  animeInfo: { info: AnimeInfoAniwatchItem; moreInfo: MoreInfoAniwatchItem };
}) => {
  let animeId = animeInfo.info.id;
  let info = animeInfo.info;
  let moreInfo = animeInfo.moreInfo;

  return (
    <div className="gap-x-5 sm:flex">
      <div className="relative mx-auto h-96 w-72 bg-slate-400">
        <Image
          src={info?.poster!}
          fill={true}
          className="object-cover"
          alt={info?.name as string}
        />
      </div>

      <div className="w-full">
        <h1 className="pt-5 text-center text-2xl sm:pt-0 sm:text-left">
          {info?.name}
        </h1>

        <div className="pt-6">
          {moreInfo &&
            moreInfo.genres!.slice(0, 4).map((genre) => (
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
              Rating:{" "}
              <span className="text-green-500">
                {info.stats.rating ? info?.stats.rating : "NA"}
              </span>
            </p>

            <p>Status: {moreInfo?.status ? moreInfo?.status : "NA"}</p>

            <p>Aired: {moreInfo?.aired ? moreInfo?.aired : "NA"}</p>

            <p>
              Episodes:{" "}
              {info?.stats?.episodes?.sub ? info?.stats?.episodes?.sub : "NA"}
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p>Studio: {moreInfo?.studios}</p>

            {/* <p>Season: {info?.season}</p> */}
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
            <Link href={`/anime/watch/${animeId}`}>
              {/* <Link
              href={`/anime/watch/${animeId}/${animeId}-episode-1/${info?.id}`}
            > */}
              <Play size={15} />
              Play
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

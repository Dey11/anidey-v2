import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getEpisodeList } from "@/lib/anilistApi/getStreamingLink";
import { descriptionFormatter } from "@/lib/utils";
import { AnimeInfo } from "@/types/anilist";
import { Play } from "lucide-react";
import {
  DotGothic16,
  Montserrat_Alternates,
  Press_Start_2P,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dotgotchic16 = DotGothic16({ weight: "400", subsets: ["latin"] });
const mont = Montserrat_Alternates({ weight: "400", subsets: ["latin"] });
const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const UpperSection = async ({
  info,
  anilistId,
}: {
  anilistId: string;
  info: AnimeInfo | null;
}) => {
  let animeId = info?.episodes[0]?.id.split("$")[0];
  let episodeId;
  if (!animeId) {
    episodeId = null;
  } else {
    episodeId = await getEpisodeList(animeId!);
  }
  return (
    <div className={`gap-x-5 sm:flex`}>
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
        <h1
          className={`pt-5 text-center text-2xl sm:pt-0 sm:text-left ${mont.className}`}
        >
          {info?.title.english ? info?.title.english : info?.title.romaji}
        </h1>

        <div className="pt-6">
          {info?.genres.slice(0, 4).map((genre) => (
            <Badge
              key={genre}
              className="mr-2 bg-[#8F00FF] text-[10px] font-bold"
            >
              {genre}
            </Badge>
          ))}
        </div>

        <div
          className={`flex w-full flex-row justify-between pt-5 text-sm font-light uppercase sm:justify-normal sm:gap-x-40 ${dotgotchic16.className}`}
        >
          <div className="flex flex-col gap-y-3">
            <p>
              Rating: <span className="text-[#2AF332]">{info?.rating}</span>
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
          <ScrollArea className={`sm:h-20 md:h-24 ${dotgotchic16.className}`}>
            <p className="leading-6 tracking-wider">
              <span className="uppercase">Description:</span>{" "}
              <span>{descriptionFormatter(info?.description as string)}</span>
            </p>
          </ScrollArea>
        </div>

        <div className="">
          {episodeId ? (
            <Button
              className={`mx-auto mt-3 flex gap-1 font-bold text-[#E11D48] sm:mx-0 sm:w-20 ${pressStart2P.className}`}
              variant={"secondary"}
              asChild
            >
              <Link
                href={`/anime/watch/${animeId}/${anilistId}/${episodeId.episodes[0].episodeId}`}
              >
                <Play size={15} />
                Play
              </Link>
            </Button>
          ) : (
            <div className="font-semibold text-[#E11D48]">
              Sorry, no episodes available for this anime
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

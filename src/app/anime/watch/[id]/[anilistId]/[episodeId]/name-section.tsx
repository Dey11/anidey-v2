import { AnimeInfo } from "@/types/anilist";
import { Bell, Flag, Info } from "lucide-react";

const NameSection = ({ animeInfo }: { animeInfo: AnimeInfo }) => {
  let nextEpisode;
  if (animeInfo.status == "Ongoing") {
    var timestamp = animeInfo.nextAiringEpisode!.airingTime!.valueOf() * 1000;
    var todate = new Date(timestamp).getDate();
    var tomonth = new Date(timestamp).getMonth() + 1;
    var toyear = new Date(timestamp).getFullYear();
    var original_date = todate + "/" + tomonth + "/" + toyear;
    nextEpisode = original_date;
  } else {
    nextEpisode = "N/A";
  }

  return (
    <div className="flex w-full max-w-[1100px] justify-between">
      <div className="pt-5">
        <h2 className="text-md">You're watching</h2>
        <h1 className="text-xl">
          {animeInfo?.title?.english
            ? animeInfo?.title?.english
            : animeInfo?.title?.romaji}
        </h1>
        <div className="flex items-center gap-x-1 pt-5 text-sm">
          <Bell size={16} />
          {nextEpisode == "N/A" ? (
            <p>This anime has finished airing.</p>
          ) : (
            <p>
              The next episode will be aired on {nextEpisode.toLocaleString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-x-2 pt-5">
        <Info size={16} />
        {/* <Share2 size={16} /> */}
        <Flag size={16} />
      </div>
    </div>
  );
};

export default NameSection;

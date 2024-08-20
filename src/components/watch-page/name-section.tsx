import ReportDialog from "@/components/misc/report-bug";
import { AnimeInfo } from "@/types/anilist";
import { Bell } from "lucide-react";
import InfoPageBtn from "./info-page-btn";
import ShareBtn from "../misc/share-btn";

const NameSection = ({ animeInfo }: { animeInfo: AnimeInfo }) => {
  let nextEpisode;
  if (animeInfo.status == "Ongoing") {
    if (animeInfo.nextAiringEpisode?.airingTime) {
      var timestamp = animeInfo.nextAiringEpisode!.airingTime!.valueOf() * 1000;
      var todate = new Date(timestamp).getDate();
      var tomonth = new Date(timestamp).getMonth() + 1;
      var toyear = new Date(timestamp).getFullYear();
      var original_date = todate + "/" + tomonth + "/" + toyear;
      nextEpisode = original_date;
    } else {
      nextEpisode = "N/A";
    }
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
        <InfoPageBtn anilistId={animeInfo.id} />
        <ShareBtn />
        <ReportDialog />
      </div>
    </div>
  );
};

export default NameSection;

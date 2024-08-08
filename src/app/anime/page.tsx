import { getHomePage } from "aniwatch";
import RecentlyAired from "./recently-aired";
import TopCarousel from "./top-carousel";
import TopPicks from "./top-picks";
import WideCardSection from "@/app/anime/wide-card";

const page = async () => {
  const animeList = await getHomePage();

  return (
    <div>
      <TopCarousel />
      <div className="mx-auto max-w-[1440px]">
        <TopPicks
          top10Animes={animeList.top10Animes}
          // spotlightAnimes={animeList.spotlightAnimes}
        />
        <div className="xl:grid xl:grid-cols-6">
          <div className="col-span-4">
            <RecentlyAired list={animeList.latestEpisodeAnimes} />
          </div>
          <div className="col-span-2">
            <WideCardSection spotlightAnimes={animeList.spotlightAnimes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

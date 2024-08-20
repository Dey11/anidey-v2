import { Metadata } from "next";
import RecentlyAired from "../../components/anime-page/recently-aired";
import TopCarousel from "../../components/anime-page/top-carousel";
import TopPicks from "../../components/anime-page/top-picks";
import WideCardSection from "@/components/anime-page/wide-card";
import { Suspense } from "react";
import ContinueWatching from "../../components/anime-page/continue-watching";
import Favourites from "@/components/anime-page/favourites";

export const metadata: Metadata = {
  title: "Explore Anidey",
  description:
    "Browse through a carefully curated collection of featured, top airing and recent anime episodes",
};

const page = () => {
  return (
    <div>
      <Suspense>
        <TopCarousel />
      </Suspense>
      <div className="mx-auto max-w-[1440px]">
        <Suspense>
          <ContinueWatching />
        </Suspense>
        <Suspense>
          <Favourites />
        </Suspense>
        <Suspense>
          <TopPicks />
        </Suspense>
        <div className="xl:grid xl:grid-cols-6">
          <div className="col-span-4">
            <Suspense fallback={<div>Loading...</div>}>
              <RecentlyAired />
            </Suspense>
          </div>
          <div className="col-span-2">
            <Suspense fallback={<div>Loading...</div>}>
              <WideCardSection />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

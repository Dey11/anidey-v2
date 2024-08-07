import RecentlyAired from "./recently-aired";
import TopCarousel from "./top-carousel";
import TopPicks from "./top-picks";
import WideCardSection from "@/app/anime/wide-card";

const page = () => {
  return (
    <div>
      <TopCarousel />
      <div className="mx-auto max-w-[1440px]">
        <TopPicks />
        <div className="xl:grid xl:grid-cols-6">
          <div className="col-span-4">
            <RecentlyAired />
          </div>
          <div className="col-span-2">
            <WideCardSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

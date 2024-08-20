import { fetchTrendingAnime } from "@/lib/anilistApi/getLists";
import SingleCarouselRow from "@/components/misc/carousel-row";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const TopPicks = async () => {
  const trendingList = await fetchTrendingAnime(1, 12);
  if (trendingList == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1
        className={`pb-5 text-xl font-bold text-[#E11D48] ${pressStart2P.className}`}
      >
        Top Picks This Month
      </h1>

      <SingleCarouselRow list={trendingList.slice(0, 6)} />
      <SingleCarouselRow list={trendingList.slice(6, 12)} />
    </div>
  );
};

export default TopPicks;

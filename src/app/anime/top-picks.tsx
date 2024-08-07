import { fetchTrendingAnime } from "@/lib/anilistApi/getLists";
import SingleCarouselRow from "@/components/carousel-row";
import { getHomePage } from "aniwatch";

const TopPicks = async () => {
  const test = await getHomePage();
  console.log(test.spotlightAnimes);

  const trendingList = await fetchTrendingAnime(1, 12);
  if (trendingList == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1 className="pb-5 text-2xl font-bold text-rose-500">
        Top Picks This Month
      </h1>

      <SingleCarouselRow list={trendingList.slice(0, 6)} />
      <SingleCarouselRow list={trendingList.slice(6, 12)} />
    </div>
  );
};

export default TopPicks;

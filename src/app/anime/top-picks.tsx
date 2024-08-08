import SingleCarouselRow from "@/components/carousel-row";
import { Top10AnimeAniwatchItem } from "@/lib/aniwatch";
import { getHomePage } from "aniwatch";

const TopPicks = async ({
  top10Animes,
}: {
  top10Animes: {
    week: Top10AnimeAniwatchItem[];
    month: Top10AnimeAniwatchItem[];
  };
}) => {
  const animeList = await getHomePage();

  if (animeList == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1 className="pb-3 text-2xl font-bold text-rose-500">
        Top Picks This Week
      </h1>
      <SingleCarouselRow list={top10Animes.week.slice(0, 6)} />

      <h1 className="pb-3 text-2xl font-bold text-rose-500">
        Top Picks This Month
      </h1>
      <SingleCarouselRow list={top10Animes.month.slice(0, 6)} />
    </div>
  );
};

export default TopPicks;

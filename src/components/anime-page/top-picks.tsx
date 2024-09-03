import { fetchTrendingAnime } from "@/lib/anilistApi/getLists";
import SingleCarouselRow from "@/components/misc/carousel-row";
import { Poppins } from "next/font/google";

const poppinsHeading = Poppins({ weight: ["600"], subsets: ["latin"] });

const TopPicks = async () => {
  const trendingList = await fetchTrendingAnime(1, 12);
  if (trendingList == null) return <div></div>;

  return (
    <div className="mx-2 overflow-x-hidden">
      <h1
        className={`pb-2 text-center text-xl font-bold tracking-tight text-[#E11D48] md:text-left md:text-3xl lg:pb-3 lg:pl-3 ${poppinsHeading.className}`}
      >
        Top Picks This Month
      </h1>

      <SingleCarouselRow list={trendingList.slice(0, 6)} />
      <SingleCarouselRow list={trendingList.slice(6, 12)} />
    </div>
  );
};

export default TopPicks;

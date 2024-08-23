import SingleCarouselRow from "@/components/misc/carousel-row";
import { AnimeInfo } from "@/types/anilist";
import clsx from "clsx";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const RelatedToAnime = async ({ info }: { info: AnimeInfo | null }) => {
  const color = "text-[#E11D48]";

  if (info?.relations?.length === 0) return <div className="pt-12"></div>;

  return (
    <div className="pt-12">
      <h1
        className={`truncate text-center font-bold text-[#E11D48] sm:text-left md:text-xl ${pressStart2P.className}`}
      >
        Related to{" "}
        <span className={clsx(color)}>
          {info?.title.english ? info?.title.english : info?.title.romaji}
        </span>
      </h1>

      <div className="overflow-x-hidden pt-3 lg:pt-6">
        <SingleCarouselRow list={info?.relations!} />
      </div>
    </div>
  );
};

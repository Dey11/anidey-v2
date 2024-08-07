import SingleCarouselRow from "@/components/carousel-row";
import { AnimeInfo } from "@/types/anilist";
import clsx from "clsx";

export const RelatedToAnime = async ({ info }: { info: AnimeInfo | null }) => {
  const color = "text-[" + info?.color + "]";

  return (
    <div className="pt-12">
      <h1 className="text-center text-2xl font-bold text-red-500 sm:text-left">
        Related to{" "}
        <span className={clsx(color)}>
          {info?.title.english ? info?.title.english : info?.title.romaji}
        </span>
      </h1>

      <div className="overflow-x-hidden pt-6">
        <SingleCarouselRow list={info?.relations!} />
      </div>
    </div>
  );
};

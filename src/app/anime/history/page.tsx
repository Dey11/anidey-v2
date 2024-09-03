import { Poppins } from "next/font/google";
import Link from "next/link";
import { CalendarRange, Info, Library, TvMinimalPlay } from "lucide-react";
import { getHistoryList } from "@/actions/getWatchingList";
import Image from "next/image";
import { auth } from "@/auth";
import { SignIn } from "@/components/custom-ui/sign-in-btn";

const poppinsSmall = Poppins({ weight: "400", subsets: ["latin"] });
const poppinsBig = Poppins({ weight: "600", subsets: ["latin"] });
const poppinsHeading = Poppins({ weight: ["600"], subsets: ["latin"] });

const page = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId)
    return (
      <div className="mx-auto flex min-h-dvh max-w-[1440px] items-center justify-center gap-x-5 text-2xl">
        Please Sign In to continue
        <SignIn />
      </div>
    );
  const watchingList = await getHistoryList();
  if (!watchingList?.length || watchingList == null)
    return (
      <div className="mx-auto flex h-dvh max-w-[1440px] items-center justify-center gap-x-5 text-2xl">
        Nothing to show here. Watch some episode and it'll appear here.
      </div>
    );

  return (
    <div className="mx-auto min-h-dvh max-w-[1440px] px-1 pt-20">
      <div
        className={`${poppinsHeading.className} flex items-center justify-center gap-x-2 px-2 pb-2 text-xl font-bold tracking-tight text-[#E11D48] md:text-3xl lg:justify-start lg:pb-5`}
      >
        <TvMinimalPlay size={28} className="pb-[1px]" />
        Watch History
      </div>
      <div className="grid grid-cols-3 place-items-center sm:grid-cols-4 xl:grid-cols-6">
        {watchingList.map((anime) => (
          <Link
            className="pb-5"
            key={anime.id}
            href={`/anime/watch/${anime.animeId}/${anime.anilistId}/${anime.episodeId}`}
          >
            <div className="max-h-fit max-w-fit rounded-md pt-2" key={anime.id}>
              <div className="relative h-44 w-28 transform-gpu overflow-hidden rounded-md transition-transform hover:scale-105 sm:h-56 sm:w-36 md:h-72 md:w-48 lg:h-72 lg:w-52">
                <Image
                  className="h-auto w-auto object-cover"
                  fill
                  sizes="100%"
                  alt={anime.title}
                  src={anime.image!}
                />
                <div className="relative left-1 top-2">
                  <Info size={16} />
                </div>

                <div className="hover:shadow-3xl absolute left-0 top-0 z-10 h-48 w-28 items-center justify-center bg-transparent hover:bg-black hover:bg-opacity-30 md:h-72 md:w-52"></div>

                <div
                  className={`absolute bottom-0 h-[4px] bg-red-500`}
                  style={{
                    width: `${(anime.timestamp / anime.duration) * 100}%`,
                  }}
                ></div>
              </div>
              <div className={`${poppinsSmall.className}`}>
                <h1
                  className={`max-w-28 truncate pt-2 text-xs text-[#E11D48] sm:max-w-36 sm:text-sm md:max-w-48 lg:max-w-52 ${poppinsBig.className}`}
                >
                  {anime.title}
                </h1>
                {
                  <div className="flex items-center gap-x-1 pt-1 sm:gap-x-2">
                    {anime.episodeNo && (
                      <div className="flex items-center sm:gap-x-1">
                        <Library size={16} className="" />
                        <p className="pt-[2px] text-[9px] sm:text-xs">
                          {anime.episodeNo}
                        </p>
                      </div>
                    )}

                    {anime.updatedAt && (
                      <div className="flex items-center sm:gap-x-1">
                        <CalendarRange size={16} />
                        <p className="pt-[2px] text-[9px] sm:text-xs">
                          {anime.updatedAt.getDate()}/
                          {anime.updatedAt.getMonth() + 1}/
                          {anime.updatedAt.getFullYear()}
                        </p>
                      </div>
                    )}
                  </div>
                }
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;

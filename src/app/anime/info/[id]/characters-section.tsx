import { AnimeInfo } from "@/types/anilist";
import Image from "next/image";

export const CharSection = ({ info }: { info: AnimeInfo | null }) => {
  if (info?.characters.length === 0) return <div></div>;

  return (
    <div className="pt-12">
      <h1 className="text-center text-2xl font-bold tracking-wide text-yellow-500 sm:text-left">
        Characters & Voice Actors
      </h1>

      <div className="grid grid-cols-2 justify-items-center gap-y-5 pt-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {info?.characters.slice(0, 8).map((char) => {
          return (
            <VoiceActorDiv
              key={char.id}
              characterName={char?.name.full || ""}
              vaName={char.voiceActors[0]?.name.full || ""}
              characterImage={char?.image || ""}
              vaImage={char.voiceActors[0]?.image || ""}
            />
          );
        })}
      </div>
    </div>
  );
};

const VoiceActorDiv = ({
  characterName,
  vaName,
  characterImage,
  vaImage,
}: {
  characterName: string;
  vaImage: string;
  vaName: string;
  characterImage: string;
}) => {
  if (!characterImage || !vaImage || !characterName || !vaName)
    return <div className="text-xl text-rose-500"></div>;

  return (
    <div className="relative h-96 w-32 rounded-[50px] bg-rose-600 text-center font-semibold text-black sm:w-36">
      <div className="w-full p-2">
        <Image
          className="mx-auto rounded-2xl pt-2"
          src={characterImage}
          alt={characterName}
          width={60}
          height={60}
        />
        <p className="text-wrap pt-2">{characterName.split(" ")[0]}</p>
        <p className="text-wrap">{characterName.split(" ")[1]}</p>
      </div>
      <div className="absolute top-1/2 mx-auto w-full p-2">
        <Image
          className="mx-auto rounded-2xl"
          src={vaImage}
          alt={vaName[0]}
          width={60}
          height={60}
        />
        <p className="text-wrap pt-2">{vaName.split(" ")[0]}</p>
        <p className="text-wrap">{vaName.split(" ")[1]}</p>
      </div>
    </div>
  );
};

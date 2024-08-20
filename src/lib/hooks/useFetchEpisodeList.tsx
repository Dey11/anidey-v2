import { useEffect, useState } from "react";
import {
  AniwatchEpisodeList,
  getEpisodeList,
} from "../anilistApi/getStreamingLink";
import { useSearchParams } from "next/navigation";

export default function useFetchEpisodeList(
  zoroId: string,
  animeId: string,
  searchParams: URLSearchParams,
) {
  const [episodes, setEpisodes] = useState<AniwatchEpisodeList>();
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [error, setError] = useState<boolean>(false);

  const episodeIdOfAnime = `${zoroId}?ep=${searchParams.get("ep")}`;

  const fetchEpisodes = async () => {
    try {
      const episodeList = await getEpisodeList(zoroId);
      if (episodeList) {
        setEpisodes(episodeList);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [zoroId]);

  return { episodes, viewMode, setViewMode, error, episodeIdOfAnime };
}

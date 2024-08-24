import { useEffect, useState } from "react";
import {
  StreamEpisodeLink,
  getStreamingLinks,
} from "../anilistApi/getStreamingLink";

export default function useFetchStreamingLinks(
  episodeId: string,
  searchParams: URLSearchParams,
  medium: "sub" | "dub",
) {
  const [streamingLinks, setStreamingLinks] =
    useState<StreamEpisodeLink | null>(null);

  const getLinks = async () => {
    try {
      const links = await getStreamingLinks(episodeId, medium);
      setStreamingLinks(links);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLinks();
  }, [searchParams.get("ep"), medium]);
  return streamingLinks;
}

export const getStreamingLinks = async (
  zoroEpisodeId: string,
  medium: "sub" | "dub" = "sub",
): Promise<StreamEpisodeLink | null> => {
  const url = `${process.env.NEXT_PUBLIC_STREAM_URL}/episode-srcs?id=${zoroEpisodeId}&category=${medium}`;
  try {
    const fetchData = await fetch(url, {
      cache: "force-cache",
    });
    const response = await fetchData.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getEpisodeList = async (
  zoroId: string,
): Promise<StreamEpisodeList | null> => {
  const url = `${process.env.NEXT_PUBLIC_STREAM_URL}/episodes/${zoroId}`;
  try {
    const fetchData = await fetch(url, {
      next: { revalidate: 3600 },
    });
    const response = await fetchData.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export interface StreamEpisodeLink {
  tracks: {
    file: string;
    label: string;
    kind: string;
    default?: boolean;
  }[];
  intro: {
    start: number;
    end: number;
  };
  outro: {
    start: number;
    end: number;
  };
  sources: {
    url: string;
    type: string;
  }[];
  anilistID: string;
  malId: string;
}

export interface StreamEpisodeList {
  totalEpisodes: number;
  episodes: {
    title: string;
    episodeId: string;
    number: number;
    isFiller: boolean;
  }[];
}

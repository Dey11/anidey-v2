export const getStreamingLinks = async (
  zoroEpisodeId: string,
): Promise<AniwatchEpisodeLink | null> => {
  const url = `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/episode-srcs?id=${zoroEpisodeId}`;
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
): Promise<AniwatchEpisodeList | null> => {
  const url = `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/episodes/${zoroId}`;
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

export interface AniwatchEpisodeLink {
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
  anilistId: string;
  malId: string;
}

export interface AniwatchEpisodeList {
  totalEpisodes: number;
  episodes: {
    title: string;
    episodeId: string;
    number: number;
    isFiller: boolean;
  }[];
}

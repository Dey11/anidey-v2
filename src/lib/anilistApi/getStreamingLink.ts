interface GogoanimeEpisodeLink {
  sources: {
    url: string;
    isM3U8: boolean;
    quality: string;
  }[];
  download: string;
}

export const gogoStreamingLinks = async (
  episodeId: string,
  server = "gogocdn",
): Promise<GogoanimeEpisodeLink[] | null> => {
  const url = `${process.env.NEXT_PUBLIC_GOGOANIME_URL}${episodeId}?server=${server}`;

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

// http://0.0.0.0:5000/meta/anilist/episodes/152681

export const getStreamingLinks = async (
  anilistId: string,
): Promise<AnilistEpisodeLink[] | null> => {
  const url = `http://0.0.0.0:5000/meta/anilist/episodes/${anilistId}`;
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

export interface AnilistEpisodeLink {
  id: string;
  title: string;
  image: string;
  imageHash: string;
  number: number;
  createdAt: string;
  description: string;
  url: string;
}

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
  server = "gogocdn"
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

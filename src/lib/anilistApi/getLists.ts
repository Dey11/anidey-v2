import { PopularAnime, RecentEpisodes, TrendingAnime } from "@/types/anilist";
// todo: use classes

export const fetchTrendingAnime = async (
  page = 1
): Promise<TrendingAnime[] | null> => {
  const perPage = 10;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}trending?page=${page}&perPage=${perPage}`;
  try {
    const fetchData = await fetch(url, {
      next: { revalidate: 86400 },
    });
    const response = await fetchData.json();
    return response.results;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchPopularAnime = async (
  page = 1
): Promise<PopularAnime[] | null> => {
  const perPage = 10;
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}popular?page=${page}&perPage=${perPage}`;

  try {
    const fetchData = await fetch(url, {
      cache: "force-cache",
    });
    const response = await fetchData.json();
    return response.results;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchRecentlyAiredEpisodes = async (
  page = 1
): Promise<RecentEpisodes[] | null> => {
  const perPage = 10;
  const provider = "gogoanime";
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}recent-episodes?page=${page}&perPage=${perPage}&provider=${provider}`;

  try {
    const fetchData = await fetch(url, {
      next: { revalidate: 3600 },
    });
    const response = await fetchData.json();
    return response.results;
  } catch (err) {
    console.error(err);
    return null;
  }
};

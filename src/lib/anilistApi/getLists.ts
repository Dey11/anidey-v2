import { PopularAnime, RecentEpisodes, TrendingAnime } from "@/types/anilist";

export const fetchTrendingAnime = async (
  page = 1,
  perPage = 10,
): Promise<TrendingAnime[] | null> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}trending?page=${page}&perPage=${perPage}`;
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

export const fetchPopularAnime = async (
  page = 1,
  perPage = 10,
): Promise<PopularAnime[] | null> => {
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
  page = 1,
  perPage = 10,
): Promise<RecentEpisodes[] | null> => {
  const provider = "zoro";
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

import { AnimeGenres, AnimeStatus, SearchResult } from "@/types/anilist";

export const search = async (
  query: string,
  page = 1
): Promise<SearchResult[] | null> => {
  const url = `${process.env.BACKEND_URL}${query}?page=${page}`;

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

export const advancedSearch = async (
  query: string,
  type = "ANIME",
  page = 1,
  season?: ["SUMMER", "WINTER", "FALL", "SPRING"],
  format?: ["TV", "TV_SHORT", "OVA", "ONA", "MOVIE", "SPECIAL", "MUSIC"],
  sort = ["POPULARITY_DESC", "SCORE_DESC"],
  genres?: AnimeGenres,
  id?: number,
  year?: number,
  status?: AnimeStatus
): Promise<SearchResult[] | null> => {
  const url = `${process.env.BACKEND_URL}advanced-search?query=${query}&type=${type}&season=${season}&format=${format}&sort=${sort}&genres=${genres}&id=${id}&year=${year}&status=${status}&page=${page}`;

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

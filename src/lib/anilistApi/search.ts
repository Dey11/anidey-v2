import { AnimeGenres, AnimeStatus, SearchResult } from "@/types/anilist";

export const search = async (
  query: string,
  page = 1,
): Promise<SearchResult[] | null> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${query}?page=${page}`;

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

// export const advancedSearch = async (
//   query?: string,
//   season?: ["SUMMER", "WINTER", "FALL", "SPRING"],
//   format?: ["TV", "TV_SHORT", "OVA", "ONA", "MOVIE", "SPECIAL", "MUSIC"],
//   genres?: AnimeGenres,
//   id?: number,
//   year?: number,
//   status?: AnimeStatus,
//   type = "ANIME",
//   page = 1,
//   sort = ["POPULARITY_DESC", "SCORE_DESC"],
// ): Promise<SearchResult[] | null> => {
//   const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}advanced-search?query=${query}&type=${type}&season=${season}&format=${format}&sort=${sort}&genres=${genres}&id=${id}&year=${year}&status=${status}&page=${page}`;
//   try {
//     const fetchData = await fetch(url, {
//       cache: "force-cache",
//     });
//     const response = await fetchData.json();
//     return response.results;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

export const advancedSearchWithFilters = async (
  query: string,
  filters: {
    isTrue: boolean;
    type: string;
    page: number;
    perPage: number;
    season: string;
    year: string;
    genre: string[];
    format: string;
    status: string;
  },
): Promise<SearchResult[] | null> => {
  let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}advanced-search?`;

  if (query) {
    url += `query=${query}`;
  }
  if (filters.type) {
    url += `&type=${filters.type}`;
  }
  if (filters.season != "None" && filters.season != "") {
    url += `&season=${filters.season}`;
  }
  if (filters.format != "None" && filters.format != "") {
    url += `&format=${filters.format}`;
  }
  if (filters.genre.length) {
    console.log(filters.genre);
    url += `&genres=${filters.genre}`;
  }
  if (filters.year != "" && filters.year != "None") {
    url += `&year=${filters.year}`;
  }
  if (filters.status != "None" && filters.status != "") {
    url += `&status=${filters.status}`;
  }
  if (filters.page) {
    url += `&page=${filters.page}`;
  }
  if (filters.perPage) {
    url += `&perPage=${filters.perPage}`;
  }

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

export const genreSearch = async (
  genre: AnimeGenres,
  page = 1,
  perPage = 5,
  type = "ANIME",
): Promise<SearchResult[] | null> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}advanced-search?&page=${page}&perPage=${perPage}&genres=["${genre}"]&type=${type}`;
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

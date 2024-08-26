// @ts-nocheck

import { AnimeGenres, SearchResult } from "@/types/anilist";

export const search = async (
  query: string,
  page = 1,
): Promise<SearchResult[] | null> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${query}?page=${page}`;

  try {
    const fetchData = await fetch(url, {
      revalidate: 3600,
    });
    const response = await fetchData.json();
    return response.results;
  } catch (err) {
    console.error(err);
    return null;
  }
};

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
    url += `query=${encodeURIComponent(query)}`;
  }
  let check = false;
  if (filters.type) {
    url += `&type=${filters.type}`;
  }
  if (filters.season != "None" && filters.season != "") {
    url += `&season=${filters.season}`;
    check = true;
  }
  if (filters.format != "None" && filters.format != "") {
    url += `&format=${filters.format}`;
    check = true;
  }
  if (filters.genre.length) {
    // console.log(filters.genre);
    url += `&genres=${filters.genre}`;
    check = true;
  }
  if (filters.year != "" && filters.year != "None") {
    url += `&year=${filters.year}`;
    check = true;
  }
  if (filters.status != "None" && filters.status != "") {
    url += `&status=${filters.status}`;
    check = true;
  }
  if (filters.page) {
    url += `&page=${filters.page}`;
  }
  if (filters.perPage) {
    url += `&perPage=${filters.perPage}`;
  }

  try {
    if (!check) {
      url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${query}?page=1`;
    }
    const fetchData = await fetch(url, {
      cache: "no-store",
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
  if (
    genre === "Ecchi" ||
    genre === "Hentai" ||
    genre === "Yaoi" ||
    genre === "Yuri"
  ) {
    return null;
  }
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}advanced-search?&page=${page}&perPage=${perPage}&genres=["${genre}"]&type=${type}`;
  try {
    const fetchData = await fetch(url, {
      revalidate: 3600,
    });
    const response = await fetchData.json();
    return response.results;
  } catch (err) {
    console.error(err);
    return null;
  }
};

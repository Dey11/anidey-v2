import { AnimeInfo } from "@/types/anilist";

export const getAnimeInfo = async (
  id: string,
  provider = "gogoanime"
): Promise<AnimeInfo | null> => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}info/${id}?provider=${provider}`;

  try {
    const fetchData = await fetch(url, {
      next: { revalidate: 86400 },
    });
    const response = await fetchData.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

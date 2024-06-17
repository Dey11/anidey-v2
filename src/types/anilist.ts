export interface SearchResult {
  id: number;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreffered?: string;
  };
  status: AnimeStatus;
  image: string;
  imageHash: string;
  cover: string;
  coverHash: string;
  popularity: number;
  description: string;
  rating: number;
  genres: AnimeGenres[];
  color: string;
  totalEpisodes: number;
  currentEpisodeCount?: number;
  currentEpisode?: number;
  type: ["TV", "Movie", "Manga"];
  releaseDate: number;
}

export enum AnimeStatus {
  ONGOING = "Ongoing",
  COMPLETED = "Completed",
  HIATUS = "Hiatus",
  CANCELLED = "Cancelled",
  NOT_YET_AIRED = "Not yet aired",
  UNKNOWN = "Unknown",
}

export enum AnimeGenres {
  ACTION = "Action",
  ADVENTURE = "Adventure",
  CARS = "Cars",
  COMEDY = "Comedy",
  DRAMA = "Drama",
  FANTASY = "Fantasy",
  HORROR = "Horror",
  MAHOU_SHOUJO = "Mahou Shoujo",
  MECHA = "Mecha",
  MUSIC = "Music",
  MYSTERY = "Mystery",
  PSYCHOLOGICAL = "Psychological",
  ROMANCE = "Romance",
  SCI_FI = "Sci-Fi",
  SLICE_OF_LIFE = "Slice of Life",
  SPORTS = "Sports",
  SUPERNATURAL = "Supernatural",
  THRILLER = "Thriller",
}

export interface Recommendation {
  id: number;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreffered?: string;
  };
  status: AnimeStatus;
  episodes: number;
  image: string;
  imageHash: string;
  cover: string;
  coverHash: string;
  rating: number;
  type: ["TV", "Movie", "Manga"];
}

export interface VoiceActor {
  id: number;
  language: string;
  name: {
    first: string;
    last: string;
    full: string;
    native: string;
    userPreffered?: string;
  };
  image: string;
  imageHash: string;
}

export interface AnimeCharacter {
  id: number;
  role: string;
  name: {
    first: string;
    last: string;
    full: string;
    native: string;
    userPreffered?: string;
  };
  image: string;
  imageHash: string;
  voiceActors: VoiceActor[];
}

export interface Relation {
  id: number;
  relationType: string;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  status: AnimeStatus;
  episodes: number | null;
  image: string;
  imageHash: string;
  color: string;
  type: ["TV", "Movie", "Manga"];
  cover: string;
  coverHash: string;
  rating: number;
}

export interface Mapping {
  id: string;
  providerId: string;
  similarity: number;
  providerType: ["ANIME", "MANGA"];
}

export interface Artwork {
  img: string;
  type: string;
  providerId: string;
}

export interface Episode {
  id: string;
  title: string;
  description: string | null;
  number: number;
  image: string;
  imageHash: string;
  airDate: string | null;
}

export interface AnimeInfo {
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
    thumbnailHash: string;
  };
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  duration: number;
  //   season: string;
  studios: string[];
  subOrDub: ["sub", "dub"];
  recommendations: Recommendation[];
  characters: AnimeCharacter[];
  relations: Relation[];
  mapping: Mapping[];
  artwork: Artwork[];
  episodes: Episode[];
}

export interface RecentEpisodes {
  id: number;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred?: string;
  };
  image: string;
  imageHash: string;
  episodeId: string;
  episodeTitle: string;
  episodeNumber: number;
  type: ["TV", "Movie", "Manga"];
}

export interface TrendingAnime extends SearchResult {
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
    thumbnailHash: string;
  };
}

export interface PopularAnime extends TrendingAnime {}

export interface AnimeAiringSchedule extends TrendingAnime {
  airingAt: Date;
}

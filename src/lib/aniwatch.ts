export type HomePageAnimeAniwatch = {
  spotlightAnimes: SpotlightAnimeAniwatch[];
  top10Animes: Top10AnimeAniwatch;
  latestEpisodeAnimes: RecentlyAiredAnimeAniwatch;
};

export type SpotlightAnimeAniwatch = {
  id: string | null;
  name: string | null;
  jname: string | null;
  poster: string | null;
  description: string | null;
  rank: number | null;
  otherInfo: string[] | null;
  episodes: {
    sub: number | null;
    dub: number | null;
  };
};

export type Top10AnimeAniwatch = {
  today: Top10AnimeAniwatchItem[];
  month: Top10AnimeAniwatchItem[];
  week: Top10AnimeAniwatchItem[];
};

export type Top10AnimeAniwatchItem = {
  episodes: {
    sub: number | null;
    dub: number | null;
  };
  id: string | null;
  name: string | null;
  poster: string | null;
  rank: number | null;
};

export type RecentlyAiredAnimeAniwatch = {
  latestEpisodeAnimes: LatestEpisodeAnimeAniwatch[];
};

export type LatestEpisodeAnimeAniwatch = {
  id: string | null;
  name: string | null;
  poster: string | null;
  type: string | null;
  episodes: {
    sub: number | null;
    dub: number | null;
  };
};

export type MoreInfoAniwatchItem = {
  aired: string | null;
  genres: string[] | null;
  status: string | null;
  studios: string | null;
  duration: string | null;
};

export type InfoPageAniwatch = {
  anime: { info: AnimeInfoAniwatchItem; moreInfo: MoreInfoAniwatchItem };
  mostPopularAnimes: MostPopularAnimeAniwatchItem[];
  recommendedAnimes: RecommendedAnimeAniwatchItem[];
  relatedAnimes: RelatedAnimeAniwatchItem[];
  seasons: SeasonAnimeAniwatchItem[];
};

export type AnimeInfoAniwatchItem = {
  id: string | null;
  name: string | null;
  poster: string | null;
  description: string | null;
  stats: {
    rating: string | null;
    quality: string | null;
    episodes: {
      sub: number | null;
      dub: number | null;
    };
    type: string | null;
    duration: string | null;
  };
  promotionalVideos: PromotionalVideoAnimeAniwatchItem[];
  // characterVoiceActor: CharacterVoiceActorAnimeAniwatchItem[];
};

export type PromotionalVideoAnimeAniwatchItem = {
  title: string | null;
  source: string | null;
  thumbnail: string | null;
};

export type CharacterVoiceActorAnimeAniwatchItem = {
  character: {
    id: string | null;
    poster: string | null;
    name: string | null;
    cast: string | null;
  };
  voiceActor: {
    id: string | null;
    poster: string | null;
    name: string | null;
    cast: string | null;
  };
};

export type MostPopularAnimeAniwatchItem = {
  episodes: {
    sub: number | null;
    dub: number | null;
  };
  id: string | null;
  jname: string | null;
  name: string | null;
  poster: string | null;
  type: string | null;
};

export type RecommendedAnimeAniwatchItem = {
  id: string | null;
  name: string | null;
  poster: string | null;
  duration: string | null;
  type: string | null;
  rating: string | null;
  episodes: {
    sub: number | null;
    dub: number | null;
  };
};

export type RelatedAnimeAniwatchItem = {
  id: string | null;
  name: string | null;
  poster: string | null;
  duration: string | null;
  type: string | null;
  rating: string | null;
  episodes: {
    sub: number | null;
    dub: number | null;
  };
};

// {
//     id: 'one-piece-100',
//     name: 'One Piece',
//     jname: 'One Piece',
//     poster: 'https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg',
//     episodes: { sub: 1114, dub: 1085 },
//     type: 'TV'
//   }

export type SeasonAnimeAniwatchItem = {
  id: string | null;
  name: string | null;
  title: string | null;
  poster: string | null;
  isCurrent: boolean | null;
};

// {
//   anime: [
//     info: {
//       id: string,
//       name: string,
//       poster: string,
//       description: string,
//       stats: {
//         rating: string,
//         quality: string,
//         episodes: {
//           sub: number,
//           dub: number
//         },
//         type: string,
//         duration: string
//       },
//       promotionalVideos: [
//         {
//           title: string | undefined,
//           source: string | undefined,
//           thumbnail: string | undefined
//         },
//         {...},
//       ],
//       characterVoiceActor: [
//         {
//           character: {
//             id: string,
//             poster: string,
//             name: string,
//             cast: string
//           },
//           voiceActor: {
//             id: string,
//             poster: string,
//             name: string,
//             cast: string
//           }
//         },
//         {...},
//       ]
//     }
//     moreInfo: {
//       aired: string,
//       genres: ["Action", "Mystery", ...],
//       status: string,
//       studios: string,
//       duration: string
//       ...
//     }
//   ],
//   mostPopularAnimes: [
//     {
//       episodes: {
//         sub: number,
//         dub: number,
//       },
//       id: string,
//       jname: string,
//       name: string,
//       poster: string,
//       type: string
//     },
//     {...},
//   ],
//   recommendedAnimes: [
//     {
//       id: string,
//       name: string,
//       poster: string,
//       duration: string,
//       type: string,
//       rating: string,
//       episodes: {
//         sub: number,
//         dub: number,
//       }
//     },
//     {...},
//   ],
//   relatedAnimes: [
//     {
//       id: string,
//       name: string,
//       poster: string,
//       duration: string,
//       type: string,
//       rating: string,
//       episodes: {
//         sub: number,
//         dub: number,
//       }
//     },
//     {...},
//   ],
//   seasons: [
//     {
//       id: string,
//       name: string,
//       title: string,
//       poster: string,
//       isCurrent: boolean
//     },
//     {...},
//   ]
// }

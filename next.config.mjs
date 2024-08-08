/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
      {
        protocol: "https",
        hostname: "artworks.thetvdb.com",
      },
      {
        protocol: "https",
        hostname: "media.kitsu.io",
      },
    ],
  },
};

// https://s4.anilist.co/file/anilistcdn/media
// https://artworks.thetvdb.com/banners/v4/series/429536/posters/63bee72be1ba9.jpg
export default nextConfig;

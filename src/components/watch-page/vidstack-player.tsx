"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Track } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { StreamEpisodeLink } from "@/lib/anilistApi/getStreamingLink";
import useHandleTimestamps from "@/lib/hooks/useHandleTimestamps";

export const VidstackPlayer = ({
  video,
  user,
  episode,
  animeId,
  coverImg,
}: {
  coverImg: string;
  animeId: string;
  episode: string;
  video: StreamEpisodeLink | null;
  user: string | undefined;
}) => {
  // @ts-ignore
  if (video.message) {
    return (
      <div className="py-5 text-center text-3xl">
        Video Not Found. Please make sure the link is correct, or reload the
        page. You may also try switching between episodes.
      </div>
    );
  }

  const captions = video?.tracks?.filter((track) => {
    return track.kind === "captions";
  });

  const { player, startTime, title } = useHandleTimestamps({
    video,
    user,
    episode,
    animeId,
    coverImg,
  });

  return (
    <div className="">
      <div className="w-full">
        <MediaPlayer
          ref={player}
          title={title}
          src={video?.sources[0].url || ""}
          crossOrigin
          currentTime={startTime}
        >
          <MediaProvider>
            {captions!.map((track) => (
              <Track
                key={track.label}
                src={track.file || ""}
                kind="subtitles"
                label={track.label || ""}
                type="vtt"
                default={(track?.default && track.default) || false}
              />
            ))}
          </MediaProvider>
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
    </div>
  );
};

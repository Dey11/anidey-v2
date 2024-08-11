"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Track } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { AniwatchEpisodeLink } from "@/lib/anilistApi/getStreamingLink";

export const VidstackPlayer = ({
  video,
}: {
  video: AniwatchEpisodeLink | null;
}) => {
  // console.log(video);

  const thumbnail = video?.tracks.filter((track) => {
    return track.kind === "thumbnail";
  });

  const defaultSubtitle = video?.tracks.filter((track) => {
    return track.kind === "captions" && track.label === "English";
  });

  const captions = video?.tracks.filter((track) => {
    return track.kind === "captions";
  });

  // console.log(captions);

  return (
    <div className="">
      <div className="w-full">
        <MediaPlayer
          title={video?.anilistId || ""}
          src={video?.sources[0].url || ""}
        >
          <MediaProvider>
            {captions!.map((track) => (
              <Track
                src={track.file || ""}
                kind="subtitles"
                label={track.label || ""}
                type="vtt"
                default={(track?.default && track.default) || false}
              />
            ))}
          </MediaProvider>
          <DefaultVideoLayout thumbnails={""} icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
    </div>
  );
};

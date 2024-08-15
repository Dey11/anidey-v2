"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  Track,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { AniwatchEpisodeLink } from "@/lib/anilistApi/getStreamingLink";
import { useEffect, useRef, useState } from "react";

export const VidstackPlayer = ({
  video,
  user,
  episode,
  animeId,
  coverImg,
  anilistId,
}: {
  coverImg: string;
  anilistId: string;
  animeId: string;
  episode: string;
  video: AniwatchEpisodeLink | null;
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

  const [startTime, setStartTime] = useState<number>(0);
  // const [loadPlayer, setLoadPlayer] = useState<boolean>(false);

  const thumbnail = video?.tracks?.filter((track) => {
    return track.kind === "thumbnail";
  });

  const defaultSubtitle = video?.tracks?.filter((track) => {
    return track.kind === "captions" && track.label === "English";
  });

  const captions = video?.tracks?.filter((track) => {
    return track.kind === "captions";
  });

  const player = useRef<MediaPlayerInstance>(null);

  const logTimestamp = () => {
    const isPaused = player.current?.paused;
    if (isPaused) return;
    if (!user) return;
    storeTimeInDB(player.current?.currentTime!);
  };

  const storeTimeInDB = async (time: number) => {
    if (!user || !episode || time < 10) return;
    try {
      const res = await fetch("/api/timestamp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user,
          episodeId: episode,
          timestamp: time,
          animeId: animeId,
          anilistId: anilistId,
          coverImg: coverImg,
        }),
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getTimestampFromDB = async () => {
    if (!user || !episode) return;
    try {
      const res = await fetch("/api/timestamp/" + episode);
      const data = await res.json();

      if (data.status) {
        setStartTime(data.timestamp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTimestampFromDB();
  }, [episode]);

  useEffect(() => {
    const intervalId = setInterval(logTimestamp, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      <div className="w-full">
        <MediaPlayer
          ref={player}
          title={video?.anilistId || ""}
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
          <DefaultVideoLayout
            thumbnails={thumbnail ? thumbnail[0]?.file : ""}
            icons={defaultLayoutIcons}
          />
        </MediaPlayer>
      </div>
    </div>
  );
};

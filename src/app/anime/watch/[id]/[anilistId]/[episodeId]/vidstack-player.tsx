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
import {
  AniwatchEpisodeLink,
  getEpisodeList,
} from "@/lib/anilistApi/getStreamingLink";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  const [startTime, setStartTime] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [isFiller, setIsFiller] = useState<boolean>(false);

  const thumbnail = video?.tracks?.filter((track) => {
    return track.kind === "thumbnails";
  });

  const captions = video?.tracks?.filter((track) => {
    return track.kind === "captions";
  });

  const player = useRef<MediaPlayerInstance>(null);

  const fetchEpisodes = async () => {
    try {
      const episodeList = await getEpisodeList(animeId);
      if (episodeList) {
        const res = episodeList.episodes.filter((ep) => {
          if (ep.episodeId === episode) {
            setTitle(ep.title);
            setNumber(ep.number);
            setIsFiller(ep.isFiller);
          }
        });
      } else {
        console.log("No episodes found");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logTimestamp = () => {
    const isPaused = player.current?.paused;
    const currentTime = player.current?.currentTime;
    const duration = player.current?.duration;
    if (isPaused || !episode || !duration || !currentTime || !user) return;
    if (duration - currentTime < 180) {
      completedEpisode(currentTime);
      return;
    }
    storeTimeInDB(currentTime, duration);
  };

  const completedEpisode = async (currentTime: number) => {
    if (!episode || !user) return;
    try {
      const res = await fetch("/api/completed-episode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user,
          episodeId: episode,
          currentTime: currentTime,
        }),
      });
      const data = await res.json();
      if (data.status) {
        toast({
          title: "Episode completed",
          description: "Episode marked as watched",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const storeTimeInDB = async (time: number, duration: number) => {
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
          title: title,
          number: number,
          isFiller: isFiller,
          timestamp: time,
          animeId: animeId,
          anilistId: video!.anilistID,
          image: coverImg,
          duration: duration,
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
    fetchEpisodes();
    getTimestampFromDB();
    const intervalId = setInterval(logTimestamp, 10000);
    return () => clearInterval(intervalId);
  }, [episode, title, number, isFiller]);

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
          <DefaultVideoLayout
            // thumbnails={thumbnail ? thumbnail[0]?.file : ""}
            icons={defaultLayoutIcons}
          />
        </MediaPlayer>
      </div>
    </div>
  );
};

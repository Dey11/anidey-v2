import { useToast } from "@/components/ui/use-toast";
import { useEffect, useRef, useState } from "react";
import { getEpisodeList } from "../anilistApi/getStreamingLink";
import { MediaPlayerInstance } from "@vidstack/react";

export default function useHandleTimestamps({
  video,
  user,
  episode,
  animeId,
  coverImg,
}: {
  coverImg: string;
  animeId: string;
  episode: string;
  video: any;
  user: string | undefined;
}) {
  const { toast } = useToast();
  const [startTime, setStartTime] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [isFiller, setIsFiller] = useState<boolean>(false);

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

  return { player, startTime, setStartTime, title };
}

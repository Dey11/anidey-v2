"use client";

import { useToast } from "@/components/ui/use-toast";
import { Plus, Check } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const FavBtn = ({
  anilistId,
  animeTitle,
  image,
  totalEpisodes,
}: {
  totalEpisodes: number;
  anilistId: number;
  animeTitle: string;
  image: string;
}) => {
  const session = useSession();
  const [clicked, setClicked] = useState<boolean | null>(null);
  const { toast } = useToast();

  const checkFavourite = async () => {
    try {
      const res = await fetch(`/api/favourite/${anilistId}`);
      const data = await res.json();
      if (data.status) {
        setClicked(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkFavourite();
  }, []);

  const handleClick = async () => {
    setClicked(!clicked);
    try {
      const res = await fetch("/api/favourite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          anilistId,
          animeTitle,
          image,
          totalEpisodes,
          action: clicked ? "remove" : "add",
        }),
      });

      const data = await res.json();
      if (data.status) {
        toast({
          title: data.message,
        });
      } else {
        toast({
          title: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (session.status == "unauthenticated" || session.status == "loading") {
    return <></>;
  }

  return (
    <>
      {session.status == "authenticated" && clicked ? (
        <Check
          onClick={handleClick}
          className="cursor-pointer text-green-500"
        />
      ) : (
        <Plus onClick={handleClick} className="cursor-pointer" />
      )}
    </>
  );
};

export default FavBtn;

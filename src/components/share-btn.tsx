"use client";

import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Share2 } from "lucide-react";
import { BASE_URL } from "@/lib/constants";

const ShareBtn = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const episodeIdOfAnime = searchParams.get("ep");
  const [copied, setCopied] = useState(false);
  const shareUrl = BASE_URL + pathname + "?ep=" + episodeIdOfAnime;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <Share2
      size={16}
      onClick={copyToClipboard}
      className={copied ? "text-green-500" : ""}
    />
  );
};

export default ShareBtn;

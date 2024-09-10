"use client";

import { DISCORD_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

const LoginBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={cn(
        "absolute top-0 z-50 flex w-full items-center bg-gradient-to-r from-[#E11D48] to-[#9916FF]",
        isOpen ? "" : "hidden",
      )}
    >
      {/* <div className="w-full p-2 text-center text-sm">
        Please consider logging in to enjoy all the features of the website. You
        can also join the{" "}
        <a href={DISCORD_URL} className="underline">
          Discord
        </a>{" "}
        server to get updates and report issues.
      </div>
      <X
        className="h-8 w-8 cursor-pointer justify-end pr-2"
        onClick={() => setIsOpen(false)}
      />
    </div> */}
      <div className="w-full p-2 text-center text-sm">
        We are currently in the process of migrating to a new platform. The
        website might not work as expected. Please give us ~1 day.
      </div>
    </div>
  );
};

export default LoginBanner;

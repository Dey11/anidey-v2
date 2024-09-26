"use client";

import { DISCORD_URL, KOFI_URL } from "@/lib/constants";
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
        {/* <p>
          Please consider logging in to enjoy all the features of the website.
          You can also join the{" "}
          <a href={DISCORD_URL} className="underline">
            Discord
          </a>{" "}
          server to get updates and report issues.
        </p> */}
        <p>
          We are currently testing servers. Images might break. Consider helping
          us buy better servers by{" "}
          <a href={KOFI_URL} className="underline">
            donating
          </a>
          .
        </p>
      </div>
      <X
        className="h-8 w-8 cursor-pointer justify-end pr-2"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default LoginBanner;

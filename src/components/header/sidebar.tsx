"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  AlignJustify,
  Clapperboard,
  Heart,
  History,
  Home,
  Library,
  ListVideo,
  Search,
  Settings,
  TvMinimalPlay,
  User,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SignIn } from "../custom-ui/sign-in-btn";
import { SignOut } from "../custom-ui/sign-out-btn";

const Sidebar = () => {
  const session = useSession();

  return (
    <div>
      <Sheet key={"right"}>
        <SheetTrigger>
          <AlignJustify size={32} />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <ScrollArea className={"h-[calc(100vh-150px)]"}>
            <nav>
              <ul>
                {navElements.map((element) => {
                  return element.protected &&
                    session.status == "authenticated" ? (
                    <li className="pb-5" key={element.name}>
                      <SheetHeader>
                        <SheetClose asChild>
                          <Link href={element.link}>
                            <SheetTitle>
                              <span className="flex items-center gap-2 text-sm md:text-lg">
                                {element.icon} {element.name}
                              </span>
                            </SheetTitle>
                            <SheetDescription className="hidden pt-1 md:block">
                              {element.description}
                            </SheetDescription>
                          </Link>
                        </SheetClose>
                      </SheetHeader>
                      <Separator className="mt-2" />
                    </li>
                  ) : (
                    !element.protected && (
                      <li className="pb-5" key={element.name}>
                        <SheetHeader>
                          <SheetClose asChild>
                            <Link href={element.link}>
                              <SheetTitle>
                                <span className="flex items-center gap-2 text-sm md:text-lg">
                                  {element.icon} {element.name}
                                </span>
                              </SheetTitle>
                              <SheetDescription className="hidden pt-1 md:block">
                                {element.description}
                              </SheetDescription>
                            </Link>
                          </SheetClose>
                        </SheetHeader>
                        <Separator className="mt-2" />
                      </li>
                    )
                  );
                })}
              </ul>
            </nav>

            <ScrollBar />
          </ScrollArea>
          <SheetHeader className="absolute bottom-0 left-0 right-0 mx-10 bg-inherit bg-opacity-100 pb-8">
            <div className="flex flex-col gap-2">
              {session.status === "loading" ? "" : ""}
              {session.status === "authenticated" ? <SignOut /> : ""}
              {session.status === "unauthenticated" ? <SignIn /> : ""}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;

const navElements = [
  {
    name: "Home",
    link: "/",
    description: "Home page of Anidey",
    icon: <Home size={20} />,
    protected: false,
  },
  {
    name: "Anime",
    link: "/anime",
    description: "Explore our vast library",
    icon: <Library size={20} />,
    protected: false,
  },
  // {
  //   name: "Profile",
  //   link: "/profile",
  //   description: "Go to your profile section",
  //   icon: <User size={20} />,
  //   protected: true,
  // },
  {
    name: "Continue Watching",
    link: "/anime/continue-watching",
    description: "Resume watching right from where you left",
    icon: <History size={20} />,
    protected: true,
  },
  {
    name: "Favorites",
    link: "/anime/favourites",
    description: "Animes you love",
    icon: <Heart size={20} />,
    protected: true,
  },
  {
    name: "History",
    link: "/anime/history",
    description: "Animes you have watched on Anidey",
    icon: <TvMinimalPlay size={20} />,
    protected: true,
  },
  // {
  //   name: "Movies",
  //   link: "/anime/movies",
  //   description: "In the mood to sit back and relax?",
  //   icon: <Clapperboard size={20} />,
  //   protected: false,
  // },
];

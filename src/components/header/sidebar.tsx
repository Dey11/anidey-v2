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
  Home,
  Library,
  ListVideo,
  Search,
  Settings,
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
                {navElements.map((element) => (
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
                ))}
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
  },
  {
    name: "Anime",
    link: "/anime",
    description: "Explore our vast library",
    icon: <Library size={20} />,
  },
  // {
  //   name: "Search",
  //   link: "/anime/search",
  //   description: "Search for your favourite anime",
  //   icon: <Search size={20} />,
  // },
  // {
  //   name: "Profile",
  //   link: "/profile",
  //   description: "Go to your profile section",
  //   icon: <User size={20} />,
  // },
  // {
  //   name: "Watch List",
  //   link: "/watch-list",
  //   description: "Choose what you'd like to watch next",
  //   icon: <ListVideo size={20} />,
  // },
  // {
  //   name: "Community",
  //   link: "/discord",
  //   description: "Join the Anidey community on Discord",
  //   icon: <UsersRound size={20} />,
  // },
  // {
  //   name: "Movies",
  //   link: "/anime/movies",
  //   description: "In the mood to sit back and relax?",
  //   icon: <Clapperboard size={20} />,
  // },
  // {
  //   name: "Settings",
  //   link: "/settings",
  //   description: "Configure Anidey to your preferences",
  //   icon: <Settings size={20} />,
  // },
];

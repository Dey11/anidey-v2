"use client";

import Link from "next/link";
import InputBar from "./inputbar";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-40">
      <div className="mx-auto px-0 py-2 lg:px-0 xl:px-2">
        <ul className="flex items-center justify-between px-5">
          <li>
            <Link href={"/anime"}>
              <p className="bg-gradient-to-r from-[#E11D48] to-[#9916FF] bg-clip-text text-lg font-bold text-transparent lg:text-2xl">
                Anidey
              </p>
            </Link>
          </li>
          <li className="">
            <InputBar />
          </li>
          <li>
            <Sidebar />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

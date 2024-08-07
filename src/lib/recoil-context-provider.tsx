"use client";

import { RecoilRoot, atom } from "recoil";

export type SearchAtomType = {
  query: string;
  filters: {
    isTrue: boolean;
    type: string;
    page: number;
    perPage: number;
    season: string;
    year: string;
    genre: string[];
    format: string;
    status: string;
  };
};

export const searchAtom = atom<SearchAtomType>({
  key: "searchState",
  default: {
    query: "",
    filters: {
      isTrue: false,
      type: "ANIME",
      page: 1,
      perPage: 5,
      season: "",
      year: "",
      genre: [],
      format: "",
      status: "",
    },
  },
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

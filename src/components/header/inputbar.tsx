"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { searchAtom } from "@/lib/recoil-context-provider";
import { useRecoilState } from "recoil";
import { Input } from "../ui/input";
import { advancedSearchWithFilters, search } from "@/lib/anilistApi/search";
import { SearchResult } from "@/types/anilist";
import useDebounce from "@/lib/hooks/debounce";
import Image from "next/image";
import { Star, X } from "lucide-react";
import Link from "next/link";
import FilterBtn from "./filter-btn";

const InputBar = () => {
  const [searchData, setSearchData] = useRecoilState(searchAtom);
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const debouncedSearch = useDebounce(
    searchData.query,
    searchData.filters,
    300,
  );

  const searchResults = async (query: {
    value: string;
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
  }) => {
    try {
      const res = await advancedSearchWithFilters(
        query.value,
        searchData.filters,
      );
      setResults(res);
    } catch (err) {
      console.error(err);
      setResults(null);
    }
  };

  useEffect(() => {
    if (searchData.query == "") {
      setResults(null);
      return;
    }
    if (debouncedSearch.value || debouncedSearch.filters.isTrue) {
      searchResults(debouncedSearch);
    }
  }, [debouncedSearch, searchData.filters.isTrue]);

  return (
    <div className="relative">
      <Input
        className="relative h-8 w-48 border-0 bg-white font-semibold capitalize text-black placeholder:text-gray-500 sm:h-10 sm:w-64 md:w-72 lg:w-96"
        placeholder="Search"
        value={searchData.query}
        onChange={(e) =>
          setSearchData({
            ...searchData,
            query: e.target.value,
          })
        }
      />
      <FilterBtn />

      {searchData.query && (
        <X
          size={12}
          className="absolute right-16 top-2 h-5 w-5 text-black sm:h-6"
          onClick={() => {
            setResults(null);
            setSearchData({
              query: "",
              filters: {
                ...searchData.filters,
                isTrue: false,
              },
            });
          }}
        />
      )}

      {results ? (
        <ResultsList results={results} setResults={setResults} />
      ) : null}
    </div>
  );
};

export default InputBar;

const ResultsList = ({
  results,
  setResults,
}: {
  results: SearchResult[];
  setResults: Dispatch<SetStateAction<SearchResult[] | null>>;
}) => {
  if (results.length === 0)
    return (
      <div className="absolute top-12 w-96 bg-white p-2 text-black">
        <p className="text-sm">No results found</p>
      </div>
    );

  return (
    <div className="no-scrollbar absolute top-12 max-h-72 w-48 overflow-y-scroll rounded-md bg-white p-2 text-sm text-black sm:w-64 md:w-72 lg:w-96">
      {results.map((result) => (
        <Link
          href={`/anime/info/${result.id}`}
          passHref
          onClick={() => {
            setResults(null);
          }}
          key={result.id}
        >
          <div className="flex h-16 gap-x-2 truncate border-b border-slate-200 py-1">
            <Image
              src={result.image}
              height={40}
              width={40}
              alt={
                result.title.english
                  ? result.title.english
                  : result.title.romaji
              }
              className="rounded-sm"
            />
            <div>
              <p className="text-sm font-semibold">
                {result.title.english
                  ? result.title.english
                  : result.title.romaji}
              </p>
              <p className="text-xs">
                {result.title.userPreffered
                  ? result.title.userPreffered
                  : result.title.romaji}
              </p>
              <p className="flex gap-x-3 text-xs">
                <span className={"flex items-center gap-x-[3px]"}>
                  {result.rating} <Star size={12} />
                </span>
                <span>{result.releaseDate}</span>
                <span>{result.type}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

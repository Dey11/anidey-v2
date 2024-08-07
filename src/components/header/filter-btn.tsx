import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { searchAtom, SearchAtomType } from "@/lib/recoil-context-provider";
import { useRecoilState } from "recoil";
import { ScrollArea } from "../ui/scroll-area";

const FilterBtn = () => {
  const [searchData, setSearchData] = useRecoilState(searchAtom);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={"absolute right-2 top-2 h-5 sm:h-6"}
          size={"supersmall"}
          variant={"outline"}
        >
          Filter
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>
              Search anime based on specific filters.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex items-center justify-between p-4 pb-0 text-sm">
            <div className="flex flex-col gap-y-4">
              <p>
                Format: <FormatFilter />
              </p>
              <p>
                Season: <SeasonFilter />
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <p>
                Year: <YearFilter />
              </p>
              <p>
                Status: <StatusFilter />
              </p>
            </div>
          </div>
          <div className="flex justify-between p-4 pb-0 text-sm">
            {/* <p>
              Genre: <GenreFilter />
            </p> */}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                variant="default"
                onClick={() => {
                  setSearchData({
                    ...searchData,
                    filters: {
                      ...searchData.filters,
                      isTrue: true,
                    },
                  });
                }}
              >
                Submit
              </Button>
            </DrawerClose>
            <Button
              variant="outline"
              onClick={() => {
                setSearchData({
                  ...searchData,
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
                });
              }}
            >
              Clear All
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterBtn;

const YearFilter = () => {
  const [searchData, setSearchData] = useRecoilState(searchAtom);
  let values = [];
  values.push("None");
  for (let i = 2024; i >= 1980; i--) {
    values.push(i);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          {searchData.filters.year || "None"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10">
        <ScrollArea className="h-52">
          <DropdownMenuGroup>
            {values.map((value) => (
              <DropdownMenuItem
                className="text-sm"
                key={value}
                onClick={() => {
                  setSearchData({
                    ...searchData,
                    filters: {
                      ...searchData.filters,
                      year: value.toString(),
                    },
                  });

                  console.log(searchData.filters);
                }}
              >
                {value}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const FormatFilter = () => {
  const values = [
    "TV",
    "Movie",
    "TV_SHORT",
    "OVA",
    "ONA",
    "MOVIE",
    "SPECIAL",
    "MUSIC",
    "None",
  ];

  const [searchData, setSearchData] = useRecoilState(searchAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          {searchData.filters.format || "None"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10">
        <DropdownMenuGroup>
          {values.map((value) => (
            <DropdownMenuItem
              className="text-sm"
              key={value}
              onClick={() => {
                setSearchData({
                  ...searchData,
                  filters: {
                    ...searchData.filters,
                    format: value,
                  },
                });
              }}
            >
              {value}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SeasonFilter = () => {
  const values = ["WINTER", "SPRING", "SUMMER", "FALL", "None"];

  const [searchData, setSearchData] = useRecoilState(searchAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          {searchData.filters.season || "None"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10">
        <DropdownMenuGroup>
          {values.map((value) => (
            <DropdownMenuItem
              className="text-sm"
              key={value}
              onClick={() => {
                setSearchData({
                  ...searchData,
                  filters: {
                    ...searchData.filters,
                    season: value,
                  },
                });
              }}
            >
              {value}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const StatusFilter = () => {
  const values = [
    "FINISHED",
    "RELEASING",
    "NOT_YET_RELEASED",
    "CANCELLED",
    "HIATUS",
    "None",
  ];

  const [searchData, setSearchData] = useRecoilState(searchAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"sm"}>
          {searchData.filters.status || "None"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16">
        <DropdownMenuGroup>
          {values.map((value) => (
            <DropdownMenuItem
              className="text-xs"
              key={value}
              onClick={() => {
                setSearchData({
                  ...searchData,
                  filters: {
                    ...searchData.filters,
                    status: value,
                  },
                });
              }}
            >
              {value}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// const GenreFilter = () => {
//   const genreValues = [
//     "Action",
//     "Adventure",
//     "Cars",
//     "Comedy",
//     "Drama",
//     "Fantasy",
//     "Horror",
//     "Mahou Shoujo",
//     "Mecha",
//     "Music",
//     "Mystery",
//     "Psychological",
//     "Romance",
//     "Sci-Fi",
//     "Slice of Life",
//     "Sports",
//     "Supernatural",
//     "Thriller",
//   ];
//   const [searchData, setSearchData] = useRecoilState(searchAtom);
//   let genres = [...searchData.filters.genre];
//   return (
//     <span className="">
//       {genreValues.map((value) => (
//         <Button
//           key={value}
//           variant={
//             searchData.filters.genre.includes(value) ? "default" : "outline"
//           }
//           className="mb-2 mr-2"
//           size={"sm"}
//           onClick={() => {
//             if (genres.includes(value)) {
//               genres = genres.filter((genre) => genre !== value);
//             } else {
//               genres.push(value);
//             }

//             setSearchData({
//               ...searchData,
//               filters: {
//                 ...searchData.filters,
//                 genre: genres,
//               },
//             });
//           }}
//         >
//           {value}
//         </Button>
//       ))}
//     </span>
//   );
// };

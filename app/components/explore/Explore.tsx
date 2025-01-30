import { MovieDetails } from "@/app/types/types";
import { Dispatch } from "react";
import { ExploreCard } from "./ExploreCard";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export const Explore = ({
  searchType,
  page,
  setPage,
  results,
}: {
  searchType: "movies" | "shows";
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  results: MovieDetails[];
  setResults: Dispatch<React.SetStateAction<MovieDetails[]>>;
}) => {
  return (
    <section className="px-20 mt-28">
      <div className="flex flex-col gap-y-2 items-center mb-10">
        <p className="text-3xl font-bold">
          {searchType === "movies" ? "Movies" : "Tv Shows"}
        </p>
        <p className="text-gray-500">
          Discover all available{" "}
          {searchType === "movies" ? "movies" : "tv shows"} on Flix
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {results.map((r) => (
          <ExploreCard key={r.id} type={searchType} media={r} />
        ))}
      </div>
      <div className="flex justify-center mt-10" onClick={() => setPage(page + 1)}>
        <button className="flex gap-x-1.5 justify-center items-center bg-neutral-800 w-fit py-2 px-4 rounded-lg text-lg">
          Load more <IconArrowNarrowRight />
        </button>
      </div>
    </section>
  );
};

"use client";
import { search } from "@/app/lib/api";
import { MovieDetails } from "@/app/types/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ExploreCard } from "../explore/ExploreCard";

export const SearchContainer = () => {
  const [results, setResults] = useState<MovieDetails[]>([]);
  const params = useSearchParams();
  const query = params.get("query");
  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const { results } = await search(query);
        console.log(results);
        setResults(results);
      };
      fetchData();
    }
  }, [query]);
  return (
    <section className="px-20 mt-28">
      <div className="grid grid-cols-4 gap-5">
        {results.map(
          (r) =>
            r.backdrop_path && <ExploreCard key={r.id} type={""} media={r} />
        )}
      </div>
    </section>
  );
};

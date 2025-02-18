"use client";
import { search } from "@/app/lib/api";
import { MovieDetails } from "@/app/types/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MediaCard } from "../UI/cards/MediaCard";

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
    <section className="px-10 min-[1100px]:px-20 mt-28">
      <div className="grid min-[520px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1300px]:grid-cols-4 gap-4 min-[650px]:gap-5">
        {results.map(
          (r) =>
            r.backdrop_path && <MediaCard key={r.id} type={""} media={r} />
        )}
      </div>
    </section>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { Explore } from "./Explore";
import { MovieDetails } from "@/app/types/types";
import { exploreSearch } from "@/app/lib/api";

export const ExploreContainer = ({
  searchType,
  initialResults,
}: {
  searchType: "movies" | "shows";
  initialResults: MovieDetails[];
}) => {
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState(initialResults);

  useEffect(() => {
    if (page !== 1) {
      const fetchData = async () => {
        const { results } = await exploreSearch(
          searchType === "movies" ? "movie" : "tv",
          page.toString()
        );
        setResults((prevResults) => [...prevResults, ...results]);
      };
      fetchData();
    }
  }, [page]);

  return (
    <Explore
      searchType={searchType}
      page={page}
      setPage={setPage}
      results={results}
      setResults={setResults}
    />
  );
};

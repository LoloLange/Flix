"use client";
import { useState } from "react";
import { Explore } from "./Explore";
import { MovieDetails } from "@/app/types/types";

export const ExploreContainer = ({
  searchType,
  initialResults,
}: {
  searchType: "movies" | "shows";
  initialResults: MovieDetails[];
}) => {
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState(initialResults);

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

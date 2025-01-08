"use client";
import {
  TrendingMovies,
  RecentMovies as RecentMoviesType,
} from "@/app/types/types";
import { Hero } from "./Hero";
import { SwiperContainer } from "./SwiperContainer";
import { getPoster } from "@/app/utils/getPoster";
import { useState } from "react";
import { UpcomingMovies } from "./RecentMovies";

export const Home = ({
  results,
  recent,
}: {
  results: TrendingMovies[];
  recent: RecentMoviesType[];
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const backImage = getPoster(results[currentIndex].backdrop_path);
  const upcomingBackImage = getPoster(recent[0].backdrop_path);
  return (
    <>
      <Hero selected={results[currentIndex]} poster={backImage} />
      <SwiperContainer results={results} setCurrentIndex={setCurrentIndex} />
      <UpcomingMovies recent={recent} poster={upcomingBackImage} />
    </>
  );
};

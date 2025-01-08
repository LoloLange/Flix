"use client";
import { TrendingMovies } from "@/app/types/types";
import { Hero } from "./Hero";
import { SwiperContainer } from "./SwiperContainer";
import { getPoster } from "@/app/utils/getPoster";
import { useState } from "react";

export const Home = ({ results }: { results: TrendingMovies[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const backImage = getPoster(results[currentIndex].backdrop_path);
  return (
    <>
      <Hero selected={results[currentIndex]} poster={backImage} />
      <SwiperContainer results={results} setCurrentIndex={setCurrentIndex} />
    </>
  );
};

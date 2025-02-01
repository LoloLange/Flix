"use client";
import {
  TrendingMovies,
  RecentMovies as RecentMoviesType,
  Collection,
} from "@/app/types/types";
import { Hero } from "./Hero";
import { SwiperContainer } from "./SwiperContainer";
import { getPoster } from "@/app/utils/getPoster";
import { useState } from "react";
import { RecentMovies } from "./RecentMovies";
import { Collections } from "./Collections";
import { TrendingShows } from "./TrendingShows";
import { Recommendations } from "./Recommendations";
import { HomeSwiperSkeleton } from "../UI/skeletons/HomeSwiperSkeleton";

export const Home = ({
  results,
  recent,
  collections,
  tvShows,
  recommendations,
}: {
  results: TrendingMovies[];
  recent: RecentMoviesType[];
  collections: Collection[];
  tvShows: TrendingMovies[];
  recommendations: TrendingMovies[];
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [ready, setReady] = useState(false);
  const backImage = getPoster(results[currentIndex].backdrop_path);
  const upcomingBackImage = getPoster(recent[0].backdrop_path);
  return (
    <>
      <Hero selected={results[currentIndex]} poster={backImage} />
      <SwiperContainer
        results={results}
        setCurrentIndex={setCurrentIndex}
        setReady={setReady}
        ready={ready}
      />
      {!ready && <HomeSwiperSkeleton />}
      <RecentMovies recent={recent} poster={upcomingBackImage} />
      <Collections collections={collections} />
      <TrendingShows tvShows={tvShows} />
      {recommendations.length > 0 && (
        <Recommendations recommendations={recommendations} />
      )}
    </>
  );
};

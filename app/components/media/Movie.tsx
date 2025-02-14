"use client";
/* eslint-disable @next/next/no-img-element */
import { MovieDetails, Video, Watchlist } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import { Trailer } from "./Trailer";
import { useState } from "react";
import { months } from "@/app/lib/constants";
import { PosterWrapper } from "../UI/wrappers/PosterWrapper";
import { MediaSummary } from "./MediaSummary";
import { MediaOverview } from "./MediaOverview";

export const Movie = ({
  movie,
  video,
  watchlist,
}: {
  movie: MovieDetails;
  video: Video;
  watchlist: Watchlist;
}) => {
  const backImage = getPoster(movie.backdrop_path);
  const poster = getPoster(movie.poster_path);

  const getMonth = (date: string) => {
    const month = date.split("-")[1];
    const monthName = months.find((m) => m.id === parseInt(month));
    const year = date.split("-")[0];
    return monthName?.name + " " + year;
  };

  const [trailer, setTrailer] = useState<boolean>(false);
  return (
    <main>
      {trailer && <Trailer video={video} setTrailer={setTrailer} />}
      <PosterWrapper poster={backImage} extraClassName="saturate-[1.3]" />
      <div className="absolute bottom-5 min-[2000px]:bottom-10 px-20 flex justify-between items-center w-full select-none z-30 gap-x-10">
        <MediaSummary
          movie={movie}
          getMonth={getMonth}
          setTrailer={setTrailer}
          trailer={trailer}
          watchlist={watchlist}
        />

        <MediaOverview movie={movie} />

        <img
          className="w-[200px] min-[2000px]:w-[250px] shadow-lg rounded-lg min-[2000px]:rounded-xl"
          src={poster}
          alt={movie.title}
        />
      </div>
    </main>
  );
};

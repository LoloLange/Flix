"use client";
/* eslint-disable @next/next/no-img-element */
import { MovieDetails, Video, Watchlist } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import {
  IconCalendarWeekFilled,
  IconClockFilled,
  IconPlayerPlayFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import { Trailer } from "./Trailer";
import { useState } from "react";
import { months } from "@/app/lib/constants";
import WatchlistButton from "../WatchlistButton";

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
      <div
        className="w-full relative z-10 saturate-[1.3]"
        style={{
          width: "100%",
          height: "80vh",
          backgroundImage: `url(${backImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxSizing: "border-box",
          boxShadow: "inset 100px 50px 200px 100px rgba(0, 0, 0, 0.6)",
          maskImage: "linear-gradient(black 85%, transparent)",
        }}
      ></div>
      <div className="absolute bottom-5 px-20 flex justify-between items-center w-full select-none z-30 gap-x-10">
        <div>
          <p className="text-5xl font-medium font-bold">
            {movie.title ? movie.title : movie.name}
          </p>
          <div className="flex flex-col gap-x-2 mt-2">
            <div className="flex text-gray-400 mb-1">
              {movie.genres.slice(0, 3).map((g, i) => (
                <p
                  className={`${
                    i === 0 && movie.genres.length !== 1
                      ? "border-r-2 border-gray-800 pr-3"
                      : i !== movie.genres.slice(0, 3).length - 1
                      ? "border-r-2 border-gray-800 px-3"
                      : movie.genres.slice(0, 3).length !== 1
                      ? "pl-3"
                      : ""
                  }`}
                  key={g.id}
                >
                  {g.name}
                </p>
              ))}
            </div>
            <div className="mt-2 flex gap-4">
              <div className="flex gap-x-1 items-center">
                <IconStarFilled className="w-6 h-6 text-gray-400" />
                <p className="">{movie.vote_average.toFixed(1)}/10</p>
              </div>
              <div className="flex gap-x-1 items-center">
                <IconClockFilled className="w-6 h-6 text-gray-400" />
                {movie.runtime ? (
                  <p className="">{movie.runtime} minutes</p>
                ) : (
                  <p className="">
                    {movie.number_of_seasons} seasons (
                    {movie.number_of_episodes} episodes)
                  </p>
                )}
              </div>
              <div className="flex gap-x-1 items-center">
                <IconCalendarWeekFilled className="w-6 h-6 text-gray-400" />
                <p className="">
                  {getMonth(movie.release_date ?? movie.first_air_date)}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <div
                onClick={() => setTrailer(!trailer)}
                className="flex gap-x-2 border-2 border-gray-700 w-fit py-1.5 px-3 mt-4 rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300"
              >
                <IconPlayerPlayFilled className="w-6 h-6 p-0.5" />
                <p>See trailer</p>
              </div>
              <WatchlistButton media={watchlist} />
            </div>
          </div>
        </div>

        <div className="w-[700px] flex flex-col">
          <p className="text-2xl">Overview</p>
          <p className="leading-relaxed">{movie.overview}</p>
        </div>

        <img
          className="w-[200px] shadow-lg rounded-lg"
          src={poster}
          alt={movie.title}
        />
      </div>
    </main>
  );
};

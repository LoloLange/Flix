import {
  IconCalendarWeekFilled,
  IconClockFilled,
  IconPlayerPlayFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import WatchlistButton from "../UI/buttons/WatchlistButton";
import { MovieDetails, Watchlist } from "@/app/types/types";
import { Dispatch, SetStateAction } from "react";

export const MediaSummary = ({
  movie,
  getMonth,
  setTrailer,
  trailer,
  watchlist,
}: {
  movie: MovieDetails;
  getMonth: (date: string) => string;
  setTrailer: Dispatch<SetStateAction<boolean>>;
  trailer: boolean;
  watchlist: Watchlist;
}) => {
  return (
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
                {movie.number_of_seasons} seasons ({movie.number_of_episodes}{" "}
                episodes)
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
  );
};

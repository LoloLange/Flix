import { genres } from "@/app/lib/constants";
import { TrendingMovies } from "@/app/types/types";
import { IconPlayerPlayFilled, IconPlus } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import { PosterWrapper } from "../UI/wrappers/PosterWrapper";

export const Hero = ({
  selected,
  poster,
}: {
  selected: TrendingMovies;
  poster: string;
}) => {
  return (
    <main>
      <PosterWrapper poster={poster}>
        <div className="absolute bottom-[200px] pl-20 flex flex-col justify-center select-none">
          <p className="text-5xl min-[2000px]:text-6xl font-medium">{selected.title}</p>
          <div className="flex flex-col gap-x-2 mt-2">
            <div className="flex text-gray-300 mb-1 min-[2000px]:text-xl">
              {selected.genre_ids.slice(0, 3).map((g, i) => (
                <p
                  className={`${
                    i === 0 && selected.genre_ids.length !== 1
                      ? "border-r-2 border-gray-800 pr-3"
                      : i !== selected.genre_ids.slice(0, 3).length - 1
                      ? "border-r-2 border-gray-800 px-3"
                      : selected.genre_ids.slice(0, 3).length !== 1
                      ? "pl-3"
                      : ""
                  }`}
                  key={g}
                >
                  {genres.movie.find((genre) => genre.id === g)?.name}
                </p>
              ))}
            </div>
            <p className="text-sm min-[2000px]:text-xl">{selected.release_date}</p>
          </div>
          <div className="flex gap-x-3">
            <Link
              href={`/movie/${selected.id}`}
              className="border-2 border-gray-700 w-fit py-1.5 px-3 mt-4 rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300"
            >
              <IconPlayerPlayFilled className="w-8 h-8 min-[2000px]:w-10 min-[2000px]:h-10 p-0.5" />
            </Link>
            <div className="border-2 border-gray-700 w-fit py-1.5 px-3 mt-4 rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300 flex items-center gap-x-1">
              <IconPlus className="w-8 h-8 min-[2000px]:w-10 min-[2000px]:h-10 p-0.5" />
              <p className="text-lg min-[2000px]:text-xl">Watchlist</p>
            </div>
          </div>
        </div>
      </PosterWrapper>
    </main>
  );
};

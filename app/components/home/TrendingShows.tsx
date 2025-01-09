import { TrendingMovies } from "@/app/types/types";
import { RecentMovies } from "./RecentMovies";
import { getPoster } from "@/app/utils/getPoster";

export const TrendingShows = ({ tvShows }: { tvShows: TrendingMovies[] }) => {
  const poster = getPoster(tvShows[0].backdrop_path);
  return <RecentMovies recent={tvShows} poster={poster} tvShows={true} />;
};

import { Home } from "./components/home/Home";
import { recentMovies, trendingMovies } from "./lib/api";
import {
  TrendingMovies as TrendingMoviesType,
  RecentMovies,
} from "./types/types";

export default async function HomePage() {
  const { results }: { results: TrendingMoviesType[] } = await trendingMovies();
  const { results: recent }: { results: RecentMovies[] } =
    await recentMovies();
  return <Home results={results} recent={recent} />;
}

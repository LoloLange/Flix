import { Home } from "./components/home/Home";
import { trendingMovies } from "./lib/api";
import { TrendingMovies as TrendingMoviesType } from "./types/types";

export default async function HomePage() {
  const { results }: { results: TrendingMoviesType[] } = await trendingMovies();
  return (
    <Home results={results} />
   )
}

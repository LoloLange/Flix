import { Home } from "./components/home/Home";
import {
  collections,
  recentMovies,
  showRecommendationsHome,
  trendingMovies,
  trendingShows,
} from "./lib/api";
import {
  TrendingMovies as TrendingMoviesType,
  RecentMovies,
  Collection,
} from "./types/types";

export default async function HomePage() {
  const { results }: { results: TrendingMoviesType[] } = await trendingMovies();
  const { results: recent }: { results: RecentMovies[] } = await recentMovies();
  const getCollections: Collection[] = await collections();
  const { results: tvShows }: { results: TrendingMoviesType[] } =
    await trendingShows();
  const { results: recommendations }: { results: TrendingMoviesType[] } =
    await showRecommendationsHome(tvShows[0].id.toString());

  return (
    <Home
      results={results}
      recent={recent}
      collections={getCollections}
      tvShows={tvShows}
      recommendations={recommendations}
    />
  );
}

import { ExploreContainer } from "@/app/components/explore/ExploreContainer";
import { exploreSearch, searchByGenre } from "@/app/lib/api";

interface ExplorePageProps {
  searchType: "movies" | "shows";
}

export default async function ExplorePage({ params, searchParams }: { params: ExplorePageProps, searchParams: { genre: string } }) {
  const { searchType } = await params;
  const { genre } = await searchParams;
  const { results } = !genre ? await exploreSearch(searchType === "movies" ? "movie" : "tv", "1") : await searchByGenre(searchType === "movies" ? "movie" : "tv", parseInt(genre));

  return <ExploreContainer searchType={searchType} initialResults={results} />;
}
import { ExploreContainer } from "@/app/components/explore/ExploreContainer";
import { exploreSearch } from "@/app/lib/api";

interface ExplorePageProps {
  searchType: "movies" | "shows";
}

export default async function ExplorePage({ params }: { params: ExplorePageProps }) {
  const searchType = params.searchType;
  const { results } = await exploreSearch(searchType === "movies" ? "movie" : "tv", "1");

  return <ExploreContainer searchType={searchType} initialResults={results} />;
}
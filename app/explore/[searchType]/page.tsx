import { ExploreContainer } from "@/app/components/explore/ExploreContainer";
import { exploreSearch, searchByGenre } from "@/app/lib/api";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";

export default async function ExplorePage({
  params,
  searchParams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const searchType = params.searchType;
  const genre = searchParams.genre;

  const { results } = genre
    ? await searchByGenre(searchType === "movies" ? "movie" : "tv", parseInt(genre))
    : await exploreSearch(searchType === "movies" ? "movie" : "tv", "1");

  return <ExploreContainer searchType={searchType} initialResults={results} />;
}

import { Credits } from "@/app/components/media/Credits";
import { Info } from "@/app/components/media/Info";
import { Movie } from "@/app/components/media/Movie";
import { Recommendations } from "@/app/components/media/Recommendations";
import {
  getVideos,
  showCredits,
  showDetails,
  showRecommendations,
} from "@/app/lib/api";
import { Video } from "@/app/types/types";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { notFound } from "next/navigation";

export default async function TvPage({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { id } = params;

  if (!id) {
    return notFound();
  }

  const movie = await showDetails(id);
  const credits = await showCredits(id);
  const { results: recommendations } = await showRecommendations(id);
  const { results: videos } = await getVideos(id, "tv");
  const trailer = videos.find((v: Video) => v.type === "Trailer");

  if (!movie) {
    return notFound();
  }

  const watchlist = {
    type: "shows",
    id: movie.id.toString(),
    name: movie.name,
    backdrop_path: movie.backdrop_path,
    first_air_date: movie.first_air_date,
  };

  return (
    <main className="flex flex-col max-[800px]:gap-y-[50px]">
      <Movie movie={movie} video={trailer} watchlist={watchlist} />
      <section className="flex flex-col gap-y-10 px-12 min-[600px]:px-36">
        {credits.cast.length > 0 && <Credits credits={credits} cast={true} />}
        {credits.crew.length > 0 && <Credits credits={credits} cast={false} />}
        <Info movie={movie} />
        {recommendations.length > 0 && (
          <Recommendations recommendations={recommendations} tvShows={true} />
        )}
      </section>
    </main>
  );
}

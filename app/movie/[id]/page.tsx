import { Credits } from "@/app/components/media/Credits";
import { Info } from "@/app/components/media/Info";
import { Movie } from "@/app/components/media/Movie";
import { Recommendations } from "@/app/components/media/Recommendations";
import {
  getVideos,
  movieCredits,
  movieDetails,
  movieRecommendations,
} from "@/app/lib/api";
import { MovieCredits, MovieDetails, Video } from "@/app/types/types";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { notFound } from "next/navigation";

export default async function MoviePage({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { id } = params;

  if (!id) {
    return notFound();
  }

  const movie: MovieDetails = await movieDetails(id);
  const credits: MovieCredits = await movieCredits(id);
  const { results: recommendations }: { results: MovieDetails[] } =
    await movieRecommendations(id);
  const { results: videos } = await getVideos(id, "movie");
  const trailer = videos.find((v: Video) => v.type === "Trailer");

  if (!movie) {
    return notFound();
  }

  const watchlist = {
    type: "movies",
    id: movie.id.toString(),
    title: movie.title,
    backdrop_path: movie.backdrop_path,
    release_date: movie.release_date,
  };

  return (
    <main className="flex flex-col max-[800px]:gap-y-[50px]">
      <Movie movie={movie} video={trailer} watchlist={watchlist} />
      <section className="flex flex-col gap-y-10 px-12 min-[600px]:px-20 min-[1500px]:px-36">
        {credits.cast.length > 0 && <Credits credits={credits} cast={true} />}
        {credits.crew.length > 0 && <Credits credits={credits} cast={false} />}
        <Info movie={movie} />
        {recommendations.length > 0 && (
          <Recommendations recommendations={recommendations} />
        )}
      </section>
    </main>
  );
}

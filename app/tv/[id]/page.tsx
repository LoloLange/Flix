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
import { notFound } from "next/navigation";

interface TvPageProps {
  params: { id: string };
}

export default async function TvPage({ params }: TvPageProps) {
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
    <main className="flex flex-col gap-y-[200px]">
      <Movie movie={movie} video={trailer} watchlist={watchlist} />
      <section className="flex flex-col gap-y-10 px-36">
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

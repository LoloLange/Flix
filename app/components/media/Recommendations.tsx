import { MovieDetails } from "@/app/types/types";
import { RecommendationCard } from "../UI/cards/RecommendationCard";

export const Recommendations = ({
  recommendations,
  tvShows,
}: {
  recommendations: MovieDetails[];
  tvShows?: boolean;
}) => {
  return (
    <section>
      <p className="text-4xl font-bold">Recommendations</p>
      <div className="grid grid-cols-4 gap-y-5 gap-x-7 flex-wrap my-5">
        {recommendations.slice(0, 8).map((r) => (
          <RecommendationCard key={r.id} r={r} tvShows={tvShows} />
        ))}
      </div>
    </section>
  );
};

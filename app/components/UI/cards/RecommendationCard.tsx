import { MovieDetails } from "@/app/types/types";
import { Link } from "next-view-transitions";
import { RecommendationPoster } from "../../media/RecommendationPoster";

export const RecommendationCard = ({ r, tvShows }: { r: MovieDetails, tvShows?: boolean }) => {
  return (
    <div className="relative cursor-pointer">
      <Link href={tvShows ? `/tv/${r.id}` : `/movie/${r.id}`}>
        <RecommendationPoster r={r} />
      </Link>
      <div className="absolute bottom-5 px-5">
        <p className="text-lg min-[2000px]:text-xl">{r.title ? r.title : r.name}</p>
        <p className="text-sm min-[2000px]:text-base opacity-75">
          {r.release_date ? r.release_date : r.first_air_date}
        </p>
      </div>
    </div>
  );
};

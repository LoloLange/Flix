import { MovieDetails } from "@/app/types/types";
import { MediaCard } from "../cards/MediaCard";

export const MediaContainer = ({
  results,
  searchType,
}: {
  results: MovieDetails[];
  searchType: "movies" | "shows";
}) => {
  return (
    <div className="grid min-[520px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1300px]:grid-cols-4 gap-4 min-[650px]:gap-5">
      {results.map((r) => (
        <MediaCard key={r.id} type={searchType} media={r} />
      ))}
    </div>
  );
};

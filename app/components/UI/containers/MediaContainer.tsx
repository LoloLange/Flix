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
    <div className="grid grid-cols-4 gap-5">
      {results.map((r) => (
        <MediaCard key={r.id} type={searchType} media={r} />
      ))}
    </div>
  );
};

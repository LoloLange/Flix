import { MovieDetails } from "@/app/types/types";

export const MediaOverview = ({ movie }: { movie: MovieDetails }) => {
  return (
    <div className="w-[700px] flex flex-col">
      <p className="text-2xl">Overview</p>
      <p className="leading-relaxed">{movie.overview}</p>
    </div>
  );
};

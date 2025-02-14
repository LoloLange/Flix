import { MovieDetails } from "@/app/types/types";

export const MediaOverview = ({ movie }: { movie: MovieDetails }) => {
  return (
    <div className="w-[700px] min-[2000px]:w-[800px] min-[2000px]:pr-16 flex flex-col">
      <p className="text-2xl min-[2000px]:text-4xl">Overview</p>
      <p className="leading-relaxed min-[2000px]:text-xl min-[2000px]:mt-1">{movie.overview}</p>
    </div>
  );
};

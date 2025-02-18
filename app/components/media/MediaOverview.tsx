import { MovieDetails } from "@/app/types/types";

export const MediaOverview = ({ movie }: { movie: MovieDetails }) => {
  return (
    <div className="max-[1000px]:w-full w-[600px] min-[1350px]:w-[700px] min-[2000px]:w-[800px] min-[2000px]:pr-16 flex flex-col max-[1000px]:order-3">
      <p className="max-md:text-3xl max-[1000px]:text-4xl max-[1000px]:font-bold text-2xl min-[2000px]:text-4xl max-[1000px]:mb-5 max-[800px]:mb-2">Overview</p>
      <p className="leading-relaxed max-md:text-base max-[1000px]:text-lg min-[2000px]:text-xl min-[2000px]:mt-1">{movie.overview}</p>
    </div>
  );
};

import { MovieDetails } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";

export const RecommendationPoster = ({ r }: { r: MovieDetails}) => {
  return (
    <div
      className="h-[220px] bg-neutral-700 rounded-2xl relative"
      style={{
        backgroundImage: `url(${getPoster(r.backdrop_path)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0px -50px 50px 0px rgba(0, 0, 0, 0.8)",
      }}
    ></div>
  );
};

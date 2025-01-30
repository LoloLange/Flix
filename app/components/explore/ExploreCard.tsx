import { MovieDetails, Watchlist } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import { Link } from "next-view-transitions";
import RemoveFromWatchlistButton from "../RemoveFromWatchlist";

export const ExploreCard = ({
  type,
  media,
  watchlist,
}: {
  type: "movies" | "shows" | string;
  media: MovieDetails | Watchlist;
  watchlist?: true;
}) => {
  return (
    <div key={media.id} className="relative cursor-pointer">
      <Link href={type === "shows" ? `/tv/${media.id}` : `/movie/${media.id}`}>
        <div
          className="h-[220px] bg-neutral-700 rounded-2xl relative"
          style={{
            backgroundImage: `url(${getPoster(media.backdrop_path)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "inset 0px -50px 50px 0px rgba(0, 0, 0, 0.8)",
          }}
        ></div>
      </Link>
      {watchlist && <RemoveFromWatchlistButton movieId={media.id.toString()} />}
      <div className="absolute bottom-5 px-5">
        <p className="text-lg">{media.title ? media.title : media.name}</p>
        <p className="text-sm opacity-75">
          {media.release_date ? media.release_date : media.first_air_date}
        </p>
      </div>
    </div>
  );
};

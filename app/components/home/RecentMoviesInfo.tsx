import { RecentMovies } from "@/app/types/types";
import { IconStarFilled } from "@tabler/icons-react";
import { Link } from "next-view-transitions";

export const RecentMoviesInfo = ({
  current,
  tvShows,
}: {
    current: RecentMovies;
  tvShows?: boolean;
}) => {
  return (
    <div className="flex justify-between p-16">
      <div>
        <p className="text-5xl mt-3 opacity-90">
          {current.title ? current.title : current.name}
        </p>
        <p className="w-[600px] mt-3 opacity-70">{current.overview}</p>
        <Link href={!tvShows ? `/movie/${current.id}` : `/tv/${current.id}`}>
          <p className="border-2 border-gray-700 w-fit py-1.5 px-3 mt-4 rounded-lg cursor-pointer shadow-lg">
            See more
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 h-fit items-center">
        <IconStarFilled className="w-8 h-8" />
        <p className="text-4xl">
          {current.vote_average.toFixed(1)}
          <span className="text-2xl">/10</span>
        </p>
      </div>
    </div>
  );
};

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
        <p className="text-5xl min-[2000px]:text-6xl mt-3 opacity-90">
          {current.title ? current.title : current.name}
        </p>
        <p className="w-[600px] min-[2000px]:w-[700px] min-[2000px]:text-xl mt-3 opacity-70">{current.overview}</p>
        <Link href={!tvShows ? `/movie/${current.id}` : `/tv/${current.id}`}>
          <p className="border-2 border-gray-700 w-fit py-1.5 min-[2000px]:py-2 px-3 min-[2000px]:px-4 mt-4 rounded-lg cursor-pointer shadow-lg min-[2000px]:text-xl">
            See more
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 h-fit items-center">
        <IconStarFilled className="w-8 h-8 min-[2000px]:w-10 min-[2000px]:h-10" />
        <p className="text-4xl min-[2000px]:text-5xl">
          {current.vote_average.toFixed(1)}
          <span className="text-2xl min-[2000px]:text-3xl">/10</span>
        </p>
      </div>
    </div>
  );
};

import { RecentMovies as RecentMoviesType } from "@/app/types/types";
import { SwiperContainer } from "./SwiperContainer";
import { IconStarFilled } from "@tabler/icons-react";
import { Link } from "next-view-transitions";

export const UpcomingMovies = ({
  recent,
  poster,
}: {
  recent: RecentMoviesType[];
  poster: string;
}) => {
  const current = recent[0];
  return (
    <section className="py-20">
      <div
        className="w-full relative z-10 px-5"
        style={{
          width: "100%",
          height: "80vh",
          backgroundImage: `url(${poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxSizing: "border-box",
          boxShadow: "inset 200px 50px 500px 200px rgba(0, 0, 0, 0.6)",
          maskImage: "linear-gradient(black 85%, transparent)",
        }}
      >
        <div className="flex justify-between p-16">
          <div>
            <p className="text-5xl mt-3 opacity-90">{current.title}</p>
            <p className="w-[600px] mt-3 opacity-70">{current.overview}</p>
            <Link href={`/movie/${current.id}`}>
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
        <div className="absolute bottom-14 w-[calc(100%-50px)]">
          <SwiperContainer results={recent} />
        </div>
      </div>
    </section>
  );
};

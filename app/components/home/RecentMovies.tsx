import { RecentMovies as RecentMoviesType } from "@/app/types/types";
import { SwiperContainer } from "./SwiperContainer";
import { PosterWrapper } from "../UI/wrappers/PosterWrapper";
import { RecentMoviesInfo } from "./RecentMoviesInfo";

export const RecentMovies = ({
  recent,
  poster,
  tvShows,
}: {
  recent: RecentMoviesType[];
  poster: string;
  tvShows?: boolean;
}) => {
  const current = recent[0];
  return (
    <section className="py-20">
      <PosterWrapper poster={poster} extraClassName="px-5 z-10">
        <RecentMoviesInfo current={current} tvShows={tvShows} />
        <div className="absolute bottom-14 w-[calc(100%-50px)]">
          <SwiperContainer results={recent} tvShows={tvShows ? true : false} />
        </div>
      </PosterWrapper>
    </section>
  );
};

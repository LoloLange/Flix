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
    <section className="py-10 min-[700px]:py-20 min-[1000px]:py-32 max-[400px]:mb-20">
      <PosterWrapper poster={poster} extraClassName="px-5" noMask={true}>
        <RecentMoviesInfo current={current} tvShows={tvShows} />
        <div className="min-[450px]:absolute bottom-10 min-[650px]:bottom-0 w-[calc(100%-50px)] min-[600px]:mx-auto">
          <SwiperContainer results={recent} tvShows={tvShows ? true : false} />
        </div>
      </PosterWrapper>
    </section>
  );
};

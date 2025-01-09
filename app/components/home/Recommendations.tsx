import { TrendingMovies } from "@/app/types/types";
import { SwiperContainer } from "./SwiperContainer";

export const Recommendations = ({
  recommendations,
}: {
  recommendations: TrendingMovies[];
}) => {
  return <SwiperContainer results={recommendations} recommendations={true} />;
};

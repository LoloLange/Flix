import { fetchData } from "../utils/fetchData";

export const trendingMovies = () => {
  const path = "/trending/movie/week";
  return fetchData(path);
};

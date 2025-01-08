import { fetchData } from "../utils/fetchData";

export const trendingMovies = () => {
  const path = "/trending/movie/week";
  return fetchData(path);
};

export const recentMovies = async () => {
  const path = "/movie/upcoming";
  return fetchData(path);
};
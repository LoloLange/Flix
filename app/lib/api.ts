import { fetchData } from "../utils/fetchData";

export const trendingMovies = () => {
  const path = "/trending/movie/week";
  return fetchData(path);
};

export const recentMovies = async () => {
  const path = "/movie/upcoming";
  return fetchData(path);
};

export const movieDetails = (id: string) => {
  const path = `/movie/${id}`;
  return fetchData(path);
};

export const movieCredits = (id: string) => {
  const path = `/movie/${id}/credits`;
  return fetchData(path);
};

export const movieRecommendations = (id: string) => {
  const path = `/movie/${id}/recommendations`;
  return fetchData(path);
};

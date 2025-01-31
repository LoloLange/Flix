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

export const collections = async () => {
  const ids = ["10", "1241"];
  const results = await Promise.all(
    ids.map((id) => {
      const path = `/collection/${id}`;
      return fetchData(path);
    })
  );
  return results;
};

export const trendingShows = () => {
  const path = "/trending/tv/week";
  return fetchData(path);
};

export const showRecommendationsHome = async (id: string) => {
  const path = `/tv/${id}/recommendations`;
  return fetchData(path);
};

export const showDetails = (id: string) => {
  const path = `/tv/${id}`;
  return fetchData(path);
};

export const showCredits = (id: string) => {
  const path = `/tv/${id}/credits`;
  return fetchData(path);
};

export const showRecommendations = (id: string) => {
  const path = `/tv/${id}/recommendations`;
  return fetchData(path);
};

export const getVideos = (id: string, type: "movie" | "tv") => {
  const path = `/${type}/${id}/videos`;
  return fetchData(path);
};

export const exploreSearch = (type: string, page: string) => {
  const path = `/trending/${type}/week`;
  const query = `&page=${page}`;
  return fetchData(path, query);
};

export const search = (query: string) => {
  const path = "/search/multi";
  const queryParam = `&query=${query}`;
  return fetchData(path, queryParam);
};

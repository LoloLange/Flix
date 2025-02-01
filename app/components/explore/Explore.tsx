import { MovieDetails } from "@/app/types/types";
import { Dispatch } from "react";
import { SectionWrapper } from "../UI/wrappers/SectionWrapper";
import { LoadMoreButton } from "../UI/buttons/LoadMoreButton";
import { TitleAndDescription } from "../UI/text/TitleAndDescription";
import { MediaContainer } from "../UI/containers/MediaContainer";

export const Explore = ({
  searchType,
  page,
  setPage,
  results,
}: {
  searchType: "movies" | "shows";
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  results: MovieDetails[];
  setResults: Dispatch<React.SetStateAction<MovieDetails[]>>;
}) => {
  return (
    <SectionWrapper>
      <TitleAndDescription searchType={searchType} />
      <MediaContainer results={results} searchType={searchType} />
      <LoadMoreButton page={page} setPage={setPage} />
    </SectionWrapper>
  );
};

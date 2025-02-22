import { SectionWrapper } from "../UI/wrappers/SectionWrapper";
import { LoadMoreButton } from "../UI/buttons/LoadMoreButton";
import { TitleAndDescription } from "../UI/text/TitleAndDescription";
import { MediaContainer } from "../UI/containers/MediaContainer";
import { ExploreComponent } from "@/app/types/types";

export const Explore = ({
  searchType,
  page,
  setPage,
  results,
}: ExploreComponent) => {
  return (
    <SectionWrapper>
      <TitleAndDescription searchType={searchType} />
      <MediaContainer results={results} searchType={searchType} />
      <LoadMoreButton page={page} setPage={setPage} />
    </SectionWrapper>
  );
};

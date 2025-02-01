import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Dispatch } from "react";

export const LoadMoreButton = ({
  page,
  setPage,
}: {
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      className="flex justify-center mt-10"
      onClick={() => setPage(page + 1)}
    >
      <button className="flex gap-x-1.5 justify-center items-center bg-neutral-800 w-fit py-2 px-4 rounded-lg text-lg">
        Load more <IconArrowNarrowRight />
      </button>
    </div>
  );
};

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
      <button className="flex gap-x-1.5 justify-center items-center bg-neutral-800 w-fit py-2 min-[2000px]:py-3 px-4 min-[2000px]:px-5 rounded-lg text-lg min-[2000px]:text-xl">
        Load more <IconArrowNarrowRight className="w-6 h-6 min-[2000px]:w-8 h-8" />
      </button>
    </div>
  );
};

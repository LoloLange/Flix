import { IconSearch } from "@tabler/icons-react";
import { useTransitionRouter } from "next-view-transitions";

export const SearchInput = () => {
  const router = useTransitionRouter();
  const formAction = (formData: FormData) => {
    const name = formData.get("search");
    if (name) {
      router.push(`/search?query=${name}`);
    }
  };
  return (
    <form action={formAction} className="relative">
      <IconSearch className="absolute top-[6px] min-[2000px]:top-[8px] left-[9px] text-gray-400 w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 z-10" />
      <input
        name="search"
        type="text"
        placeholder="Search"
        className="border border-gray-600 bg-neutral-700 bg-opacity-60 backdrop-blur-sm rounded-lg px-3 min-[2000px]:px-11 py-1 min-[2000px]:py-2 pl-9 outline-none min-[2000px]:text-xl"
      />
    </form>
  );
};

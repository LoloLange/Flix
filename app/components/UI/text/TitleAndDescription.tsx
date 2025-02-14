export const TitleAndDescription = ({
  searchType,
  title,
  description,
}: {
  searchType?: "movies" | "shows";
  title?: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col gap-y-2 items-center mb-10">
      <p className="text-3xl min-[2000px]:text-4xl font-bold">
        {searchType ? (searchType === "movies" ? "Movies" : "Tv Shows") : title}
      </p>
      <p className="text-gray-500 min-[2000px]:text-lg">
        {searchType
          ? "Discover all available " +
            (searchType === "movies" ? "movies" : "tv shows") +
            " on Flix"
          : description}
      </p>
    </div>
  );
};

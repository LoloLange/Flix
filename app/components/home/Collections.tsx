import { Collection } from "@/app/types/types";
import { SwiperContainer } from "./SwiperContainer";

export const Collections = ({ collections }: { collections: Collection[] }) => {
  return (
    <section className="flex flex-col gap-y-5">
        <p className="text-4xl px-10 text-gray-400 mb-5">Popular Collections</p>
      <SwiperContainer
        results={collections[0].parts}
        collectionName={collections[0].name}
      />
      <SwiperContainer
        results={collections[1].parts}
        collectionName={collections[1].name}
      />
    </section>
  );
};

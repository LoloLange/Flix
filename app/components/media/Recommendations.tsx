import { MovieDetails } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import { Link } from "next-view-transitions";

export const Recommendations = ({
  recommendations,
}: {
  recommendations: MovieDetails[];
}) => {
  return (
    <section>
      <p className="text-4xl font-bold">Recommendations</p>
      <div className="grid grid-cols-4 gap-y-5 gap-x-7 flex-wrap my-5">
        {recommendations.slice(0, 8).map((r) => (
          <div key={r.id} className="relative cursor-pointer">
            <Link href={`/movie/${r.id}`}>
              <div
                className="h-[220px] bg-neutral-700 rounded-2xl relative"
                style={{
                  backgroundImage: `url(${getPoster(r.backdrop_path)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "inset 0px -50px 50px 0px rgba(0, 0, 0, 0.8)",
                }}
              ></div>
            </Link>
            <div className="absolute bottom-5 px-5">
              <p className="text-lg">{r.title}</p>
              <p className="text-sm opacity-75">{r.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

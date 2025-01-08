import { MovieCredits } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";

export const Credits = ({
  credits,
  cast,
}: {
  credits: MovieCredits;
  cast: boolean;
}) => {
  const mappeable = cast ? credits.cast : credits.crew.filter((c) => typeof c !== 'string');
  return (
    <section>
      <p className="text-4xl font-bold">{cast ? "Cast" : "Crew"}</p>
      <div className="grid grid-cols-5 gap-y-5 gap-x-7 flex-wrap my-5">
        {mappeable.slice(0, cast ? 10 : 5).map((c) => (
          <div key={c.id} className="h-full">
            <div
              className="h-[300px] bg-neutral-700 rounded-2xl relative"
              style={{
                backgroundImage: `url(${getPoster(c.profile_path || '')})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0px -50px 50px 0px rgba(0, 0, 0, 0.8)",
              }}
            >
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-semibold">
                  {cast ? c.character : c.job}
                </p>
                <p className="text-gray-300">{c.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

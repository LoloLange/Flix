import { MovieCredits } from "@/app/types/types";
import { CreditsCard } from "../UI/cards/CreditsCard";

export const Credits = ({
  credits,
  cast,
}: {
  credits: MovieCredits;
  cast: boolean;
}) => {
  const mappeable = cast ? credits.cast : credits.crew.filter((c) => typeof c !== 'string');
  return (
    <section className="min-[800px]:mt-32 min-[1200px]:mt-20 min-[2000px]:mt-10">
      <p className="text-4xl font-bold">{cast ? "Cast" : "Crew"}</p>
      <div className="grid grid-cols-1 min-[550px]:grid-cols-2 min-[800px]:grid-cols-3 min-[1000px]:grid-cols-4 min-[1300px]:grid-cols-5 gap-y-5 gap-x-7 flex-wrap my-5">
        {mappeable.slice(0, cast ? 10 : 5).map((c) => (
          <CreditsCard key={c.id} c={c} cast={cast} />
        ))}
      </div>
    </section>
  );
};

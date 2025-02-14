import { Cast } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";

export const CreditsCard = ({
  c,
  cast,
}: {
  c: Cast;
  cast: boolean;
}) => {
  return (
    <div className="h-full">
      <div
        className="h-[300px] min-[2000px]:h-[350px] min-[2200px]:h-[450px] bg-neutral-700 rounded-2xl relative"
        style={{
          backgroundImage: `url(${getPoster(c.profile_path || "")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0px -70px 50px 0px rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="absolute bottom-4 left-4">
          <p className="text-lg min-[2000px]:text-xl font-semibold">{cast ? c.character : c.job}</p>
          <p className="text-gray-300 min-[2000px]:text-lg">{c.name}</p>
        </div>
      </div>
    </div>
  );
};

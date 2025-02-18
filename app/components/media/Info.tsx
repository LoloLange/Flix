import { months } from "@/app/lib/constants";
import { MovieDetails } from "@/app/types/types";

export const Info = ({ movie }: { movie: MovieDetails }) => {
  const formatCurrency = (value: number) =>
    `$${new Intl.NumberFormat("de-DE").format(value)}`;

  const Section = ({ title, items }: { title: string; items: string[] }) => (
    <div className="flex flex-col gap-y-3">
      <p className="text-2xl min-[2000px]:text-3xl text-gray-400">{title}</p>
      <div className="flex flex-col gap-y-1">
        {items.map((item, index) => (
          <p key={index} className="text-xl min-[650px]:text-lg min-[2000px]:text-2xl">
            {item}
          </p>
        ))}
      </div>
    </div>
  );

  const getMonth = (date: string) => {
    const month = date.split("-")[1];
    const monthName = months.find((m) => m.id === parseInt(month));
    const year = date.split("-")[0];
    return monthName?.name + " " + year;
  };

  return (
    <section className="flex justify-between max-[650px]:flex-col flex-wrap gap-10 min-[650px]:gap-5 my-10">
      <Section
        title="Production companies"
        items={movie.production_companies.map((c) => c.name)}
      />
      <Section
        title="Production countries"
        items={movie.production_countries.map((c) => c.name)}
      />
      {movie.revenue || movie.budget ? (
        <>
          <Section
            title="Revenue"
            items={[
              movie.revenue !== 0
                ? formatCurrency(movie.revenue)
                : "Not available",
            ]}
          />
          <Section
            title="Budget"
            items={[
              movie.budget !== 0
                ? formatCurrency(movie.budget)
                : "Not available",
            ]}
          />
        </>
      ) : (
        <>
          <Section
            title="Last Air Date"
            items={[
              getMonth(movie.last_air_date ?? "Not available") ??
                "Not available",
            ]}
          />
          <Section
            title="In Production"
            items={[movie.in_production ? "Yes" : "No"]}
          />
        </>
      )}
    </section>
  );
};

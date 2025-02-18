export const HomeSwiperSkeleton = () => {
  return (
    <div className="flex gap-x-2.5 px-14 min-[800px]:px-20 -mt-10 pb-5 w-full grid min-[1340px]:grid-cols-7 min-[1150px]:grid-cols-6 min-[900px]:grid-cols-5 min-[700px]:grid-cols-4 min-[520px]:grid-cols-3 grid-cols-2">
      <div className="h-[200px] min-[375px]:h-[220px] min-[400px]:h-[230px] min-[520px]:h-[200px] min-[700px]:h-[220px] min-[900px]:h-[250px] min-[1150px]:h-[280px] min-[1340px]:h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[200px] min-[375px]:h-[220px] min-[400px]:h-[230px] min-[520px]:h-[200px] min-[700px]:h-[220px] min-[900px]:h-[250px] min-[1150px]:h-[280px] min-[1340px]:h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[200px] min-[700px]:h-[220px] min-[900px]:h-[250px] min-[1150px]:h-[280px] min-[1340px]:h-[320px] rounded-lg animate-pulse bg-neutral-600 max-[520px]:hidden"></div>
      <div className="h-[220px] min-[900px]:h-[250px] min-[1150px]:h-[280px] min-[1340px]:h-[320px] rounded-lg animate-pulse bg-neutral-600 max-[700px]:hidden"></div>
      <div className="h-[250px] min-[1150px]:h-[280px] min-[1340px]:h-[320px] rounded-lg animate-pulse bg-neutral-600 max-[900px]:hidden"></div>
      <div className="h-[280px] min-[1340px]:h-[320px] rounded-lg animate-pulse bg-neutral-600 max-[1150px]:hidden"></div>
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600 max-[1340px]:hidden"></div>
    </div>
  );
};

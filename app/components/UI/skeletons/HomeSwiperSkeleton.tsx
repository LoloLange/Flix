export const HomeSwiperSkeleton = () => {
  return (
    <div className="flex gap-x-2.5 px-20 -mt-10 pb-5 w-full grid grid-cols-7">
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
      <div className="h-[320px] rounded-lg animate-pulse bg-neutral-600"></div>
    </div>
  );
};

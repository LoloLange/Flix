/* eslint-disable @next/next/no-img-element */
import { Swiper as SwiperType } from "swiper";
import { SwiperContainerComponent } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";
import useWindowSize from "@/app/hooks/useWindowSize";

export const SwiperContainer = ({
  results,
  setCurrentIndex,
  collectionName,
  tvShows,
  recommendations,
  setReady,
}: SwiperContainerComponent) => {
  const [isClient, setIsClient] = useState(false);
  const uniqueId = `swiper-${crypto.randomUUID()}`;
  const windowSize = useWindowSize();
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <section className={`${setCurrentIndex && "-mt-20 z-30"}`}>
      {setCurrentIndex ? (
        <p className="text-xl min-[2000px]:text-2xl min-[2000px]:mb-3 text-gray-300 px-14 min-[800px]:px-20 z-50">
          Trending movies
        </p>
      ) : tvShows ? (
        <p
          className={`text-lg min-[2000px]:text-2xl text-gray-300 px-5 min-[600px]:px-10`}
        >
          Trending Tv Shows
        </p>
      ) : recommendations ? (
        <p
          className={`text-lg min-[2000px]:text-2xl text-gray-300 px-5 min-[600px]:px-10`}
        >
          Recommendations
        </p>
      ) : !collectionName ? (
        <p
          className={`text-lg min-[2000px]:text-2xl text-gray-300 ${
            setCurrentIndex ? "px-20" : "px-5 min-[600px]:px-10 mt-3"
          }`}
        >
          Recent movies
        </p>
      ) : (
        <p
          className={`text-lg min-[2000px]:text-2xl text-gray-300 px-5 min-[600px]:px-10`}
        >
          {collectionName}
        </p>
      )}
      <div
        className={`overflow-hidden mt-2 mb-5 relative group ${
          setCurrentIndex
            ? "px-14 min-[800px]:px-20"
            : "px-5 min-[600px]:px-10 mt-3"
        } `}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            return setReady && setReady(true);
          }}
          onSlideChange={(swiper) => {
            return setCurrentIndex && setCurrentIndex(swiper.realIndex);
          }}
          slidesPerView={Math.min(
            setCurrentIndex && windowSize.width
              ? windowSize.width <= 520
                ? 2
                : windowSize.width <= 700
                ? 3
                : windowSize.width <= 900
                ? 4
                : windowSize.width <= 1150
                ? 5
                : windowSize.width <= 1340
                ? 6
                : 7
              : windowSize.width && windowSize.width <= 450
              ? 1
              : windowSize.width && windowSize.width <= 900
              ? 2
              : windowSize.width && windowSize.width <= 1200
              ? 3
              : 4,
            results.length
          )}
          spaceBetween={10}
          loop={true}
          watchOverflow={true}
          navigation={{
            nextEl: `.swiper-next-${uniqueId}`,
            prevEl: `.swiper-prev-${uniqueId}`,
          }}
          modules={[Navigation, Autoplay]}
          autoplay={setCurrentIndex ? { delay: 10000 } : false}
        >
          {results.map((m) => (
            <SwiperSlide key={m.id} className="relative cursor-pointer">
              <Link
                href={
                  tvShows || recommendations ? `/tv/${m.id}` : `/movie/${m.id}`
                }
              >
                <img
                  className="rounded-lg shadow-lg"
                  src={getPoster(
                    setCurrentIndex ? m.poster_path : m.backdrop_path
                  )}
                  alt={m.title + " poster"}
                />
              </Link>
              {!setCurrentIndex && (
                <div className="absolute bottom-3 min-[600px]:bottom-5 px-5">
                  <p className="text-sm min-[600px]:text-base min-[750px]:text-lg min-[2000px]:text-2xl">
                    {m.title ? m.title : m.name}
                  </p>
                  <p className="text-[10px] min-[600px]:text-xs min-[750px]:text-sm min-[2000px]:text-base opacity-75">
                    {typeof m.release_date === "string"
                      ? m.release_date
                      : m.first_air_date}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`absolute right-0 -top-1 h-full flex items-center z-20 max-[600px]:hidden ${
            setCurrentIndex
              ? "px-3 min-[800px]:px-10 min-[2000px]:px-5"
              : "px-0 opacity-0 group-hover:opacity-100 duration-300"
          } cursor-pointer swiper-next-${uniqueId}`}
        >
          <IconChevronRight className="w-8 h-8 min-[2000px]:w-10 min-[2000px]:h-10" />
        </div>

        <div
          className={`absolute left-0 -top-1 h-full flex items-center z-20 max-[600px]:hidden ${
            setCurrentIndex
              ? "px-3 min-[800px]:px-10 min-[2000px]:px-5"
              : "px-0 opacity-0 group-hover:opacity-100 duration-300"
          } cursor-pointer swiper-prev-${uniqueId}`}
        >
          <IconChevronLeft className="w-8 h-8 min-[2000px]:w-10 min-[2000px]:h-10" />
        </div>
      </div>
    </section>
  );
};

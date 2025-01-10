/* eslint-disable @next/next/no-img-element */
import { TrendingMovies, RecentMovies, Collection } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "next-view-transitions";

export const SwiperContainer = ({
  results,
  setCurrentIndex,
  collectionName,
  tvShows,
  recommendations,
  setReady,
  ready,
}: {
  results: TrendingMovies[] | RecentMovies[] | Collection["parts"];
  setCurrentIndex?: Dispatch<SetStateAction<number>>;
  collectionName?: string;
  tvShows?: boolean;
  recommendations?: boolean;
  setReady?: Dispatch<SetStateAction<boolean>>;
  ready?: boolean;
}) => {
  const [isClient, setIsClient] = useState(false);
  const uniqueId = `swiper-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita la renderización en el servidor
  return (
    <section className={`${setCurrentIndex && "-mt-20 z-30"}`}>
      {setCurrentIndex ? (
        <p className="text-xl text-gray-300 px-20">Trending movies</p>
      ) : tvShows ? (
        <p className={`text-lg text-gray-300 px-10`}>Trending Tv Shows</p>
      ) : recommendations ? (
        <p className={`text-lg text-gray-300 px-10`}>Recommendations</p>
      ) : !collectionName ? (
        <p
          className={`text-lg text-gray-300 ${
            setCurrentIndex ? "px-20" : "px-10 mt-3"
          }`}
        >
          Recent movies
        </p>
      ) : (
        <p className={`text-lg text-gray-300 px-10`}>{collectionName}</p>
      )}
      <div
        className={`overflow-hidden mt-2 mb-5 relative group ${
          setCurrentIndex ? "px-20" : "px-10 mt-3"
        } `}
      >
        <Swiper
          onSlideChange={(swiper) =>
            setCurrentIndex && setCurrentIndex(swiper.realIndex)
          }
          slidesPerView={setCurrentIndex ? 7 : 4}
          spaceBetween={10}
          loop={ready && true}
          navigation={{
            nextEl: `.swiper-next-${uniqueId}`,
            prevEl: `.swiper-prev-${uniqueId}`,
          }}
          modules={[Navigation, Autoplay]}
          autoplay={setCurrentIndex ? { delay: 10000 } : false}
          onSwiper={() => setReady && setReady(true)}
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
                <div className="absolute bottom-5 px-5">
                  <p className="text-lg">{m.title ? m.title : m.name}</p>
                  <p className="text-sm opacity-75">
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
          className={`absolute right-0 -top-1 h-full flex items-center z-20 ${
            setCurrentIndex ? "px-10" : "px-0 opacity-0 group-hover:opacity-100 duration-300"
          } cursor-pointer swiper-next-${uniqueId}`}
        >
          <IconChevronRight className="w-8 h-8" />
        </div>

        <div
          className={`absolute left-0 -top-1 h-full flex items-center z-20 ${
            setCurrentIndex ? "px-10" : "px-0 opacity-0 group-hover:opacity-100 duration-300"
          } cursor-pointer swiper-prev-${uniqueId}`}
        >
          <IconChevronLeft className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

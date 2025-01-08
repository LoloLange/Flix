/* eslint-disable @next/next/no-img-element */
import { TrendingMovies, RecentMovies } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";
import { Link } from "next-view-transitions";

export const SwiperContainer = ({
  results,
  setCurrentIndex,
}: {
  results: TrendingMovies[] | RecentMovies[];
  setCurrentIndex?: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <section className={`${setCurrentIndex && "-mt-20 z-30"}`}>
      {setCurrentIndex ? (
        <p className="text-xl text-white px-20">Trending movies</p>
      ) : (
        <p
          className={`text-xl text-white ${
            setCurrentIndex ? "px-20" : "px-10 mt-3"
          }`}
        >
          Recent movies
        </p>
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
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 10000 }}
        >
          {results.map((m) => (
            <SwiperSlide key={m.id} className="relative cursor-pointer">
              <Link href={`/movie/${m.id}`}>
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
                  <p className="text-lg">{m.title}</p>
                  <p className="text-sm opacity-75">{m.release_date}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`absolute right-0 -top-1 h-full flex items-center z-20 opacity-0 group-hover:opacity-100 duration-300 ${
            setCurrentIndex ? "px-10" : "px-0"
          } cursor-pointer swiper-next`}
        >
          <IconChevronRight className="w-8 h-8" />
        </div>

        <div
          className={`absolute left-0 -top-1 h-full flex items-center z-20 opacity-0 group-hover:opacity-100 duration-300 ${
            setCurrentIndex ? "px-10" : "px-0"
          } cursor-pointer swiper-prev`}
        >
          <IconChevronLeft className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

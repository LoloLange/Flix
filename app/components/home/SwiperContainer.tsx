/* eslint-disable @next/next/no-img-element */
import { TrendingMovies } from "@/app/types/types";
import { getPoster } from "@/app/utils/getPoster";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

export const SwiperContainer = ({
  results,
  setCurrentIndex,
}: {
  results: TrendingMovies[];
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <section className="-mt-20 z-30">
      <p className="text-xl text-white px-20">Trending movies</p>
      <div className="overflow-hidden mt-2 mb-5 relative px-20">
        <Swiper
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          slidesPerView={7}
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
            <SwiperSlide key={m.id}>
              <img
                className="w-[200px] h-auto rounded-lg shadow-lg"
                src={getPoster(m.poster_path)}
                alt={m.title + " poster"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-0 -top-5 h-full flex items-center z-20 px-12 cursor-pointer swiper-next">
          <IconChevronRight className="w-8 h-8" />
        </div>

        <div className="absolute left-0 -top-5 h-full flex items-center z-20 px-8 cursor-pointer swiper-prev">
          <IconChevronLeft className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

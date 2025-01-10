"use client";

import { Video } from "@/app/types/types";
import { Dispatch, SetStateAction } from "react";
import ReactPlayer from "react-player";

export const Trailer = ({ video, setTrailer }: { video: Video, setTrailer: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <section onClick={() => setTrailer(false)} className="flex w-full h-screen justify-center items-center fixed top-0 z-50 bg-neutral-900 bg-opacity-60">
      <div className="w-[1000px] h-[550px]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.key}`}
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};

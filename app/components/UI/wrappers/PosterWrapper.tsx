import { ReactNode } from "react";

export const PosterWrapper = ({ children, poster, extraClassName }: { children?: ReactNode, poster: string, extraClassName?: string }) => {
  return (
    <div
      className={`w-full relative -z-10 ${extraClassName}`}
      style={{
        width: "100%",
        height: innerHeight >= 2000 ? "80vh" : "75vh",
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
        boxShadow: "inset 200px 50px 500px 200px rgba(0, 0, 0, 0.6)",
        maskImage: "linear-gradient(black 85%, transparent)",
      }}
    >{children}</div>
  );
};

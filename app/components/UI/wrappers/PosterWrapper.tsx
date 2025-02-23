import useWindowSize from "@/app/hooks/useWindowSize";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const PosterWrapper = ({ children, poster, extraClassName, noMask }: { children?: ReactNode, poster: string, extraClassName?: string; noMask?: boolean }) => {
  const windowSize = useWindowSize();
  const pathname = usePathname();
  return (
    <div
      className={`w-full absolute ${pathname !== '/' ? "min-[800px]:relative" : "relative"} ${extraClassName}`}
      style={{
        width: "100%",
        height: windowSize.width && windowSize.width >= 2000 ? "80vh" : windowSize.width && windowSize.width >= 500 ? "75vh" : "70vh",
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
        boxShadow: windowSize.width && windowSize.width >= 800 ? "inset 200px 50px 500px 200px rgba(0, 0, 0, 0.6)" : "inset 500px 500px 500px 500px rgba(0, 0, 0, 0.65)",
        maskImage: !noMask ? "linear-gradient(black 60%, transparent)" : "none",
      }}
    >{children}</div>
  );
};

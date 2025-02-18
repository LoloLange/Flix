import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    
    if(windowSize.width && windowSize.width > 1000) {
      if (scrollY >= 175) setIsScroll(true);
      if (scrollY < 175) setIsScroll(false);
    } else {
      if (scrollY >= 100) setIsScroll(true);
      if (scrollY < 100) setIsScroll(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, windowSize.width]);

  return isScroll;
};

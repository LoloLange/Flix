import { ReactNode } from "react";

export const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return <section className="px-20 mt-28 min-[2000px]:mt-32">{children}</section>;
};

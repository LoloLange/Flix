import { ReactNode } from "react";

export const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return <section className="px-20 mt-28">{children}</section>;
};

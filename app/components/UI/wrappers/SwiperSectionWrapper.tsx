import { ReactNode } from "react";

export const SwiperSectionWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <section className="flex flex-col gap-y-5">
            {children}
        </section>
    )
}
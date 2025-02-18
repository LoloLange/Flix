import { navbar } from "@/app/lib/constants";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "next-view-transitions";

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer className="h-[150px] min-[2000px]:h-[175px] w-full mt-5 flex justify-center">
      <div className="flex justify-center min-[500px]:justify-between items-center h-full w-full max-[500px]:flex-col gap-y-7 max-[600px]:px-10 max-[900px]:px-20 min-[900px]:w-[800px]">
        <div className="flex items-center h-full max-[500px]:hidden">
          <img className="w-7 min-[500px]:w-8" src="/logo.webp" alt="logo" />
        </div>
        <div className="flex gap-x-4 min-[500px]:gap-x-5 min-[2000px]:gap-x-6 text-lg min-[2000px]:text-xl">
          {navbar.map((n) => (
            <Link key={n.name} href={n.path} className="hover:text-blue-500 duration-300">{n.name}</Link>
          ))}
        </div>
        <div>
          <a href="https://github.com/LoloLange/flix">
            <IconBrandGithub className="w-9 h-9 min-[500px]:w-8 min-[500px]:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

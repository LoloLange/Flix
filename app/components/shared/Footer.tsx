import { navbar } from "@/app/lib/constants";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "next-view-transitions";

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer className="h-[150px] w-full mt-24 flex justify-center">
      <div className="flex justify-between items-center h-full w-[800px]">
        <div className="flex items-center h-full">
          <img className="w-8" src="/logo.webp" alt="logo" />
        </div>
        <div className="flex gap-x-5 text-lg">
          {navbar.map((n) => (
            <Link key={n.name} href={n.path} className="hover:text-blue-500 duration-300">{n.name}</Link>
          ))}
        </div>
        <div>
          <a href="https://github.com/LoloLange/flix">
            <IconBrandGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

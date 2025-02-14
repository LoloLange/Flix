"use client";
import { Link } from "next-view-transitions";
import { navbar } from "../../lib/constants";
import { IconBrandFlipboard } from "@tabler/icons-react";
import { useScroll } from "../../hooks/useScroll";
import { usePathname } from "next/navigation";
import { SearchInput } from "../UI/input/SearchInput";

export default function Header() {
  const scroll = useScroll();
  const pathname = usePathname();
  return (
    <header
      className={`py-4 px-14 flex items-center justify-between fixed top-0 w-full z-50 ${
        scroll || pathname.includes("/explore") || pathname === "/watchlist" || pathname === "/search"
          ? "bg-neutral-900 bg-opacity-90 backdrop-blur-3xl transition-all duration-700 border-b-[1px] border-b-gray-500"
          : "bg-transparent backdrop-blur-none transition-all duration-700 border-b-0 border-b-transparent"
      }`}
    >
      <IconBrandFlipboard className="w-9 h-9 min-[2000px]:w-12 min-[2000px]:h-12 " />
      <nav className="flex gap-x-10 min-[2000px]:gap-x-14 pl-[200px] min-[2000px]:pl-[300px] font-semibold min-[2000px]:text-xl">
        {navbar.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="hover:text-blue-500 duration-300 font-bold"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <SearchInput />
    </header>
  );
}

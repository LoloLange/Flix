"use client";
import { Link } from "next-view-transitions";
import { navbar } from "../../lib/constants";
import { IconBrandFlipboard, IconMenuDeep, IconX } from "@tabler/icons-react";
import { useScroll } from "../../hooks/useScroll";
import { usePathname } from "next/navigation";
import { SearchInput } from "../UI/input/SearchInput";
import { useEffect, useState } from "react";

export default function Header() {
  const scroll = useScroll();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header
      className={`py-4 px-10 min-[1200px]:px-14 flex items-center justify-between fixed top-0 w-full z-50 ${
        scroll ||
        pathname.includes("/explore") ||
        pathname === "/watchlist" ||
        pathname === "/search"
          ? "bg-neutral-900 bg-opacity-90 backdrop-blur-3xl transition-all duration-700 border-b-[1px] border-b-gray-500"
          : "bg-transparent backdrop-blur-none transition-all duration-700 border-b-0 border-b-transparent"
      }`}
    >
      <IconBrandFlipboard className="w-9 h-9 min-[2000px]:w-12 min-[2000px]:h-12 max-[1000px]:hidden" />
      <IconMenuDeep
        className={`w-9 h-9 min-[1001px]:hidden scale-x-[-1] ${
          !open ? "block" : "hidden"
        } z-50`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="w-screen h-screen bg-neutral-900 bg-opacity-90 fixed top-0 left-0 z-40 transform transition-transform duration-300 flex justify-center items-center"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col items-center justify-center gap-y-10 min-[2000px]:gap-y-14 font-semibold text-2xl min-[1000px]:text-3xl">
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
        </div>
      )}
      <IconX
        className={`w-9 h-9 min-[1001px]:hidden scale-x-[-1] ${
          open ? "block" : "hidden"
        } z-50`}
        onClick={() => setOpen(false)}
      />
      <nav className="flex gap-x-10 min-[2000px]:gap-x-14 pl-[200px] min-[2000px]:pl-[300px] font-semibold min-[2000px]:text-xl max-[1000px]:hidden">
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

import Link from "next/link";
import { navbar } from "../../lib/constants";
import { IconBrandFlipboard, IconSearch } from "@tabler/icons-react";

export default function Header() {
  return (
    <header
      className="py-5 px-14 flex items-center justify-between fixed top-0 w-full z-50"
    >
      <IconBrandFlipboard className="w-9 h-9" />
      <nav className="flex gap-x-10 pl-[200px] font-semibold">
        {navbar.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="hover:text-blue-500 duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="relative">
        <IconSearch className="absolute top-[5px] left-2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar"
          className="border border-gray-600 bg-neutral-700 bg-opacity-30 rounded-lg px-3 py-1 pl-9 outline-none"
        />
      </div>
    </header>
  );
}

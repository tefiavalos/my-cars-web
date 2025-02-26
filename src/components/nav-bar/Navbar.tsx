"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Menu from "./Menu";
import NavBarButtons from "./NavBarButtons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b-[1px] border-gray px-8 py-4 flex items-center justify-between font-montserrat relative">
      <div className="flex items-center gap-12">
        <Link href="/">
          <Image
            aria-hidden
            src="/logo.svg"
            alt="File icon"
            width={38}
            height={39}
          />
        </Link>

        <NavBarButtons />
      </div>

      <div className="flex gap-4 text-textDark text-sm font-montserrat">
        <p className="hidden md:block">Menú</p>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none flex gap-4"
        >
          <Image
            aria-hidden
            src="/menu.svg"
            alt="File icon"
            width={25}
            height={18}
          />
        </button>
      </div>

      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </nav>
  );
}

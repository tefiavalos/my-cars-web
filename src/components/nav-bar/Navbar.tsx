'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-[1px] border-gray px-8 py-4 flex items-center justify-between font-montserrat">
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

        <div className="hidden md:flex gap-10 font-semibold text-sm font-montserrat">
          <Link href="/modelos" className="text-primary border-b-2 border-primary pb-1">Modelos</Link>
          <Link href="/ficha" className="text-textDark hover:text-primary">Ficha de modelo</Link>
        </div>
      </div>
      <div className="flex gap-4 text-textDark text-sm font-montserrat">
      <p className="hidden md:block">Menú</p>
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none flex gap-4">
          <Image
            aria-hidden
            src="/menu.svg"
            alt="File icon"
            width={25}
            height={18}
          />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute z-50 top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6 text-textDark text-lg font-medium uppercase border-t-2 border-grayLight">
          <Link href="/modelos" className="text-primary border-b-2 border-primary pb-1">Modelos</Link>
          <Link href="/ficha" className="text-textDark hover:text-primary">Ficha de modelo</Link>
        </div>
      )}
    </nav>
  );
}

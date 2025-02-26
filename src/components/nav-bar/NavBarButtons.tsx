"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarButtons() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-10 font-semibold text-sm font-montserrat relative">
      <div className="relative">
        <Link
          href="/modelos"
          className={`pb-3 ${
            pathname === "/modelos"
              ? "text-primary"
              : "text-textDark hover:text-primary"
          }`}
        >
          Modelos
        </Link>
        {pathname === "/modelos" && (
          <div className="absolute left-[-17px] bottom-[-25px] h-[3px] w-[100px] bg-primary" />
        )}
      </div>

      <div className="relative">
        <Link
          href="/modelos/1"
          className={`pb-3 ${
            /^\/modelos\/\d+$/.test(pathname)
              ? "text-primary"
              : "text-textDark hover:text-primary"
          }`}
        >
          Ficha de modelo
        </Link>
        {/^\/modelos\/\d+$/.test(pathname) && (
          <div className="absolute left-[-17px] bottom-[-25px] h-[3px] w-[160px] bg-primary" />
        )}
      </div>
    </div>
  );
}

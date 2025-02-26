"use client";

import { menu } from "@/config/config";
import Link from "next/link";

export default function Menu({
  setMenuOpen,
}: {
  setMenuOpen: (open: boolean) => void;
}) {
  const menuSections = [
    menu.mainMenu,
    menu.toyotaServices,
    menu.contactOptions,
  ];

  return (
    <div
      className="fixed z-50 top-0 right-0 bg-white shadow-lg flex flex-col text-textDark text-lg border-l border-grayLight 
      h-screen w-full md:w-[400px] overflow-y-auto"
    >
      <button
        className="text-right text-sm p-4"
        onClick={() => setMenuOpen(false)}
      >
        Cerrar ✖
      </button>

      <div className="flex flex-col flex-grow px-6">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col">
            {section.map((item, index) => (
              <Link
                key={index}
                href="/modelos"
                className="text-md py-2 text-right"
              >
                {item}
              </Link>
            ))}
            <hr className="border-grayLight my-4" />
          </div>
        ))}
      </div>

      <div className="bg-menuGray flex flex-col w-full py-4 px-6 gap-2 mt-auto">
        {menu.extraInfo.map((item, index) => (
          <Link key={index} href="/modelos" className="text-md py-2 text-right">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

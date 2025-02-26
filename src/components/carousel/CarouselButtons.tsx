"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselButtons({
  onClickLeft,
  onClickRight,
}: {
  onClickLeft: () => void;
  onClickRight: () => void;
}) {
  return (
    <>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-[45px] h-full bg-white/60 rounded-md items-center justify-center"
        onClick={onClickLeft}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-[45px] h-full bg-white/60 rounded-md items-center justify-center"
        onClick={onClickRight}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </>
  );
}

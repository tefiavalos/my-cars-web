"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CarouselButtons from "./CarouselButtons";
import Pagination from "./Pagination";

export default function Carousel({
  features,
}: {
  features: { name: string; description: string; image: string }[];
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const updatePages = () => {
      if (carouselRef.current) {
        const visibleWidth = carouselRef.current.clientWidth;
        const totalWidth = carouselRef.current.scrollWidth;
        const pages = Math.ceil(totalWidth / visibleWidth);
        setTotalPages(pages);
      }
    };

    updatePages();
    window.addEventListener("resize", updatePages);
    return () => window.removeEventListener("resize", updatePages);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const visibleWidth = carouselRef.current.clientWidth;
        const pageIndex = Math.round(scrollLeft / visibleWidth);
        setCurrentPage(pageIndex);
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener("scroll", handleScroll);
    return () => carousel?.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const visibleWidth = carouselRef.current.clientWidth;
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - visibleWidth
          : carouselRef.current.scrollLeft + visibleWidth;

      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (carouselRef.current) {
      const visibleWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: visibleWidth * pageIndex,
        behavior: "smooth",
      });

      setTimeout(() => {
        setCurrentPage(pageIndex);
      }, 300);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#F7F7F7] 
  before:absolute before:top-0 before:left-0 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10
  after:absolute after:top-0 after:right-0 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10
  before:w-8 sm:before:w-16 after:w-8 sm:after:w-16 py-6"
    >
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar items-center gap-4 px-4 sm:px-8 lg:px-16"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {features.map((item: any, index: number) => (
          <div
            key={index}
            className="shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] xl:w-[25%] max-w-[350px] p-4 h-[300px] flex flex-col justify-between"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={180}
              className="w-full h-[150px] object-cover rounded-lg"
            />
            <h3 className="font-semibold text-titleGray my-3 line-clamp-2">
              {item.name}
            </h3>
            <p className="text-titleGray text-[14px] line-clamp-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <CarouselButtons
        onClickLeft={() => scroll("left")}
        onClickRight={() => scroll("right")}
      />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        scrollToPage={scrollToPage}
      />
    </div>
  );
}

"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const items = [
  {
    title: "Nuevos motores Toyota",
    description: "Dos alternativas diésel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).",
    image: "/images/motor.jpg",
  },
  {
    title: "Suspensión mejorada",
    description: "Mayor confort de marcha, estabilidad y capacidad Off Road.",
    image: "/images/suspension.jpg",
  },
  {
    title: "Transmisión automática",
    description: "Posibilidad de elección de caja automática de manejo.",
    image: "/images/automatica.jpg",
  },
  {
    title: "Transmisión manual",
    description: "Posibilidad de elección de caja automática de manejo.",
    image: "/images/manual.jpg",
  },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    containScroll: "trimSnaps", 
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", checkScroll);
      checkScroll();
    }
  }, [emblaApi, checkScroll]);

  return (
    <div className="relative w-full mx-auto bg-[#F7F7F7]">
      {/* Flecha Izquierda */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[45px] h-full bg-white/60 rounded-md flex items-center justify-center"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Carrusel */}
      <div className="overflow-hidden relative px-16" ref={emblaRef}>
        <div className="flex gap-4"> {/* Espaciado entre elementos */}
          {items.concat(items).map((item, index) => ( // Duplicamos para loop infinito
            <div key={index} className="w-[268px] flex-none p-4"> {/* Width fijo */}
              <Image src={item.image} alt={item.title} width={268} height={200} className="w-full h-36 object-cover rounded-lg" />
              <h3 className="mt-2 font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Flecha Derecha */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[45px] h-full bg-white/60 rounded-md flex items-center justify-center"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Paginación */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <span
            key={index}
            className={clsx(
              "w-2 h-2 rounded-full transition-all",
              selectedIndex === index ? "bg-gray-900" : "bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}


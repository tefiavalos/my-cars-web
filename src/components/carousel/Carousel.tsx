"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const FeatureSlider = ({ features }: { features: { name: string; description: string; image: string }[] }) => {

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300; 
      sliderRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="relative w-full">
     
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>

     
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-4 scrollbar-hide"
      >
        {features.map((feature, index) => (
          <div key={index} className="min-w-[300px] snap-center bg-white shadow-lg rounded-lg p-4">
            <img src={feature.image} alt={feature.image} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="font-semibold mt-2">{feature.name}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default FeatureSlider;


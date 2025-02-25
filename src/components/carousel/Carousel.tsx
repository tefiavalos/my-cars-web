"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { title: "Nuevos motores Toyota", description: "Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).", image: "/engine.png" },
  { title: "Suspensión mejorada", description: "Mayor confort de marcha, estabilidad y capacidad Off Road.", image: "/suspension.png" },
  { title: "Transmisión automática", description: "Posibilidad de elección de caja automática de manejo.", image: "/auto-transmission.png" },
  { title: "Transmisión manual", description: "Posibilidad de elección de caja automática de manejo.", image: "/manual-transmission.png" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2; // Cantidad de cards visibles en desktop

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative flex items-center">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent opacity-50 blur-lg z-10" />
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20" onClick={prevSlide}>
          <ChevronLeft />
        </button>
        <div className="relative flex w-full overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${(currentIndex / cards.length) * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="min-w-1/2 sm:min-w-1/3 p-4 relative">
                <div className="relative bg-white rounded-lg shadow-lg p-4">
                  <img src={card.image} alt={card.title} className="w-48 h-48 object-cover rounded-lg" />
                  <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20" onClick={nextSlide}>
          <ChevronRight />
        </button>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent opacity-50 blur-lg z-10" />
      </div>
      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <span key={index} className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
}
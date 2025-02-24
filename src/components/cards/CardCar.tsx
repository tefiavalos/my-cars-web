"use client";

import { Model } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  model: Model
}

const CarCard: React.FC<CarCardProps> = ({ model }) => {
  return (
    <div className="p-4 rounded-lg w-64 text-center transition-all duration-300 relative group cursor-pointer">
      <h2 className="font-montserrat text-lg font-bold text-black transition-colors duration-300 group-hover:text-primary">
        {model.name}
      </h2>

      <p className="text-textDark text-sm">
        {model.year} | ${model.price}
      </p>

      <div className="relative w-full h-32 my-2">
        <Image
          src={model.photo}
          alt={model.name}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <Link
        href={`/modelos/${model.id}`}
        className="bg-textDark w-[152px] h-[34px] text-white font-montserrat text-sm py-2 px-4 rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Ver Modelo
      </Link>
    </div>
  );
};

export default CarCard;

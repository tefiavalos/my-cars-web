"use client";

import { Model } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  model: Model;
}

const CarCard: React.FC<CarCardProps> = ({ model }) => {
  return (
    <div className="p-4 rounded-lg w-full max-w-[270px] min-h-[260px] text-center transition-all duration-300 relative group cursor-pointer flex flex-col justify-between">
      <h2 className="font-montserrat text-lg font-bold text-black transition-colors duration-300 group-hover:text-primary">
        {model.name}
      </h2>
      <p className="text-textDark text-sm">
        {model.year} | ${model.price}
      </p>

      <div className="relative w-full h-[150px] flex items-center justify-center">
        <Image
          src={model.photo}
          alt={model.name}
          width={200}
          height={100}
          objectFit="contain"
        />
      </div>

      <div className="mt-auto">
        <Link
          href={`/modelos/${model.id}`}
          className="bg-textDark w-[152px] h-[34px] text-white font-montserrat text-sm py-2 px-4 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 mx-auto block"
        >
          Ver Modelo
        </Link>
      </div>
    </div>
  );
};

export default CarCard;

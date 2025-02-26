"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { sortOptions } from "@/config/config";

interface FiltersBarProps {
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

const OrderBy = ({ selectedSort, onSortChange }: FiltersBarProps) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
        className="flex items-center gap-2 text-titleGray font-montserrat text-sm"
      >
        Ordenar por
        {isSortMenuOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isSortMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-grey z-10">
          {sortOptions.map((option) => (
            <button
              key={option}
              className={`block w-full text-left px-4 py-2 text-titleGray hover:bg-grayLight ${
                selectedSort === option ? "font-bold" : ""
              }`}
              onClick={() => {
                onSortChange(option);
                setIsSortMenuOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderBy;

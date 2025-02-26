"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { filterOptions } from "@/config/config";

interface FiltersByBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterBy = ({ selectedFilter, onFilterChange }: FiltersByBarProps) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex gap-4 items-center">
        <span className="text-titleGray font-montserrat text-sm">
          Filtrar por
        </span>
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-1 rounded-full text-sm font-montserrat ${
              selectedFilter === filter
                ? "bg-grayLight text-textDark font-semibold"
                : "text-textDark hover:bg-grayLight"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="relative md:hidden">
        <button
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
          className="flex items-center gap-2 text-titleGray font-montserrat text-sm"
        >
          Filtrar por
          {isFilterMenuOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {isFilterMenuOpen && (
          <div className="absolute left-0 top-full mt-2 w-[220px] bg-white shadow-lg rounded-lg border border-grey z-10">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`block w-full text-left px-4 py-3 text-titleGray hover:bg-grayLight ${
                  selectedFilter === filter ? "font-bold" : ""
                }`}
                onClick={() => {
                  onFilterChange(filter);
                  setIsFilterMenuOpen(false);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterBy;

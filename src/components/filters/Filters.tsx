"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { filterOptions, sortOptions } from "../../config/config";


interface FiltersBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

const FiltersBar = ({
  selectedFilter,
  onFilterChange,
  selectedSort,
  onSortChange,
}: FiltersBarProps) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center border-b border-grey py-3">
      <div className="flex gap-4 items-center">
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
    </div>
  );
};

export default FiltersBar;

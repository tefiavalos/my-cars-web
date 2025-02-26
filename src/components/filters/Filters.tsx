"use client";

import FilterBy from "./FilterBy";
import OrderBy from "./OrderBy";

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
  return (
    <div className="flex justify-between items-center border-b border-grey py-3 mb-10">
      <FilterBy
        selectedFilter={selectedFilter}
        onFilterChange={onFilterChange}
      />

      <OrderBy selectedSort={selectedSort} onSortChange={onSortChange} />
    </div>
  );
};

export default FiltersBar;

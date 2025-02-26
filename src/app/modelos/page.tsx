"use client";

import { CarCard } from "@/components";
import FiltersBar from "@/components/filters/Filters";
import useFilteredModels from "@/hooks/useFilteredModels";

export default function ModelosPage() {
  const {
    sortedModels,
    selectedFilter,
    setSelectedFilter,
    selectedSort,
    setSelectedSort,
  } = useFilteredModels();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="text-xl font-bold my-20">Descubrí todos los modelos</h1>
      <FiltersBar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center place-items-center">
        {sortedModels.map((model) => (
          <CarCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}

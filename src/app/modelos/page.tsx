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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Descubrí todos los modelos</h1>
      <FiltersBar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />
      <div className="grid grid-cols-3 gap-6 mt-4">
        {sortedModels.map((model) => (
          <CarCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}

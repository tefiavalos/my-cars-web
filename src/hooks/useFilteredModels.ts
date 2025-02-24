import { fetchModels } from "@/app/lib/api";
import { Model } from "@/app/lib/types";
import { useState, useEffect, useMemo } from "react";
import { filterSegmentMapping } from "../config/config";


export default function useFilteredModels() {
    const [models, setModels] = useState<Model[]>([]);  
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [selectedSort, setSelectedSort] = useState("Nada");

  useEffect(() => {
    const loadModels = async () => {
      const data = await fetchModels();
      setModels(data);
    };
    loadModels();
  }, []);

  const filteredModels = useMemo(() => {
    if (selectedFilter === "Todos") return models;
    return models.filter((model) => filterSegmentMapping[selectedFilter]?.includes(model.segment));
  }, [models, selectedFilter]);

  
  const sortedModels = useMemo(() => {
    const sorted = [...filteredModels];
    switch (selectedSort) {
      case "De menor a mayor precio":
        return sorted.sort((a, b) => a.price - b.price);
      case "De mayor a menor precio":
        return sorted.sort((a, b) => b.price - a.price);
      case "Más nuevos primero":
        return sorted.sort((a, b) => b.year - a.year);
      case "Más viejos primero":
        return sorted.sort((a, b) => a.year - b.year);
      default:
        return sorted;
    }
  }, [filteredModels, selectedSort]);

  return {
    sortedModels,
    selectedFilter,
    setSelectedFilter,
    selectedSort,
    setSelectedSort,
  };
}

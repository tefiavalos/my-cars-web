export const filterOptions = [
  "Todos",
  "Autos",
  "Pickups y Comerciales",
  "SUVs y Crossovers",
];
export const sortOptions = [
  "Nada",
  "De menor a mayor precio",
  "De mayor a menor precio",
  "Más nuevos primero",
  "Más viejos primero",
];
export const filterSegmentMapping: { [key: string]: string[] } = {
  "Autos": ["Sedan", "Hatchback"],
  "Pickups y Comerciales": ["Pickups y Comerciales"],
  "SUVs y Crossovers": ["SUVs"],
};
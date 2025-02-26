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
  Autos: ["Sedan", "Hatchback"],
  "Pickups y Comerciales": ["Pickups y Comerciales"],
  "SUVs y Crossovers": ["SUVs"],
};

export const menu = {
  mainMenu: [
    "Modelos",
    "Servicios y Accesorios",
    "Financiación",
    "Reviews y Comunidad",
  ],

  toyotaServices: [
    "Toyota Mobility Service",
    "Toyota Gazoo Racing",
    "Toyota Híbridos",
  ],

  contactOptions: ["Concesionarios", "Test Drive", "Contacto"],

  extraInfo: [
    "Actividades",
    "Servicios al Cliente",
    "Ventas Especiales",
    "Innovación",
    "Prensa",
    "Acerca de...",
  ],
};

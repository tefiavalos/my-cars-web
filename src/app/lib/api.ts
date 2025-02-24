import { Model, ModelDetails } from "./types";

const BASE_URL = "https://challenge.egodesign.dev/api/models";

export async function fetchModels(): Promise<Model[]> {
  const res = await fetch(BASE_URL, { cache: "no-store" }); // No-store para siempre obtener datos frescos
  if (!res.ok) throw new Error("Error al obtener modelos");
  return res.json();
}

export async function fetchModelById(id: number): Promise<ModelDetails> {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener detalles del modelo");
  return res.json();
}

import type { SceneId } from "@/film/script";

export type Scene = {
  id: SceneId;
  still: string;
  clip: string;
  alt: string;
};

export const SCENES: Record<SceneId, Scene> = {
  city: {
    id: "city",
    still: "/film/city.jpg",
    clip: "/film/city.mp4",
    alt: "Ciudad de noche unida por hilos de luz azul",
  },
  dorm: {
    id: "dorm",
    still: "/film/dorm.jpg",
    clip: "/film/dorm.mp4",
    alt: "Cuarto universitario de noche, manos sobre un portátil",
  },
  facemash: {
    id: "facemash",
    still: "/film/facemash.jpg",
    clip: "/film/facemash.mp4",
    alt: "Portátil antiguo con dos retratos borrosos",
  },
  quad: {
    id: "quad",
    still: "/film/quad.jpg",
    clip: "/film/quad.mp4",
    alt: "Campus universitario al atardecer",
  },
  house: {
    id: "house",
    still: "/film/house.jpg",
    clip: "/film/house.mp4",
    alt: "Casa de Palo Alto convertida en oficina de noche",
  },
  feed: {
    id: "feed",
    still: "/film/feed.jpg",
    clip: "/film/feed.mp4",
    alt: "Muro de publicaciones cayendo como una cascada de luz",
  },
  photos: {
    id: "photos",
    still: "/film/photos.jpg",
    clip: "/film/photos.mp4",
    alt: "Galaxia de fotografías flotando en la oscuridad",
  },
  ipo: {
    id: "ipo",
    still: "/film/ipo.jpg",
    clip: "/film/ipo.mp4",
    alt: "Piso de una bolsa el día de una salida a cotizar",
  },
  campus: {
    id: "campus",
    still: "/film/campus.jpg",
    clip: "/film/campus.mp4",
    alt: "Campus de cristal y un puente peatonal",
  },
  vr: {
    id: "vr",
    still: "/film/vr.jpg",
    clip: "/film/vr.mp4",
    alt: "Una persona de espaldas con visor, en una plaza virtual vacía",
  },
  hearing: {
    id: "hearing",
    still: "/film/hearing.jpg",
    clip: "/film/hearing.mp4",
    alt: "Sala oscura con documentos censurados y nodos de datos",
  },
  phone: {
    id: "phone",
    still: "/film/phone.jpg",
    clip: "/film/phone.mp4",
    alt: "Una mano sostiene un teléfono que ilumina la noche",
  },
};

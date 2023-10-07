import { GenerationDataResponse } from "@/modules/Pokedex/domain/PokeApiPokedex.types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export function leftZeros(numero: number, cantidadCeros: number) {

  return numero.toString().padStart(cantidadCeros, '0');
}

export const regionMapFromGenerationData = (generation: GenerationDataResponse) => {

  let regionMap = new Map<string, string>();

  let regionPokemon = generation.main_region.name;
  
  generation.pokemon_species.forEach((pokemon) => {

      //Extraemos el ID de la url
      let urlSplit = pokemon.url.split("/");

      let posicionID = urlSplit.length - 2;

      if (urlSplit[posicionID])
      {

          regionMap.set(urlSplit[posicionID], regionPokemon);

      }

  });

  return regionMap;
}
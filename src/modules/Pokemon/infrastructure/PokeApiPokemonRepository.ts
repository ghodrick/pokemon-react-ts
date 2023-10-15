import { getAbilitiesFromURL } from "@/api/abilities/abilitiesApi";
import { getEvolutionChainFromURL } from "@/api/evolution/evolutionApi";
import { getGenerationFromURL } from "@/api/generation/generationApi";
import { getPokemon, getPokemonSpeciesFromURL } from "@/api/pokemon/pokemonApi";
import { getPokemonListWithoutVariants } from "@/helpers/api.helper";
import { PokemonRepository } from "../domain/PokemonRepository";
import { transformaPokemonFromAPI } from "./adapters/pokemon.adapter";

export class PokeApiPokemonRepository implements PokemonRepository {

    async getPokemon(id: number) {

        let datosPokemon = await getPokemon(id);

        let habilidades = await getAbilitiesFromURL(datosPokemon.abilities);

        let datosPokemonSpecies = await getPokemonSpeciesFromURL(datosPokemon.species.url);

        let datosGeneracion = await getGenerationFromURL(datosPokemonSpecies.generation.url);

        let listadoPokemon = await getPokemonListWithoutVariants({limit: 3000});

        let datosEvolucion = null;

        if (datosPokemonSpecies.evolution_chain)
        {
            datosEvolucion = await getEvolutionChainFromURL(datosPokemonSpecies.evolution_chain.url);
        }
        
        //Obtenermos el anterior pokemon y el siguiente.

        let anterior = id - 1;

        let siguiente = id + 1;

        if (anterior <= 0)
        {
            anterior = listadoPokemon.length;
        }

        if (siguiente > listadoPokemon.length)
        {
            siguiente = 1;
        }

        let prevAndNext = {
            pokemonPrev: await getPokemon(anterior),
            pokemonNext: await getPokemon(siguiente)
        }

        let pokemonTransformado = transformaPokemonFromAPI({
            datosPokemon,
            habilidades,
            datosPokemonSpecies,
            datosGeneracion,
            prevAndNext,
            datosEvolucion
        });

        return pokemonTransformado;
        
    }



}
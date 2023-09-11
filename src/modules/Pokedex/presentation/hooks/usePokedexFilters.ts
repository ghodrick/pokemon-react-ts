import { useDeferredValue, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { normalizeString } from "@/helpers/string.helper";
import { FormSearchValues } from "../models/types";

export const usePokedexFilters = ({pokemons, regiones} : {pokemons: PokedexPokemon[], regiones: string[]}) => {

    let [searchParams, setSearchParams] = useSearchParams();

    let buscador = searchParams.get('search');

    let tipos = searchParams.getAll("types");

    let region = searchParams.get('region');



    let pokemonFilters: FormSearchValues = {
        search: buscador ?? '',
        types: tipos ?? [],
        region: region ?? 'kanto'
    };

    const deferredSearch = useDeferredValue(pokemonFilters.search);

    const deferredTipos = useDeferredValue(pokemonFilters.types);

    const deferredRegion = useDeferredValue(pokemonFilters.region);

    let pokemonsFiltrados = useMemo(() => {

        let devolver: PokedexPokemon[] = pokemons;

        if (deferredRegion && deferredSearch === '')
        {
            devolver = devolver.filter((pokemon) => pokemon.region.toLowerCase() === deferredRegion.toLowerCase());
        }   

        if (deferredSearch)
        {
            const normalizedSearch = normalizeString(deferredSearch);
        
            devolver = devolver.filter((pokemon) => normalizeString(pokemon.nombre).includes(normalizedSearch));
            
        }

        if (deferredTipos.length > 0)
        {
            devolver = devolver.filter(pokemon => pokemon.tipos.find(tipo => deferredTipos.includes(tipo.id)));
        }

        return devolver;

    }, [deferredSearch, pokemons, deferredTipos, deferredRegion])


    return {
        setSearchParams,
        pokemonsFiltrados,
        pokemonFilters
    }

}
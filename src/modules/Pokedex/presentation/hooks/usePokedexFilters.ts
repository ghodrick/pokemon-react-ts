import { useDeferredValue, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { normalizeString } from "@/helpers/string.helper";
import { FormSearchValues } from "../models/types";

export const usePokedexFilters = ({pokemons} : {pokemons: PokedexPokemon[]}) => {

    let [searchParams, setSearchParams] = useSearchParams();

    let buscador = searchParams.get('search');

    let tipos = searchParams.getAll("types");

    const deferredSearch = useDeferredValue(buscador);

    const deferredTipos = useDeferredValue(tipos);

    let pokemonFilters: FormSearchValues = {
        search: buscador ?? '',
        types: tipos ?? []
    };

    let pokemonsFiltrados = useMemo(() => {

        let devolver: PokedexPokemon[] = pokemons;

        if (deferredSearch)
        {
            const normalizedSearch = normalizeString(deferredSearch);
        
            devolver = pokemons.filter((pokemon) => normalizeString(pokemon.nombre).includes(normalizedSearch));
            
        }

        if (deferredTipos.length > 0)
        {
            devolver = devolver.filter(pokemon => pokemon.tipos.find(tipo => deferredTipos.includes(tipo.id)));
        }

        return devolver;

    }, [deferredSearch, pokemons, deferredTipos])


    return {
        setSearchParams,
        pokemonsFiltrados,
        pokemonFilters
    }

}
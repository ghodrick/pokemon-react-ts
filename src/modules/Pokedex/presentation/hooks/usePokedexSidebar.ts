import { getRandomInt } from "@/helpers/utils";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { ClickEvent } from "@/models/React.types";
import { useCallback, useState } from "react";

interface usePokedexSidebarProps {
    pokemonList: PokedexPokemon[]
}

export const usePokedexSidebar = ({pokemonList} : usePokedexSidebarProps) => {

    const [numPokemonActual, setNumPokemonActual] = useState(getRandomInt(0, pokemonList.length - 1));

    const goNextPokemon = useCallback((e: ClickEvent) => {

        e.preventDefault();

        setNumPokemonActual((actual) => actual + 1 > pokemonList.length - 1 ? 0 : actual + 1);

    }, [pokemonList.length])

    const goPrevPokemon = useCallback((e: ClickEvent) => {

        e.preventDefault();

        setNumPokemonActual((actual) => actual - 1 < 0 ? pokemonList.length - 1 : actual - 1);

    }, [pokemonList.length])
    
    return {
        pokemonActual: pokemonList[numPokemonActual],
        goNextPokemon,
        goPrevPokemon
    }


}
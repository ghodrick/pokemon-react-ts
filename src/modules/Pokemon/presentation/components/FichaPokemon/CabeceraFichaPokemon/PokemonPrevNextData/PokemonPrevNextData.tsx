import { capitalize } from "@/helpers/string.helper";
import { leftZeros } from "@/helpers/utils";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { twMerge } from "tailwind-merge";

interface PokemonPrevNextDataProps {
    pokemon: PokedexPokemon;
    className?: string;
}

const PokemonPrevNextData = ({pokemon, className = ''} : PokemonPrevNextDataProps) => {


    return (
        <div className={twMerge("space-x-2 font-mono select-none font-semibold", className)}>
            <span>
                {leftZeros(pokemon.numero, 4)}
            </span>
            <span>
                {capitalize(pokemon.nombre)}
            </span>
        </div>
    )

}

export default PokemonPrevNextData;
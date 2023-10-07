import { capitalize } from "@/helpers/string.helper";
import { leftZeros } from "@/helpers/utils";
import { PokedexPokemon } from "@/models/Pokedex.types";

interface PokemonPrevNextDataProps {
    pokemon: PokedexPokemon;
}

const PokemonPrevNextData = ({pokemon} : PokemonPrevNextDataProps) => {


    return (
        <div className="space-x-2 font-mono select-none font-semibold">
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
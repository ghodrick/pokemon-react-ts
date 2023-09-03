import { memo } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import { PokedexPokemon } from "@/models/Pokedex.types";

interface PropsPokedexList {
    pokemons: PokedexPokemon[];
}

const PokedexList = memo(({pokemons} : PropsPokedexList) => {
    return ( 
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {
                pokemons.map((pokemon) => <PokemonCard key={`pokeCard_${pokemon.id}`} pokemon={pokemon} />)
            }
        </div>
     );
})
 
export default PokedexList;
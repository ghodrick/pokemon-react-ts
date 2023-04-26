import { PokedexPokemon } from "../../../../models/Pokedex.types";
import PokemonCard from "../PokemonCard/PokemonCard";

interface PropsPokedexList {
    pokemons: PokedexPokemon[];
}

const PokedexList = ({pokemons} : PropsPokedexList) => {
    return ( 
        <div className="grid md:grid-cols-3 gap-6">
            {
                pokemons.map((pokemon) => <PokemonCard key={`pokeCard_${pokemon.id}`} pokemon={pokemon} />)
            }
        </div>
     );
}
 
export default PokedexList;
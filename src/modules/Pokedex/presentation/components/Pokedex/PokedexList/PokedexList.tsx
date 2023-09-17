import { memo } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { ImagenPokemonType } from "../../../models/types";
interface PropsPokedexList {
    pokemons: PokedexPokemon[];
    tipoImagen?: ImagenPokemonType;
}

const PokedexList = memo(({pokemons, tipoImagen} : PropsPokedexList) => {


    return ( 
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

            {
                pokemons.map((pokemon) => <PokemonCard 
                                            key={`pokeCard_${pokemon.id}`} 
                                            pokemon={pokemon} 
                                            tipoImagen={tipoImagen} 
                                            />
                )
            }

        </div>
     );
})
 
export default PokedexList;
import { PokedexPokemon } from "@/models/Pokedex.types";
import { memo } from "react";
import { ImagenPokemonType } from "../../../models/types";
import PokemonCard from "./PokemonCard/PokemonCard";
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
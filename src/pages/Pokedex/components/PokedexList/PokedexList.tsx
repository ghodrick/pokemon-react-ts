import { PokedexPokemon } from "../../../../models/Pokedex.types";

interface PropsPokedexList {
    pokemons: PokedexPokemon[];
}

const PokedexList = ({pokemons} : PropsPokedexList) => {
    return ( 
        <div>
            Lista de pokemons
            {
                pokemons.map((pokemon) => {
                    return (
                        <div key={pokemon.id}>
                            <img src={pokemon.imagen.normal} alt={pokemon.nombre} />
                            <span>{pokemon.nombre}</span>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default PokedexList;
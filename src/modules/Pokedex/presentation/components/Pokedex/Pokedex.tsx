import { Pokedex as PokedexType } from "@/models/Pokedex.types";
import { usePokedexFilters } from "../../hooks/usePokedexFilters";
import PokedexFilters from "./PokedexFilters/PokedexFilters";
import PokedexList from "./PokedexList/PokedexList";
import { usePokedexContext } from "../../contexts/usePokedexContext";


interface PropsPokedex {
    data: PokedexType;
}

const Pokedex = ({ data }: PropsPokedex) => {

    const {setSearchParams, pokemonsFiltrados, pokemonFilters} = usePokedexFilters({
        pokemons: data.pokemons,
        regiones: data.regiones
    });

    const { pokedexState, togglePokemonImage } = usePokedexContext();

    return (
        <div className="space-y-10">
            <PokedexFilters 
                filtros={pokemonFilters} 
                onSubmit={setSearchParams}
                tipoImagen={pokedexState.tipo_imagen}
                onShinyButtonClick={togglePokemonImage}
            />
            <PokedexList 
                pokemons={pokemonsFiltrados} 
                tipoImagen={pokedexState.tipo_imagen}
            />
        </div>
    );
};

export default Pokedex;

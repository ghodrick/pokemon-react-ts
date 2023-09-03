import { Pokedex as PokedexType } from "@/models/Pokedex.types";
import { usePokedexFilters } from "../../hooks/usePokedexFilters";
import PokedexFilters from "./PokedexFilters/PokedexFilters";
import PokedexList from "./PokedexList/PokedexList";


interface PropsPokedex {
    data: PokedexType;
}

const Pokedex = ({ data }: PropsPokedex) => {

    const {setSearchParams, pokemonsFiltrados, pokemonFilters} = usePokedexFilters({
        pokemons: data.pokemons
    });

    return (
        <div className="space-y-10">
            <PokedexFilters 
                filtros={pokemonFilters} 
                onSubmit={setSearchParams}
            />
            <PokedexList pokemons={pokemonsFiltrados} />
        </div>
    );
};

export default Pokedex;

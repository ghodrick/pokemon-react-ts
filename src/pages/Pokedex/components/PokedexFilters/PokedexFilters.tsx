import PokedexSearch from "../PokedexSearch/PokedexSearch";
import PokemonFilter from "../PokemonFilter/PokemonFilter";

const PokedexFilters = () => {
    return (
        <div className="flex flex-col">
            <PokedexSearch />
            <PokemonFilter />
        </div>
    );
};

export default PokedexFilters;

import { Pokedex as PokedexType } from "../../../../models/Pokedex.types";
import PokedexFilters from "../PokedexFilters/PokedexFilters";
import PokedexList from "../PokedexList/PokedexList";

interface PropsPokedex {
    data: PokedexType;
}

const Pokedex = ({ data }: PropsPokedex) => {
    return (
        <div>
            <PokedexFilters />
            <PokedexList pokemons={data.pokemons} />
        </div>
    );
};

export default Pokedex;

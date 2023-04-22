import { useLoaderData } from "react-router-dom";
import LayoutPokedex from "./components/LayoutPokedex/LayoutPokedex";
import Pokedex from "./components/Pokedex/Pokedex";
import { PokedexRepository } from "../../modules/Pokedex/domain/PokedexRepository";
import { Pokedex as PokedexType } from "../../models/Pokedex.types";


export async function loader(repository: PokedexRepository) {
    
    const pokedex = await repository.getPokedex();
    
    return {
        pokedex
    }
}


const PokedexPage = () => {

    const {pokedex} = useLoaderData() as {pokedex: PokedexType};

  

    return (
        <LayoutPokedex>
            <div className="xl:col-span-9">
                <Pokedex data={pokedex} />
            </div>
            <div className="xl:col-span-3">Hola</div>
        </LayoutPokedex>
    );
};

export default PokedexPage;

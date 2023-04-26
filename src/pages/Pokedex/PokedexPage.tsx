import { json, useLoaderData } from "react-router-dom";
import LayoutPokedex from "./components/LayoutPokedex/LayoutPokedex";
import Pokedex from "./components/Pokedex/Pokedex";
import { PokedexRepository } from "../../modules/Pokedex/domain/PokedexRepository";
import { Pokedex as PokedexType } from "../../models/Pokedex.types";

//TODO: Quizás esto, siguiendo la arquitectura hexagonal, debería estar en la capa de aplicación

export async function loader(repository: PokedexRepository) {
    
    const pokedex = await repository.getPokedex();
    

    return json({
        pokedex
    })
}


const PokedexPage = () => {

    const {pokedex} = useLoaderData() as {pokedex: PokedexType};


    return (
        <LayoutPokedex>
            <div className="md:col-span-12 lg:col-span-9">
                <Pokedex data={pokedex} />
            </div>
            <div className="md:hidden lg:flex lg:col-span-3">Hola</div>
        </LayoutPokedex>
    );
};

export default PokedexPage;

import { useLoaderData } from "react-router-dom";
import LayoutPokedex from "./components/LayoutPokedex/LayoutPokedex";
import Pokedex from "./components/Pokedex/Pokedex";
import { PokedexRepository } from "../../modules/Pokedex/domain/PokedexRepository";
import { Pokedex as PokedexType } from "../../models/Pokedex.types";
import { pokedexQuery } from "../../hooks/api/Pokedex/usePokedexList";
import { QueryClient } from "@tanstack/react-query";

/*
    TODO: Quizás esto, siguiendo la arquitectura hexagonal, debería estar en la capa de aplicación como getPokedex
    No obstante veo más limpio tenerlo aquí, ya que al entrar en la página se puede ver directamente que se está cargando.
*/

export async function loader(repository: PokedexRepository, queryClient: QueryClient) : Promise<PokedexType> {
    
    const queryData = pokedexQuery(repository);

    return queryClient.ensureQueryData({
        ...queryData,
        cacheTime: 1000 * 60 * 60 * 24 * 1, // 1 day
    });

}


const PokedexPage = () => {

    const pokedex = useLoaderData() as PokedexType;

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

import { useLoaderData } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import LayoutPokedex from "@/modules/Pokedex/presentation/components/LayoutPokedex/LayoutPokedex";
import Pokedex from "@/modules/Pokedex/presentation/components/Pokedex/Pokedex";
import { Pokedex as PokedexType} from "@/models/Pokedex.types";
import { pokedexQuery } from "@/hooks/api/Pokedex/usePokedexList";
import { PokedexRepository } from "@/modules/Pokedex/domain/PokedexRepository";
import PokedexContextProvider from "@/modules/Pokedex/presentation/contexts/usePokedexContext";
import PokedexSidebar from "@/modules/Pokedex/presentation/components/PokedexSidebar/PokedexSidebar";
import { usePokedexSidebar } from "@/modules/Pokedex/presentation/hooks/usePokedexSidebar";

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

    const {pokemonActual, goNextPokemon, goPrevPokemon} = usePokedexSidebar({pokemonList: pokedex.pokemons});

    return (
        <PokedexContextProvider>
            <LayoutPokedex>
                <div className="lg:col-span-9 col-span-12">
                    <Pokedex data={pokedex} />
                </div>
                <div className="hidden lg:flex lg:col-span-3 items-start">
                    <PokedexSidebar pokemon={pokemonActual} onNextPokemonClick={goNextPokemon} onPrevPokemonClick={goPrevPokemon} />
                </div>
            </LayoutPokedex>
        </PokedexContextProvider>
    );
};

export default PokedexPage;

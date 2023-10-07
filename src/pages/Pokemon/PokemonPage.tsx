import { pokemonQuery } from "@/hooks/api/Pokemon/usePokemon";
import { Pokemon } from "@/models/Pokedex.types";
import { PokemonRepository } from "@/modules/Pokemon/domain/PokemonRepository";
import FichaPokemon from "@/modules/Pokemon/presentation/components/FichaPokemon/FichaPokemon";
import LayoutPokemon from "@/modules/Pokemon/presentation/components/LayoutPokemon/LayoutPokemon";
import { QueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

export async function loader(id: string | undefined, repository: PokemonRepository, queryClient: QueryClient) : Promise<any> {
    

    if (!id)
    {
        throw new Error('Ruta no válida');
    }

    const queryData = pokemonQuery(parseInt(id), repository);

    return queryClient.ensureQueryData({
        ...queryData,
        cacheTime: 1000 * 60 * 60 * 24 * 1, // 1 day
    });
}


const PokemonPage = () => {

    const pokemon = useLoaderData() as Pokemon;


    return (
        <LayoutPokemon pokemonTypes={pokemon.tipos}>
            <FichaPokemon pokemon={pokemon} />
        </LayoutPokemon>
    );
};

export default PokemonPage;
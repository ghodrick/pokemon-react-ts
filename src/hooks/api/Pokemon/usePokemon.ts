import { useRepository } from "@/contexts/RepositoryProvider/RepositoryProvider";
import { PokemonRepository } from "@/modules/Pokemon/domain/PokemonRepository";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";


export const pokemonQuery = (id: number, repository : PokemonRepository) => {

    return {
        queryKey: ['pokemon', id], 
        queryFn: async () => repository.getPokemon(id)
    }

}

export const usePokemon = (id: number, options?: UseQueryOptions) => {

    const repository = useRepository();


    const query = useQuery({
        ...pokemonQuery(id, repository.pokemon),
        ...options
    });

    return {
        ...query
    }
}
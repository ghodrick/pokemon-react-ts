import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { PokedexRepository } from "../../../modules/Pokedex/domain/PokedexRepository"
import { useRepository } from "../../../contexts/RepositoryProvider/RepositoryProvider"

export const pokedexQuery = (repository : PokedexRepository) => {

    return {
        queryKey: ['pokedex'], 
        queryFn: async () => repository.getPokedex()
    }

}

export const usePokedexlist = (options?: UseQueryOptions) => {

    const repository = useRepository();


    const query = useQuery({
        ...pokedexQuery(repository.pokedex),
        ...options
    });

    return {
        ...query
    }
}
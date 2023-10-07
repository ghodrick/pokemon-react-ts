import { getPokemonList, getPokemonListFiltersProps } from "@/api/pokemon/pokemonApi";


export const getPokemonListWithoutVariants = async (filters: getPokemonListFiltersProps = {}) => {

    let pokemonList = await getPokemonList(filters);

    let devolver = pokemonList.results.filter(pokemon => {

        let urlPokemonArray = pokemon.url.split("/");

        let posicionID = urlPokemonArray.length - 2;

        if (urlPokemonArray[posicionID])
        {

            let numeroPokemon = urlPokemonArray[posicionID];
            
            if (parseInt(numeroPokemon) < 10000)
            {
                return true;
            }

        }

        return false;

    })

    return devolver;

}
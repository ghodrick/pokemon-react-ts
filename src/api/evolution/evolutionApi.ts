import axiosApi from "@/config/axios";
import { PokeApiEvolutionChain } from "@/modules/Pokemon/domain/PokeApiPokemon.types";

export const getEvolutionChainFromURL = async (url : string) => {

    const {data: evolutionChain} : {data: PokeApiEvolutionChain} = await axiosApi.get(url);

    return evolutionChain;

}
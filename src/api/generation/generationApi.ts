import axiosApi from "@/config/axios";
import { GenerationDataResponse } from "@/modules/Pokedex/domain/PokeApiPokedex.types";

export const getGenerations = async () => {

    let url = "https://pokeapi.co/api/v2/generation";

    return await axiosApi.get(url);

}

export const getGenerationFromURL = async (url: string) => {


    const {data: generacion} : {data: GenerationDataResponse} = await axiosApi.get(url);

    return generacion;

}
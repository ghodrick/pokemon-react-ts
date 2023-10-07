import axiosApi from "@/config/axios";
import { PokeApiItem } from "@/modules/Pokemon/domain/PokeApiPokemon.types";

export const getItemFromURL = async (url : string) => {

    const {data: itemData} : {data: PokeApiItem} = await axiosApi.get(url);

    return itemData;

}
import axiosApi from "@/config/axios";
import { PokeApiMovement } from "@/modules/Pokemon/domain/PokeApiPokemon.types";

export const getMoveFromUrl = async (url: string) => {

    const {data: moveData} : {data: PokeApiMovement} = await axiosApi.get(url);

    return moveData;

}


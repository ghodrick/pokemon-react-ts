import axiosApi from "@/config/axios";
import { PokeApiAbility } from "@/modules/Pokedex/domain/PokeApiPokedex.types";
import { Ability } from "@/modules/Pokemon/domain/PokeApiPokemon.types";

export const getAbilitiesFromURL = async (abilities : PokeApiAbility[]) => {

    let devolver : Ability[] = [];

    let promises : Promise<any>[] = [];

    abilities.forEach(ability => {

        promises.push(axiosApi.get(ability.ability.url));
    })

    let habilidades = await Promise.all(promises);

    devolver = habilidades.map(promiseData => {
  
        const {data: habilidades} : {data: Ability} = promiseData;

        return habilidades;
    })

    return devolver;


}
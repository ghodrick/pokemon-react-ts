import { FORTALEZAS_TIPOS } from "@/config/constants";
import { PokemonTypeEffectiveness, PokemonTypeEffectivenessObject, PokemonTypeVariants } from "@/models/Pokedex.types";

export const getTypeWeakness = (arrayTipos : PokemonTypeVariants[]) : PokemonTypeEffectiveness => {

    let devolver: any = {};


    arrayTipos.forEach(tipo => {

        let fortalezasTipo = FORTALEZAS_TIPOS[tipo];

        Object.keys(fortalezasTipo).forEach(key => {

            const tipoFortaleza = key as keyof PokemonTypeEffectiveness;

            if (!devolver[tipoFortaleza])
            {
                devolver[tipoFortaleza] = fortalezasTipo[tipoFortaleza];
            }
            else 
            {
                devolver[tipoFortaleza] *= fortalezasTipo[tipoFortaleza];
            }
            

        })

    })

    return devolver as PokemonTypeEffectiveness;
}

export const typeWeaknessToArray = (tipos: PokemonTypeEffectiveness) : PokemonTypeEffectivenessObject[] => {

    return Object.keys(tipos).map(key => {
        return { 
            tipo: key as keyof PokemonTypeEffectiveness, 
            valor: tipos[key as keyof PokemonTypeEffectiveness] 
        };
    })
}


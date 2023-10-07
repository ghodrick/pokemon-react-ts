import { EstadisticasPokemon, PokedexPokemon, TipoPokemon } from "@/models/Pokedex.types"
import { PokeApiStat, PokeApiType, PokemonApiResponse } from "../../domain/PokeApiPokedex.types"
import { TIPOS_POKEMON } from "@/config/constants"

export const transformaPokedexPokemon = (pokemon : PokemonApiResponse, regionMap: Map<string, string>) : PokedexPokemon => { 
    

    return {
        id: pokemon.id,
        region: regionMap.get(pokemon.id.toString()) ?? '',
        numero: pokemon.id,
        nombre: pokemon.species.name,
        peso: pokemon.weight,
        altura: pokemon.height,
        tipos: pokemon.types.map((tipo) => transformaTipo(tipo)),
        estadisticas: pokemon.stats.map((stat: any) => transformaStat(stat)),
        imagen: {
            normal: (pokemon.sprites.other?.['official-artwork'].front_default) || '',
            shiny: pokemon.sprites.other?.['official-artwork'].front_shiny || ''
        }
    }
    
}

export const transformaStat = (stat: PokeApiStat) : EstadisticasPokemon => {
    return {
        nombre: stat.stat.name,
        base: stat.base_stat,
        puntosEsfuerzo: stat.effort
    }
}

export const transformaTipo = (tipo : PokeApiType) : TipoPokemon => {

    const nombreTipo = tipo.type.name as keyof typeof TIPOS_POKEMON;

    return {
        id: nombreTipo,
        nombre: TIPOS_POKEMON[nombreTipo].nombre,
        icono: TIPOS_POKEMON[nombreTipo].icono,
        color: TIPOS_POKEMON[nombreTipo].color,
    }
}
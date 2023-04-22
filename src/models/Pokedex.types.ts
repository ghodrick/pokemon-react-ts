export interface Pokedex {
    nombre: string;
    pokemons: PokedexPokemon[];
}

export interface PokedexPokemon {
    id: number;
    numero: number;
    nombre: string;
    peso: number;
    tipos: TipoPokemon[];
    estadisticas: EstadisticasPokemon[];
    imagen: ImagenPokemonPokedex;
}

export interface TipoPokemon {
    nombre: string;
    icono: string;
    color: string;
}

export interface EstadisticasPokemon {
    nombre: string;
    base: number;
    puntosEsfuerzo: number;
}

export type ImagenPokemonPokedex = {
    normal: string;
    shiny: string;
}

export interface PokemonTypes {
    bug: TipoPokemon;
    dark: TipoPokemon;
    dragon: TipoPokemon;
    electric: TipoPokemon;
    fairy: TipoPokemon;
    fighting: TipoPokemon;
    fire: TipoPokemon;
    flying: TipoPokemon;
    ghost: TipoPokemon;
    grass: TipoPokemon;
    ground: TipoPokemon;
    ice: TipoPokemon;
    normal: TipoPokemon;
    poison: TipoPokemon;
    psychic: TipoPokemon;
    rock: TipoPokemon;
    steel: TipoPokemon;
    water: TipoPokemon;
}
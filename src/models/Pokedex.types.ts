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
    id: string;
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
    bug: Omit<TipoPokemon, 'id'>;
    dark: Omit<TipoPokemon, 'id'>;
    dragon: Omit<TipoPokemon, 'id'>;
    electric: Omit<TipoPokemon, 'id'>;
    fairy: Omit<TipoPokemon, 'id'>;
    fighting: Omit<TipoPokemon, 'id'>;
    fire: Omit<TipoPokemon, 'id'>;
    flying: Omit<TipoPokemon, 'id'>;
    ghost: Omit<TipoPokemon, 'id'>;
    grass: Omit<TipoPokemon, 'id'>;
    ground: Omit<TipoPokemon, 'id'>;
    ice: Omit<TipoPokemon, 'id'>;
    normal: Omit<TipoPokemon, 'id'>;
    poison: Omit<TipoPokemon, 'id'>;
    psychic: Omit<TipoPokemon, 'id'>;
    rock: Omit<TipoPokemon, 'id'>;
    steel: Omit<TipoPokemon, 'id'>;
    water: Omit<TipoPokemon, 'id'>;
}
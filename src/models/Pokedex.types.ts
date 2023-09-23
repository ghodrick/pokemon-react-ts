export interface Pokedex {
    nombre: string;
    pokemons: PokedexPokemon[];
    regiones: string[];
}

export interface PokedexPokemon {
    id: number;
    region: string;
    numero: number;
    nombre: string;
    peso: number;
    altura: number;
    tipos: TipoPokemon[];
    estadisticas: EstadisticasPokemon[];
    imagen: ImagenPokemonPokedex;
}

export type PokemonTypeVariants = 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'steel' | 'water';

export interface TipoPokemon {
    id: PokemonTypeVariants;
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
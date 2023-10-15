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

export type HabilidadPokemon = {
    nombre: string;
    oculta: boolean;
    descripcion: string;
}

type DescripcionPokedex = {
    descripcion: string;
    version: string;
}

export type GeneroPokemon = 'macho' | 'hembra';

export type ItemEvolution = {
    nombre: string;
    imagen: string | null;
}

export type TiempoDelDia = 'día' | 'noche';

export type DetalleEvolucion = {
    nivel: number | null;
    genero: GeneroPokemon | null;
    item: ItemEvolution | null;
    felicidad: number | null;
    tiempoDelDia: TiempoDelDia | null;
    portandoItem: ItemEvolution | null;
    tipoEvolucion: string | null;
}

export type PokemonEvolutions = {
    id: string;
    nombre: string;
    detallesEvolucion: DetalleEvolucion | null;
    imagen: string | null;
    evoluciona: PokemonEvolutions[] | null;
}

export type MovimientoPokemon = {
    nombre: string;
    tipo: PokemonTypeVariants;
    categoria: 'status' | 'special' | 'physical';
    metodoAprendizaje: string;
    precision: number | null;
    poder: number;
    pp: number;
    nivel: number;
    descripcion: string;
}
export interface Pokemon extends PokedexPokemon {
    habilidades: HabilidadPokemon[];
    descripcionPokedex: DescripcionPokedex | null;
    pokemonPrev: PokedexPokemon;
    pokemonNext: PokedexPokemon;
    evoluciones: PokemonEvolutions | null;
    movimientos: MovimientoPokemon[]
}

export type PokemonTypeEffectiveness = {
    [key in PokemonTypeVariants]: number;
};

export type PokemonTypeChart = {
    [key in PokemonTypeVariants]: PokemonTypeEffectiveness;
};

export type ClaseAtaquesVariant = 'physical' | 'status' | 'special';

export interface ClaseAtaqueObject {
    nombre: string;
    icono: string;
}

export type ClaseAtaque = {
    [key in ClaseAtaquesVariant]: ClaseAtaqueObject;
}

export type PokemonTypeEffectivenessObject = {
    tipo: PokemonTypeVariants;
    valor: number;
}
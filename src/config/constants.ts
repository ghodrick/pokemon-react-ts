import { ClaseAtaque, PokemonTypeChart, PokemonTypes } from "../models/Pokedex.types";

export const TIPOS_POKEMON : PokemonTypes = {
    bug:  {
        nombre: 'Bicho',
        icono: '/assets/pokemon/tipos/bicho.svg',
        color: '#A8B820'
    },
    dark: {
        nombre: 'Siniestro',
        icono: '/assets/pokemon/tipos/siniestro.svg',
        color: '#705848'
    },
    dragon: {
        nombre: 'Dragón',
        icono: '/assets/pokemon/tipos/dragon.svg',
        color: '#7038F8'
    },
    electric: {
        nombre: 'Eléctrico',
        icono: '/assets/pokemon/tipos/electrico.svg',
        color: '#F8D030'
    },
    fairy: {
        nombre: 'Hada',
        icono: '/assets/pokemon/tipos/hada.svg',
        color: '#EE99AC'
    },
    fighting: {
        nombre: 'Lucha',
        icono: '/assets/pokemon/tipos/lucha.svg',
        color: '#C03028'
    },
    fire: {
        nombre: 'Fuego',
        icono: '/assets/pokemon/tipos/fuego.svg',
        color: '#F08030'
    },
    flying: {
        nombre: 'Volador',
        icono: '/assets/pokemon/tipos/volador.svg',
        color: '#A890F0'
    },
    ghost: {
        nombre: 'Fantasma',
        icono: '/assets/pokemon/tipos/fantasma.svg',
        color: '#705898'
    },
    grass: {
        nombre: 'Planta',
        icono: '/assets/pokemon/tipos/planta.svg',
        color: '#78C850'
    },
    ground: {
        nombre: 'Tierra',
        icono: '/assets/pokemon/tipos/tierra.svg',
        color: '#E0C068'
    },
    ice: {
        nombre: 'Hielo',
        icono: '/assets/pokemon/tipos/hielo.svg',
        color: '#98D8D8'
    },
    normal: {
        nombre: 'Normal',
        icono: '/assets/pokemon/tipos/normal.svg',
        color: '#A8A878'
    },
    poison: {
        nombre: 'Veneno',
        icono: '/assets/pokemon/tipos/veneno.svg',
        color: '#A040A0'
    },
    psychic: {
        nombre: 'Psíquico',
        icono: '/assets/pokemon/tipos/psiquico.svg',
        color: '#F85888'
    },
    rock: {
        nombre: 'Roca',
        icono: '/assets/pokemon/tipos/roca.svg',
        color: '#B8A038'
    },
    steel: {
        nombre: 'Acero',
        icono: '/assets/pokemon/tipos/acero.svg',
        color: '#B8B8D0'
    },
    water: {
        nombre: 'Agua',
        icono: '/assets/pokemon/tipos/agua.svg',
        color: '#6890F0'
    }
}

export enum MAP_STATS  {
    hp = 'HP',
    attack = 'AT',
    defense = 'DF',
    'special-attack' = 'SA',
    'special-defense' = 'SD',
    speed = 'SP'
}

export const FORTALEZAS_TIPOS : PokemonTypeChart = {
    normal: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 2,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 0,
        dragon: 1,
        dark: 1,
        steel: 1,
        fairy: 1
    },
    fire: {
        normal: 1,
        fire: 0.5,
        water: 2,
        electric: 1,
        grass: 0.5,
        ice: 0.5,
        fighting: 1,
        poison: 1,
        ground: 2,
        flying: 1,
        psychic: 1,
        bug: 0.5,
        rock: 2,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 0.5
    },
    water: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 2,
        grass: 2,
        ice: 0.5,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    electric: {
        normal: 1,
        fire: 1,
        water: 0.5,
        electric: 0.5,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 2,
        flying: 0.5,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    grass: {
        normal: 1,
        fire: 2,
        water: 0.5,
        electric: 0.5,
        grass: 0.5,
        ice: 2,
        fighting: 1,
        poison: 2,
        ground: 0.5,
        flying: 2,
        psychic: 1,
        bug: 2,
        rock: 0.5,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 1,
        fairy: 1
    },
    ice: {
        normal: 1,
        fire: 2,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 0.5,
        fighting: 2,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 2,
        ghost: 1,
        dragon: 2,
        dark: 1,
        steel: 2,
        fairy: 1
    },
    fighting: {
        normal: 0.5,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 0.5,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 2,
        psychic: 2,
        bug: 0.5,
        rock: 0.5,
        ghost: 1,
        dragon: 1,
        dark: 0.5,
        steel: 0.5,
        fairy: 2
    },
    poison: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 0.5,
        ice: 1,
        fighting: 0.5,
        poison: 0.5,
        ground: 2,
        flying: 1,
        psychic: 2,
        bug: 0.5,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 1,
        fairy: 0.5
    },
    ground: {
        normal: 1,
        fire: 0.5,
        water: 2,
        electric: 0,
        grass: 2,
        ice: 2,
        fighting: 1,
        poison: 0.5,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 0.5,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    flying: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 2,
        grass: 0.5,
        ice: 2,
        fighting: 0.5,
        poison: 1,
        ground: 0,
        flying: 1,
        psychic: 1,
        bug: 0.5,
        rock: 2,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 1,
        fairy: 1
    },
    psychic: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 0.5,
        poison: 0.5,
        ground: 1,
        flying: 1,
        psychic: 0.5,
        bug: 2,
        rock: 1,
        ghost: 2,
        dragon: 1,
        dark: 2,
        steel: 1,
        fairy: 1
    },
    bug: {
        normal: 1,
        fire: 2,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 2,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 0,
        dragon: 1,
        dark: 1,
        steel: 1,
        fairy: 1
    },
    rock: {
        normal: 0.5,
        fire: 0.5,
        water: 2,
        electric: 1,
        grass: 2,
        ice: 1,
        fighting: 2,
        poison: 0.5,
        ground: 2,
        flying: 0.5,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 2,
        fairy: 1
    },
    ghost: {
        normal: 0,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 0,
        poison: 0.5,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 0.5,
        rock: 1,
        ghost: 2,
        dragon: 1,
        dark: 2,
        steel: 1,
        fairy: 1
    },
    dragon: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 0.5,
        grass: 0.5,
        ice: 2,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 2,
        dark: 1,
        steel: 1,
        fairy: 2
    },
    dark: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 2,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 0,
        bug: 2,
        rock: 1,
        ghost: 0.5,
        dragon: 1,
        dark: 0.5,
        steel: 1,
        fairy: 2
    },
    steel: {
        normal: 0.5,
        fire: 2,
        water: 1,
        electric: 1,
        grass: 0.5,
        ice: 0.5,
        fighting: 2,
        poison: 0,
        ground: 2,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        rock: 0.5,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 0.5,
        fairy: 0.5
    },
    fairy: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 0.5,
        poison: 2,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 0.5,
        rock: 1,
        ghost: 1,
        dragon: 0,
        dark: 0.5,
        steel: 2,
        fairy: 1
    }
}

export const CLASE_ATAQUES: ClaseAtaque = {
    physical: {
        nombre: 'Físico',
        icono: '/assets/clases_ataque/physical.png'
    },
    special: {
        nombre: 'Especial',
        icono: '/assets/clases_ataque/special.png'
    },
    status: {
        nombre: 'Estado',
        icono: '/assets/clases_ataque/status.png'
    }
}
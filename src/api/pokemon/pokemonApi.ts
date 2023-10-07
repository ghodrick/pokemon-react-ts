import axiosApi from "@/config/axios";
import { PokemonApiResponse } from "@/modules/Pokedex/domain/PokeApiPokedex.types";
import { PokeApiPokemonList, PokemonSpecies } from "@/modules/Pokemon/domain/PokeApiPokemon.types";
import { isEmpty } from "lodash";

export const getPokemon = async (idPokemon : number) => {
        
    let url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

    const {data: pokemonApi} : {data: PokemonApiResponse} = await axiosApi.get(url);

    return pokemonApi;

}

export const getPokemonFromURL = async (url : string) => {
        
    const {data: pokemonApi} : {data: PokemonApiResponse} = await axiosApi.get(url);

    return pokemonApi;

}

export const getPokemonSpecies = async (idPokemon : number) => {

    let url = `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`;

    const {data: pokemonSpecies} : {data: PokemonSpecies} = await axiosApi.get(url);

    return pokemonSpecies;

}

export const getPokemonSpeciesFromURL = async (url : string) => {

    const {data: pokemonSpecies} : {data: PokemonSpecies} = await axiosApi.get(url);

    return pokemonSpecies;

}

export interface getPokemonListFiltersProps {
    offset?: number;
    limit?: number;
}

export const getPokemonList = async (filters : getPokemonListFiltersProps = {}) => {

    let queryString = '';

    if (!isEmpty(filters))
    {
        queryString = '?' + new URLSearchParams(filters as Record<string, any>).toString();
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${queryString}`;

    const {data: pokemonList} : {data: PokeApiPokemonList} = await axiosApi.get(url);

    return pokemonList;

}
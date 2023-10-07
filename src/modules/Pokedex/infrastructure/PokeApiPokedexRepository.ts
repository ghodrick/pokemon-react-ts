
import { PokemonApiResponse, GenerationListResponse, GenerationDataResponse } from "../domain/PokeApiPokedex.types";
import { PokedexRepository } from "../domain/PokedexRepository";
import { getGenerations } from "@/api/generation/generationApi";
import { getPokemon } from "@/api/pokemon/pokemonApi";
import { transformaPokedexPokemon } from "./adapters/pokedex.adapter";
import { Pokedex } from "@/models/Pokedex.types";
import axiosApi from "@/config/axios";


export class PokeApiPokedexRepository implements PokedexRepository {

    protected baseUrl = "https://pokeapi.co/api/v2/";

    async getPokedex() {

        const {data: listadoRecursosGeneraciones} : {data: GenerationListResponse} = await getGenerations();

        if (listadoRecursosGeneraciones)
        {

            const devolver: Pokedex = {
                nombre: '',
                pokemons: [],
                regiones: []
            }

            let promisesPokemons: Promise<PokemonApiResponse>[] = [];

            let promisesGeneraciones: Promise<any>[] = listadoRecursosGeneraciones.results.map(resultado => axiosApi.get(resultado.url));

            let resultadosGeneraciones = await Promise.all(promisesGeneraciones);

            let regionMap = new Map<string, string>();

            resultadosGeneraciones.forEach(resultadoGeneracion => {

                const {data: datosGeneracion} : {data: GenerationDataResponse} = resultadoGeneracion;

                let regionPokemon = datosGeneracion.main_region.name;

                devolver.regiones.push(regionPokemon);

                datosGeneracion.pokemon_species.forEach((pokemon) => {

                    //Extraemos el ID de la url
                    let urlSplit = pokemon.url.split("/");

                    let posicionID = urlSplit.length - 2;

                    if (urlSplit[posicionID])
                    {

                        regionMap.set(urlSplit[posicionID], regionPokemon);
        
                        promisesPokemons.push(getPokemon(parseInt(urlSplit[posicionID])));

                    }
    
                });
            })

            const results = await Promise.all(promisesPokemons);

            devolver.pokemons = results.map(pokemonApi => transformaPokedexPokemon(pokemonApi, regionMap));
            //Ordenamos los resultados
            devolver.pokemons = devolver.pokemons.sort((a, b) => a.numero - b.numero);

            return devolver;
        }
        
        throw new Error('No se pudo obtener la pokedex');
        
        
    }
}

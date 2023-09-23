import axiosApi from "../../../config/axios";
import { EstadisticasPokemon, Pokedex, PokedexPokemon, TipoPokemon } from "../../../models/Pokedex.types";
import { PokemonApiResponse, PokeApiStat, PokeApiType, GenerationListResponse, GenerationDataResponse } from "../domain/PokeApiPokedex.types";
import { PokedexRepository } from "../domain/PokedexRepository";
import { TIPOS_POKEMON } from "../../../config/constants";


export class PokeApiPokedexRepository implements PokedexRepository {

    protected baseUrl = "https://pokeapi.co/api/v2/";

    async getPokedex() {

        const url = `${this.baseUrl}generation`;

        const {data: listadoRecursosGeneraciones} : {data: GenerationListResponse} = await axiosApi.get(url);

        if (listadoRecursosGeneraciones)
        {

            const devolver: Pokedex = {
                nombre: '',
                pokemons: [],
                regiones: []
            }

            let promisesPokemons: Promise<PokemonApiResponse>[] = [];

            let promisesGeneraciones: Promise<any>[] = [];

            listadoRecursosGeneraciones.results.forEach((resultado) => {

                promisesGeneraciones.push(axiosApi.get(resultado.url));
            });

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
        
                        promisesPokemons.push(this.getBasicPokemonData(parseInt(urlSplit[posicionID])));

                    }
    
                });
            })

            const results = await Promise.all(promisesPokemons);

            results.forEach((pokemonApi) => {

                const pokemon = this.transformaPokedexPokemon(pokemonApi, regionMap);

                devolver.pokemons.push(pokemon);
            });

            //Ordenamos los resultados
            devolver.pokemons = devolver.pokemons.sort((a, b) => a.numero - b.numero);

            return devolver;
        }
        
        throw new Error('No se pudo obtener la pokedex');
        
        
    }
    //TODO: Controlar errores
    async getBasicPokemonData(idPokemon : number) {
        
        let url = `${this.baseUrl}pokemon/${idPokemon}`;

        const {data: pokemonApi} : {data: PokemonApiResponse} = await axiosApi.get(url);

        return pokemonApi;

    }

    private transformaPokedexPokemon = (pokemon : PokemonApiResponse, regionMap: Map<string, string>) : PokedexPokemon => { 
    

        return {
            id: pokemon.id,
            region: regionMap.get(pokemon.id.toString()) ?? '',
            numero: pokemon.id,
            nombre: pokemon.species.name,
            peso: pokemon.weight,
            altura: pokemon.height,
            tipos: pokemon.types.map((tipo) => this.transformaTipo(tipo)),
            estadisticas: pokemon.stats.map((stat: any) => this.transformaStat(stat)),
            imagen: {
                normal: (pokemon.sprites.other?.['official-artwork'].front_default) || '',
                shiny: pokemon.sprites.other?.['official-artwork'].front_shiny || ''
            }
        }
        
    }

    private transformaStat = (stat: PokeApiStat) : EstadisticasPokemon => {
        return {
            nombre: stat.stat.name,
            base: stat.base_stat,
            puntosEsfuerzo: stat.effort
        }
    }

    private transformaTipo = (tipo : PokeApiType) : TipoPokemon => {
    
        const nombreTipo = tipo.type.name as keyof typeof TIPOS_POKEMON;
    
        return {
            id: nombreTipo,
            nombre: TIPOS_POKEMON[nombreTipo].nombre,
            icono: TIPOS_POKEMON[nombreTipo].icono,
            color: TIPOS_POKEMON[nombreTipo].color,
        }
    }
}

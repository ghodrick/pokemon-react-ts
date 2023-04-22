import axiosApi from "../../../config/axios";
import { EstadisticasPokemon, Pokedex, PokedexPokemon, TipoPokemon } from "../../../models/Pokedex.types";
import { PokedexApiResponse, PokemonApiResponse, PokeApiStat, PokeApiType } from "../domain/PokeApiPokedex.types";
import { PokedexRepository } from "../domain/PokedexRepository";
import { TIPOS_POKEMON } from "../../../config/constants";

export class PokeApiPokedexRepository implements PokedexRepository {

    protected baseUrl = "https://pokeapi.co/api/v2/";

    async getPokedex() {

        const url = `${this.baseUrl}pokedex/national/`;

        const {data: datosPokedex} : {data: PokedexApiResponse} = await axiosApi.get(url);

        const promises: Promise<any>[] = [];

        if (datosPokedex)
        {
            const devolver: Pokedex = {
                nombre: datosPokedex.name,
                pokemons: []
            }

            datosPokedex.pokemon_entries.forEach((pokemon) => {

                const urlPokemon = `${this.baseUrl}pokemon/${pokemon.entry_number}`;

                const promise = axiosApi.get(urlPokemon);

                promises.push(promise);

            });

            const results = await Promise.all(promises);

            results.forEach((result) => {

                const {data: pokemonApi} : {data: PokemonApiResponse} = result;

                const pokemon = this.transformaPokedexPokemon(pokemonApi);

                devolver.pokemons.push(pokemon);
            });

            return devolver;
        }
        
        throw new Error('No se pudo obtener la pokedex');
        
        
    }

    private transformaPokedexPokemon = (pokemon : PokemonApiResponse) : PokedexPokemon => { 
    
        return {
            id: pokemon.id,
            numero: pokemon.order,
            nombre: pokemon.name,
            peso: pokemon.weight,
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
            nombre: tipo.type.name,
            icono: TIPOS_POKEMON[nombreTipo].icono,
            color: TIPOS_POKEMON[nombreTipo].color
        }
    }
}

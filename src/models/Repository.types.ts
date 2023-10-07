import { PokemonRepository } from "@/modules/Pokemon/domain/PokemonRepository";
import { PokedexRepository } from "../modules/Pokedex/domain/PokedexRepository";

export interface Repositories {
    pokedex: PokedexRepository;
    pokemon: PokemonRepository;
}
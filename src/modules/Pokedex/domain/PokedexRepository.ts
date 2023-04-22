import { Pokedex } from "../../../models/Pokedex.types";

export interface PokedexRepository {
    getPokedex(): Promise<Pokedex>;
}
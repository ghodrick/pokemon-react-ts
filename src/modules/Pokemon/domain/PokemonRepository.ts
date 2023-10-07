

export interface PokemonRepository {
    getPokemon(id: number): Promise<any>;
}
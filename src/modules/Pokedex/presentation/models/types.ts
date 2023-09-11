export type FormSearchValues = {
    search: string;
    types: string[];
    region: string;
}

export type ImagenPokemonType = 'normal' | 'shiny';
export interface PokedexContextValue {
    tipo_imagen: ImagenPokemonType;
}

export interface PokedexContextProviderProps {
    pokedexState: PokedexContextValue,
    dispatch: React.Dispatch<React.SetStateAction<PokedexContextValue>>
}

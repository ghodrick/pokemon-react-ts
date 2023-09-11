import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { PokedexContextProviderProps, PokedexContextValue } from "../models/types";


const PokedexContext = createContext<PokedexContextProviderProps | null>(null);

const defaultContextValue : PokedexContextValue = {
    tipo_imagen: 'normal'
}

const PokedexContextProvider = ({children} : {children: ReactNode}) => {

    let [pokedexState, dispatch] = useState<PokedexContextValue>(defaultContextValue);


    return (
        <PokedexContext.Provider value={{pokedexState, dispatch}}>
            {children}
        </PokedexContext.Provider>
    )

}


export const usePokedexContext = () => {

    let context = useContext(PokedexContext);

    if (!context) 
    {
        throw new Error('usePokedexContext debe ser usado dentro de un PokedexContextProvider');
    }

    const {dispatch} = context;

    const togglePokemonImage = useCallback(() => {

        dispatch((oldState) => ({...oldState, tipo_imagen: oldState.tipo_imagen === 'normal' ? 'shiny' : 'normal'}));

    }, [dispatch]);

    return {
        ...context,
        togglePokemonImage
    }

}

export default PokedexContextProvider;

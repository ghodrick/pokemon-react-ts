import { TIPOS_POKEMON } from "@/config/constants";
import { Pokedex as PokedexType } from "@/models/Pokedex.types";
import { memo } from "react";
import { useLoaderData } from "react-router-dom";
import RegionFilter from "../RegionFilter/RegionFilter";
import CheckboxTipoPokemon from "./CheckboxTipoPokemon/CheckboxTipoPokemon";


const PokemonFilter = memo(() => {

    const {regiones} = useLoaderData() as PokedexType;


    return ( 
        <div className="mt-6 sm:mt-10">
            <div className="relative flex overflow-x-scroll sm:overflow-auto snap-x snap-mandatory pb-4 sm:pb-0 sm:grid sm:grid-auto-fit-[4rem] gap-3">
                <RegionFilter
                    regiones={regiones}
                />
                
            </div>

            <div className="flex overflow-x-scroll snap-mandatory snap-x pb-11 sm:pb-12 sm:overflow-auto sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-2 sm:mt-10">
                {
                    Object.entries(TIPOS_POKEMON).map(([idTipo, datosTipo]) => (

                        <CheckboxTipoPokemon 
                            key={`tipo_${idTipo}`} 
                            name={`types`}
                            value={idTipo}
                            data={{...datosTipo, id: idTipo}} 
                        />

                    ))
                }
                
            </div>
        </div>
     );
})
 
export default PokemonFilter;
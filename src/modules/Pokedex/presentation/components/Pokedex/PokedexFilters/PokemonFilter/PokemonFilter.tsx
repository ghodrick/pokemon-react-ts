import { TIPOS_POKEMON } from "@/config/constants";
import { memo } from "react";
import CheckboxTipoPokemon from "./CheckboxTipoPokemon/CheckboxTipoPokemon";
import { useLoaderData } from "react-router-dom";
import { Pokedex as PokedexType } from "@/models/Pokedex.types";
import RegionFilter from "../RegionFilter/RegionFilter";


const PokemonFilter = memo(() => {

    const {regiones} = useLoaderData() as PokedexType;


    return ( 
        <div className="mt-10">
            <div className="grid grid-auto-fit-[4rem] gap-3">
                <RegionFilter
                    regiones={regiones}
                />
            </div>
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
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
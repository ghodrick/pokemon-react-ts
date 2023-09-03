import { TIPOS_POKEMON } from "@/config/constants";
import { memo } from "react";
import CheckboxTipoPokemon from "./CheckboxTipoPokemon/CheckboxTipoPokemon";


const PokemonFilter = memo(() => {


    return ( 
        <div>
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
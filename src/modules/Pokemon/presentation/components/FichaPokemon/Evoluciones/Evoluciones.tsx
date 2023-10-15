import { capitalize } from "@/helpers/string.helper";
import { PokemonEvolutions } from "@/models/Pokedex.types";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface EvolucionesProps {
    data: PokemonEvolutions | null
}
const Evoluciones = ({data = null} : EvolucionesProps) => {

    

    return (
        
            data 
            ?
            (
                <div className="flex justify-center flex-1">
                    <EvolutionTree pokemon={[data]} />
                </div>
            )
            : 
            (
                <div>
                    No evoluciona
                </div>
            )
        
        
    )

}


const EvolutionTree = ({pokemon} : {pokemon: PokemonEvolutions[]}) => {

    let numEvoluciones = pokemon?.length || 0

    let claseExtra = '';

    let repeat = 1;

    if (numEvoluciones > 4)
    {
        repeat = 4;
    }

    return (
        <div className={`grid gap-8 tree ${claseExtra}`} style={{gridTemplateColumns: `repeat(${repeat}, 1fr)`}}>
            {
                pokemon.map(nodo => (
                    <EvolutionNode key={nodo.nombre} nodo={nodo} />
                ))
            }
            
        </div>
    )

}

const EvolutionNode = ({nodo} : {nodo: PokemonEvolutions}) => {

    let numEvoluciones = nodo?.evoluciona?.length || 0;
    
    let img = nodo.imagen || '';

    return (
        <div className="flex items-center gap-6">
            <Link to={`/pokemon/${nodo.id}`} className="cursor-pointer">
                <div className="flex flex-col relative items-center">
                    <picture className="w-28 h-28 block border-neutral-700 border-4 shadow-md shadow-neutral-900/20 p-2 bg-neutral-900 rounded-full">
                        <img src={img} alt={nodo.nombre} />
                    </picture>
                    <span className="text-xs -mt-3 font-extrabold tracking-wider uppercase text-container">
                        {capitalize(nodo.nombre)}
                    </span>
                </div>
            </Link>
            {
                nodo.evoluciona && numEvoluciones > 0 && (
                    <>
                        <div className="text-6xl text-neutral-600">
                            <MdChevronRight />
                        </div>
                        <EvolutionTree pokemon={nodo.evoluciona} />
                     
                    </>
                )
            }
        </div>
    )

}


export default Evoluciones;

import TipoPokemon from "@/components/pokemon/TipoPokemon";
import { capitalize } from "@/helpers/string.helper";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { ImagenPokemonType } from "@/modules/Pokedex/presentation/models/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PokemonCardStats from "./PokemonCardStats/PokemonCardStats";

interface PokemonCardProps {
    pokemon: PokedexPokemon;
    tipoImagen?: ImagenPokemonType;
}

const PokemonCard = ({pokemon, tipoImagen = 'normal'} : PokemonCardProps) => {

    let imagenUsar = tipoImagen === 'normal' ? pokemon.imagen.normal : pokemon.imagen.shiny;

    return ( 
            <Link to={`/pokemon/${pokemon.id}`}>
                <motion.div
                    layout
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{ once: true, margin: '-100px' }}
                    className={'flex flex-col bg-card rounded-lg py-4 space-y-2 overflow-hidden shadow-xl shadow-neutral-200 px-4'}>
                    <div className="flex justify-center relative">
                        <div className="w-52 h-52">
                            <img loading="lazy" src={imagenUsar} alt={pokemon.nombre} className="select-none" />
                        </div>
                        <span className="absolute right-1 font-semibold text-neutral-foreground-dark">Nº {pokemon.numero}</span>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-center font-bold text-card-foreground">{capitalize(pokemon.nombre)}</h3>
                        <div className="flex gap-2 justify-center">
                            {
                                pokemon.tipos.map((tipo) => <TipoPokemon key={`tipo_${pokemon.id}_${tipo.id}`} type={tipo} />)
                            }
                        </div>
                    
                        <PokemonCardStats stats={pokemon.estadisticas} />
                    
                    </div>
                </motion.div>
            </Link>
     );
}
 
export default PokemonCard;
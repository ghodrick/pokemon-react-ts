import TipoPokemon from "@/components/pokemon/TipoPokemon";
import NextPrevButton from "@/components/ui/buttons/NextPrevButton";
import { capitalize } from "@/helpers/string.helper";
import { leftZeros } from "@/helpers/utils";
import { Pokemon } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import PokemonPrevNextData from "./PokemonPrevNextData/PokemonPrevNextData";



const textClasses = cva(
    [],
    {
        variants: {
            type: {
                bug: 'text-bicho-900',
                dark: 'text-siniestro-900',
                dragon: 'text-dragon-900',
                electric: 'text-electrico-900',
                fairy: 'text-hada-900',
                fighting: 'text-lucha-900',
                fire: 'text-fuego-900',
                flying: 'text-volador-900',
                ghost: 'text-fantasma-900',
                grass: 'text-planta-900',
                ground: 'text-tierra-900',
                ice: 'text-hielo-900',
                normal: 'text-normal-900',
                poison: 'text-veneno-900',
                psychic: 'text-psiquico-900',
                rock: 'text-roca-900',
                steel: 'text-acero-900',
                water: 'text-agua-900',
            }
        },
    }
);

const CabeceraFichaPokemon = ({pokemon} : {pokemon: Pokemon}) => {


    return (
        <>
        <div className='grid grid-cols-3 min-h-[250px] rounded-t-xl pt-4 px-2 pb-10 transition-all duration-500'>
            <div className="justify-self-start">
                <NextPrevButton 
                    orientation='left'
                    href={`/pokemon/${pokemon.pokemonPrev.id}`}
                    className={textClasses({type: pokemon.tipos[0].id})}
                    renderPrev={() => (
                        <PokemonPrevNextData
                            className={'hidden sm:flex'}
                            pokemon={pokemon.pokemonPrev}
                        />
                    )}
                />
            </div>
            <div className="justify-self-center">
                <div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        key={pokemon.id}
                        className="w-50 h:50 sm:w-60 sm:h-60 p-5 -mt-24 drop-shadow-[10px_0px_5px_rgba(0,0,0,0.15)] select-none"
                    >
                        <img src={pokemon.imagen.normal} alt={pokemon.nombre} />
                    </motion.div>
                    <div className={twMerge("flex flex-col items-center font-mono", textClasses({type:pokemon.tipos[0].id}))}>
                        <span className="text-lg opacity-70 font-semibold">{leftZeros(pokemon.numero, 4)}</span>
                        <span className="text-xl font-semibold">{capitalize(pokemon.nombre)}</span>
                    </div>
                    <div className="flex gap-2 justify-center mt-4">
                        {
                            pokemon.tipos.map((tipo) => <TipoPokemon key={`tipo_${pokemon.id}_${tipo.id}`} type={tipo} />)
                        }
                    </div>
                </div>
            </div>
            <div className="justify-self-end">
                <NextPrevButton 
                    orientation='right'
                    href={`/pokemon/${pokemon.pokemonNext.id}`}
                    className={textClasses({type: pokemon.tipos[0].id})}
                    renderPrev={() => (
                        <PokemonPrevNextData
                            className={'hidden sm:flex'}
                            pokemon={pokemon.pokemonNext}
                        />
                    )}
                />
            </div>
        </div>
        <div className="h-10 bg-gradient-to-t from-gray-900/10"></div>
        </>
    )
}

export default CabeceraFichaPokemon;
import TipoPokemon from "@/components/pokemon/TipoPokemon";
import { capitalize } from "@/helpers/string.helper";
import { leftZeros } from "@/helpers/utils";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { twMerge } from "tailwind-merge";



const pokemonContainerClasses = cva(
    [
        "w-full bg-gradient-to-br border-4 border-container/50 p-6 rounded-2xl"
    ],
    {
        variants: {
            firstType: {
                bug: 'from-bicho-lighter/20 to-bicho-lighter/20',
                dark: 'from-siniestro-lighter/20 to-siniestro-lighter/20',
                dragon: 'from-dragon-lighter/20 to-dragon-lighter/20',
                electric: 'from-electrico-lighter/20 to-electrico-lighter/20',
                fairy: 'from-hada-lighter/20 to-hada-lighter/20',
                fighting: 'from-lucha-lighter/20 to-lucha-lighter/20',
                fire: 'from-fuego-lighter/20 to-fuego-lighter/20',
                flying: 'from-volador-lighter/20 to-volador-lighter/20',
                ghost: 'from-fantasma-lighter/20 to-fantasma-lighter/20',
                grass: 'from-planta-lighter/20 to-planta-lighter/20',
                ground: 'from-tierra-lighter/20 to-tierra-lighter/20',
                ice: 'from-hielo-lighter/20 to-hielo-lighter/20',
                normal: 'from-normal-lighter/20 to-normal-lighter/20',
                poison: 'from-veneno-lighter/20 to-veneno-lighter/20',
                psychic: 'from-psiquico-lighter/20 to-psiquico-lighter/20',
                rock: 'from-roca-lighter/20 to-roca-lighter/20',
                steel: 'from-acero-lighter/20 to-acero-lighter/20',
                water: 'from-agua-lighter/20 to-agua-lighter/20',
            },
            secondType: {
                bug: 'to-bicho-lighter/20',
                dark: 'to-siniestro-lighter/20',
                dragon: 'to-dragon-lighter/20',
                electric: 'to-electrico-lighter/20',
                fairy: 'to-hada-lighter/20',
                fighting: 'to-lucha-lighter/20',
                fire: 'to-fuego-lighter/20',
                flying: 'to-volador-lighter/20',
                ghost: 'to-fantasma-lighter/20',
                grass: 'to-planta-lighter/20',
                ground: 'to-tierra-lighter/20',
                ice: 'to-hielo-lighter/20',
                normal: 'to-normal-lighter/20',
                poison: 'to-veneno-lighter/20',
                psychic: 'to-psiquico-lighter/20',
                rock: 'to-roca-lighter/20',
                steel: 'to-acero-lighter/20',
                water: 'to-agua-lighter/20',
            }
        },
    }
);

const textNumberClasses = cva([
    'flex w-full justify-between items-center text-lg font-semibold',
    ],
    {
        variants: {
            firstType: {
                bug: 'text-bicho-darker',
                dark: 'text-siniestro-darker',
                dragon: 'text-dragon-darker',
                electric: 'text-electrico-darker',
                fairy: 'text-hada-darker',
                fighting: 'text-lucha-darker',
                fire: 'text-fuego-darker',
                flying: 'text-volador-darker',
                ghost: 'text-fantasma-darker',
                grass: 'text-planta-darker',
                ground: 'text-tierra-darker',
                ice: 'text-hielo-darker',
                normal: 'text-normal-darker',
                poison: 'text-veneno-darker',
                psychic: 'text-psiquico-darker',
                rock: 'text-roca-darker',
                steel: 'text-acero-darker',
                water: 'text-agua-darker',
            }
        }
    }
)

interface PokedexSidebarProps {
    pokemon: PokedexPokemon;
    onNextPokemonClick: () => void;
    onPrevPokemonClick: () => void;
}

const PokedexSidebar = ({pokemon, onNextPokemonClick, onPrevPokemonClick} : PokedexSidebarProps) => {


    return (
        <div className={twMerge(pokemonContainerClasses({firstType: pokemon.tipos[0].id, secondType: pokemon?.tipos[1]?.id || undefined}))}>
            <div className="flex flex-col gap-4">
                <div className={textNumberClasses({firstType: pokemon.tipos[0].id})}>
                    <button type="button" className="text-2xl p-2" onClick={onPrevPokemonClick}>
                        <LuChevronLeft />
                    </button>
                    <div>
                        {leftZeros(pokemon.numero, 4)}
                    </div>
                    <button type="button" className="text-2xl p-2" onClick={onNextPokemonClick}>
                        <LuChevronRight />
                    </button>
                </div>
                <div className="w-full px-10 min-h-[212px]">
                    <AnimatePresence initial={false}>
                        <motion.img key={pokemon.id}
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{bounce: 0.8}}
                            src={pokemon.imagen.normal} alt={pokemon.nombre} 
                        />
                    </AnimatePresence>
                </div>
                <div className="text-center font-bold text-neutral-800">
                    {capitalize(pokemon.nombre)}
                </div>

                <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} key={pokemon.id} layout className="flex gap-2 justify-center">
                    {
                        pokemon.tipos.map((tipo) => <TipoPokemon key={`tipo_${pokemon.id}_${tipo.id}`} type={tipo} />)
                    }
                </motion.div>
            </div>

        </div>
    )
}

export default PokedexSidebar;
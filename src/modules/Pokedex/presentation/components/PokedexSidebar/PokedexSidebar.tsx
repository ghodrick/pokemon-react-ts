import TipoPokemon from "@/components/pokemon/TipoPokemon";
import { capitalize } from "@/helpers/string.helper";
import { leftZeros } from "@/helpers/utils";
import { PokedexPokemon } from "@/models/Pokedex.types";
import { ClickEvent } from "@/models/React.types";
import { cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";


//dark:!from-slate-800 dark:!to-fantasma-950
const pokemonContainerClasses = cva(
    [
        "w-full bg-gradient-to-br border-4 border-white/50 dark:border-0 p-6 rounded-2xl dark:!from-slate-800 dark:!to-slate-800",
    ],
    {
        variants: {
            firstType: {
                bug: 'from-bicho-100 to-bicho-100',
                dark: 'from-siniestro-100 to-siniestro-100',
                dragon: 'from-dragon-100 to-dragon-100',
                electric: 'from-electrico-100 to-electrico-100',
                fairy: 'from-hada-100 to-hada-100',
                fighting: 'from-lucha-100 to-lucha-100',
                fire: 'from-fuego-100 to-fuego-100',
                flying: 'from-volador-100 to-volador-100',
                ghost: 'from-fantasma-100 to-fantasma-100',
                grass: 'from-planta-100 to-planta-100',
                ground: 'from-tierra-100 to-tierra-100',
                ice: 'from-hielo-100 to-hielo-100',
                normal: 'from-normal-100 to-normal-100',
                poison: 'from-veneno-100 to-veneno-100',
                psychic: 'from-psiquico-100 to-psiquico-100',
                rock: 'from-roca-100 to-roca-100',
                steel: 'from-acero-100 to-acero-100',
                water: 'from-agua-100 to-agua-100',
            },
            secondType: {
                bug: 'to-bicho-100',
                dark: 'to-siniestro-100',
                dragon: 'to-dragon-100',
                electric: 'to-electrico-100',
                fairy: 'to-hada-100',
                fighting: 'to-lucha-100',
                fire: 'to-fuego-100',
                flying: 'to-volador-100',
                ghost: 'to-fantasma-100',
                grass: 'to-planta-100',
                ground: 'to-tierra-100',
                ice: 'to-hielo-100',
                normal: 'to-normal-100',
                poison: 'to-veneno-100',
                psychic: 'to-psiquico-100',
                rock: 'to-roca-100',
                steel: 'to-acero-100',
                water: 'to-agua-100',
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
                bug: 'text-bicho-900 dark:text-bicho-100',
                dark: 'text-siniestro-900 dark:text-siniestro-100',
                dragon: 'text-dragon-900 dark:text-dragon-100',
                electric: 'text-electrico-900 dark:text-electrico-100',
                fairy: 'text-hada-900 dark:text-hada-100',
                fighting: 'text-lucha-900 dark:text-lucha-100',
                fire: 'text-fuego-900 dark:text-fuego-100',
                flying: 'text-volador-900 dark:text-volador-100',
                ghost: 'text-fantasma-900 dark:text-fantasma-100',
                grass: 'text-planta-900 dark:text-planta-100',
                ground: 'text-tierra-900 dark:text-tierra-100',
                ice: 'text-hielo-900 dark:text-hielo-100',
                normal: 'text-normal-900 dark:text-normal-100',
                poison: 'text-veneno-900 dark:text-veneno-100',
                psychic: 'text-psiquico-900 dark:text-psiquico-100',
                rock: 'text-roca-900 dark:text-roca-100',
                steel: 'text-acero-900 dark:text-acero-100',
                water: 'text-agua-900 dark:text-agua-100',
            }
        }
    }
)

interface PokedexSidebarProps {
    pokemon: PokedexPokemon;
    onNextPokemonClick: (event: ClickEvent) => void;
    onPrevPokemonClick: (event: ClickEvent) => void;
}

const PokedexSidebar = ({pokemon, onNextPokemonClick, onPrevPokemonClick} : PokedexSidebarProps) => {


    return (
        <Link className="w-full" to={`/pokemon/${pokemon.id}`}>
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
                    <div className="text-center font-bold text-neutral-800 dark:text-slate-50">
                        {capitalize(pokemon.nombre)}
                    </div>

                    <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} key={pokemon.id} layout className="flex gap-2 justify-center">
                        {
                            pokemon.tipos.map((tipo) => <TipoPokemon key={`tipo_${pokemon.id}_${tipo.id}`} type={tipo} />)
                        }
                    </motion.div>
                </div>

            </div>
        </Link>
    )
}

export default PokedexSidebar;
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { MAP_STATS } from "@/config/constants";
import { EstadisticasPokemon, PokemonTypeVariants } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";




const cnBarritas = cva(
    [
        'relative w-full rounded-full overflow-hidden [&>div]:absolute [&>div]:top-0 [&>div]:left-0 [&>div]:h-full [&>div]:transition-all [&>div]:duration-700 dark:!bg-slate-900'
    ],
    {
        variants: {
            type: {
                bug: 'bg-bicho-100 [&>div]:bg-gradient-to-r [&>div]:from-bicho-500 [&>div]:via-bicho-300 [&>div]:to-bicho-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-bicho-300 dark:[&>div]:via-bicho-400 dark:[&>div]:to-bicho-600',
                dark: 'bg-siniestro-100 [&>div]:bg-gradient-to-r [&>div]:from-siniestro-500 [&>div]:via-siniestro-400 [&>div]:to-siniestro-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-siniestro-300 dark:[&>div]:via-siniestro-400 dark:[&>div]:to-siniestro-600',
                dragon: 'bg-dragon-100 [&>div]:bg-gradient-to-r [&>div]:from-dragon-500 [&>div]:via-dragon-400 [&>div]:to-dragon-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-dragon-300 dark:[&>div]:via-dragon-400 dark:[&>div]:to-dragon-600',
                electric: 'bg-electrico-100 [&>div]:bg-gradient-to-r [&>div]:from-electrico-500 [&>div]:via-electrico-400 [&>div]:to-electrico-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-electrico-300 dark:[&>div]:via-electrico-400 dark:[&>div]:to-electrico-600',
                fairy: 'bg-hada-100 [&>div]:bg-gradient-to-r [&>div]:from-hada-500 [&>div]:via-hada-400 [&>div]:to-hada-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-hada-300 dark:[&>div]:via-hada-400 dark:[&>div]:to-hada-600',
                fighting: 'bg-lucha-100 [&>div]:bg-gradient-to-r [&>div]:from-lucha-500 [&>div]:via-lucha-400 [&>div]:to-lucha-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-lucha-300 dark:[&>div]:via-lucha-400 dark:[&>div]:to-lucha-600',
                fire: 'bg-fuego-100 [&>div]:bg-gradient-to-r [&>div]:from-fuego-400 [&>div]:via-fuego-300 [&>div]:to-fuego-400 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-fuego-300 dark:[&>div]:via-fuego-400 dark:[&>div]:to-fuego-600',
                flying: 'bg-volador-100 [&>div]:bg-gradient-to-r [&>div]:from-volador-500 [&>div]:via-volador-400 [&>div]:to-volador-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-volador-300 dark:[&>div]:via-volador-400 dark:[&>div]:to-volador-600',
                ghost: 'bg-fantasma-100 [&>div]:bg-gradient-to-r [&>div]:from-fantasma-500 [&>div]:via-fantasma-400 [&>div]:to-fantasma-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-fantasma-300 dark:[&>div]:via-fantasma-400 dark:[&>div]:to-fantasma-600',
                grass: 'bg-planta-100 [&>div]:bg-gradient-to-r [&>div]:from-planta-600 [&>div]:via-planta-400 [&>div]:to-planta-600 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-planta-300 dark:[&>div]:via-planta-400 dark:[&>div]:to-planta-600',
                ground: 'bg-tierra-100 [&>div]:bg-gradient-to-r [&>div]:from-tierra-400 [&>div]:via-tierra-300 [&>div]:to-tierra-400 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-tierra-300 dark:[&>div]:via-tierra-400 dark:[&>div]:to-tierra-600',
                ice: 'bg-hielo-100 [&>div]:bg-gradient-to-r [&>div]:from-hielo-500 [&>div]:via-hielo-400 [&>div]:to-hielo-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-hielo-300 dark:[&>div]:via-hielo-400 dark:[&>div]:to-hielo-600',
                normal: 'bg-normal-100 [&>div]:bg-gradient-to-r [&>div]:from-normal-500 [&>div]:via-normal-400 [&>div]:to-normal-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-normal-300 dark:[&>div]:via-normal-400 dark:[&>div]:to-normal-600',
                poison: 'bg-veneno-100 [&>div]:bg-gradient-to-r [&>div]:from-veneno-500 [&>div]:via-veneno-400 [&>div]:to-veneno-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-veneno-300 dark:[&>div]:via-veneno-400 dark:[&>div]:to-veneno-600',
                psychic: 'bg-psiquico-100 [&>div]:bg-gradient-to-r [&>div]:from-psiquico-600 [&>div]:via-psiquico-500 [&>div]:to-psiquico-600 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-psiquico-300 dark:[&>div]:via-psiquico-400 dark:[&>div]:to-psiquico-600',
                rock: 'bg-roca-100 [&>div]:bg-gradient-to-r [&>div]:from-roca-500 [&>div]:via-roca-400 [&>div]:to-roca-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-roca-300 dark:[&>div]:via-roca-400 dark:[&>div]:to-roca-600',
                steel: 'bg-acero-100 [&>div]:bg-gradient-to-r [&>div]:from-acero-500 [&>div]:via-acero-400 [&>div]:to-acero-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-acero-300 dark:[&>div]:via-acero-400 dark:[&>div]:to-acero-600',
                water: 'bg-agua-100 [&>div]:bg-gradient-to-r [&>div]:from-agua-500 [&>div]:via-agua-400 [&>div]:to-agua-500 [&>div]:animate-gradient [&>div]:bg-300% dark:[&>div]:from-agua-300 dark:[&>div]:via-agua-400 dark:[&>div]:to-agua-600',
                neutral: 'bg-neutral-600/10 [&>div]:bg-neutral-700 dark:bg-slate-900 dark:[&>div]:bg-primary-200'
            },
            size: {
                sm: 'h-2',
                md: 'h-3',
                lg: 'h-4'
            }
        },
        defaultVariants: {
            type: "neutral",
            size: "sm",
        },
    }
);

const cnIndicadorStat = cva(
    [
        'text-sm font-bold cursor-default'
    ],
    {
        variants: {
            type: {
                bug: 'text-bicho-800 dark:text-bicho-200',
                dark: 'text-siniestro-800 dark:text-siniestro-200',
                dragon: 'text-dragon-800 dark:text-dragon-200',
                electric: 'text-electrico-800 dark:text-electrico-200',
                fairy: 'text-hada-800 dark:text-hada-200',
                fighting: 'text-lucha-800 dark:text-lucha-200',
                fire: 'text-fuego-800 dark:text-fuego-200',
                flying: 'text-volador-900 dark:text-veneno-200',
                ghost: 'text-fantasma-800 dark:text-fantasma-200',
                grass: 'text-planta-800 dark:text-planta-200',
                ground: 'text-tierra-800 dark:text-tierra-200',
                ice: 'text-hielo-800 dark:text-hielo-200',
                normal: 'text-normal-800 dark:text-normal-200',
                poison: 'text-veneno-800 dark:text-veneno-200',
                psychic: 'text-psiquico-900 dark:text-psiquico-200',
                rock: 'text-roca-800 dark:text-roca-200',
                steel: 'text-acero-800 dark:text-acero-200',
                water: 'text-agua-800 dark:text-agua-200',
                neutral: 'text-neutral-600/40 dark:text-slate-400/60'
            }
        },
        defaultVariants: {
            type: "neutral"
        }
    }
);

const cnMainContainer = cva(
    [
        'flex flex-col !mt-7'
    ],
    {
        variants: {
            size: {
                sm: 'gap-1',
                md: 'gap-2',
                lg: 'gap-3'
            }
        }
    }
);

interface PokemonCardStatsProps {
    stats: EstadisticasPokemon[];
    size?: 'sm' | 'md' | 'lg';
    type?: PokemonTypeVariants;
}

const PokemonCardStats = ({stats, size = 'sm', type = undefined} : PokemonCardStatsProps) => {


    return ( 
        <div className={cnMainContainer({size})}>
            {
                //Muestra las stats en barritas cuyo 100% es 255
                stats.map(stat => (
                    <Tooltip key={`stat_${stat.nombre}`} title={stat.base.toString()} align="start" triggerAsChild>
                        <div className="flex items-center gap-2 font-mono">
                            <span className={cnIndicadorStat({type})}>
                                {MAP_STATS[stat.nombre as keyof typeof MAP_STATS]}
                            </span>
                            
                            <div className={cnBarritas({type, size})}>
                                <div style={{width: `${stat.base / 255 * 100}%`}}></div>
                            </div>
                        
                            <div className="min-w-[25px]">
                                {
                                    stat.puntosEsfuerzo > 0 && (
                                        <span className="text-xs font-bold flex justify-center items-center font-mono text-amber-500">
                                            {stat.puntosEsfuerzo}EV
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </Tooltip>
                ))
            }
        </div>
     );
}

export default PokemonCardStats;
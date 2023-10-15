import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { MAP_STATS } from "@/config/constants";
import { EstadisticasPokemon, PokemonTypeVariants } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";




const cnBarritas = cva(
    [
        'relative w-full rounded-full overflow-hidden [&>div]:absolute [&>div]:top-0 [&>div]:left-0 [&>div]:h-full [&>div]:transition-all [&>div]:duration-700'
    ],
    {
        variants: {
            type: {
                bug: 'bg-bicho-100 [&>div]:bg-gradient-to-r [&>div]:from-bicho-500 [&>div]:via-bicho-300 [&>div]:to-bicho-500 [&>div]:animate-gradient [&>div]:bg-300%',
                dark: 'bg-siniestro-100 [&>div]:bg-gradient-to-r [&>div]:from-siniestro-500 [&>div]:via-siniestro-400 [&>div]:to-siniestro-500 [&>div]:animate-gradient [&>div]:bg-300%',
                dragon: 'bg-dragon-100 [&>div]:bg-gradient-to-r [&>div]:from-dragon-500 [&>div]:via-dragon-400 [&>div]:to-dragon-500 [&>div]:animate-gradient [&>div]:bg-300%',
                electric: 'bg-electrico-100 [&>div]:bg-gradient-to-r [&>div]:from-electrico-500 [&>div]:via-electrico-400 [&>div]:to-electrico-500 [&>div]:animate-gradient [&>div]:bg-300%',
                fairy: 'bg-hada-100 [&>div]:bg-gradient-to-r [&>div]:from-hada-500 [&>div]:via-hada-400 [&>div]:to-hada-500 [&>div]:animate-gradient [&>div]:bg-300%',
                fighting: 'bg-lucha-100 [&>div]:bg-gradient-to-r [&>div]:from-lucha-500 [&>div]:via-lucha-400 [&>div]:to-lucha-500 [&>div]:animate-gradient [&>div]:bg-300%',
                fire: 'bg-fuego-100 [&>div]:bg-gradient-to-r [&>div]:from-fuego-400 [&>div]:via-fuego-300 [&>div]:to-fuego-400 [&>div]:animate-gradient [&>div]:bg-300%',
                flying: 'bg-volador-100 [&>div]:bg-gradient-to-r [&>div]:from-volador-500 [&>div]:via-volador-400 [&>div]:to-volador-500 [&>div]:animate-gradient [&>div]:bg-300%',
                ghost: 'bg-fantasma-100 [&>div]:bg-gradient-to-r [&>div]:from-fantasma-500 [&>div]:via-fantasma-400 [&>div]:to-fantasma-500 [&>div]:animate-gradient [&>div]:bg-300%',
                grass: 'bg-planta-100 [&>div]:bg-gradient-to-r [&>div]:from-planta-600 [&>div]:via-planta-400 [&>div]:to-planta-600 [&>div]:animate-gradient [&>div]:bg-300%',
                ground: 'bg-tierra-100 [&>div]:bg-gradient-to-r [&>div]:from-tierra-400 [&>div]:via-tierra-300 [&>div]:to-tierra-400 [&>div]:animate-gradient [&>div]:bg-300%',
                ice: 'bg-hielo-100 [&>div]:bg-gradient-to-r [&>div]:from-hielo-500 [&>div]:via-hielo-400 [&>div]:to-hielo-500 [&>div]:animate-gradient [&>div]:bg-300%',
                normal: 'bg-normal-100 [&>div]:bg-gradient-to-r [&>div]:from-normal-500 [&>div]:via-normal-400 [&>div]:to-normal-500 [&>div]:animate-gradient [&>div]:bg-300%',
                poison: 'bg-veneno-100 [&>div]:bg-gradient-to-r [&>div]:from-veneno-500 [&>div]:via-veneno-400 [&>div]:to-veneno-500 [&>div]:animate-gradient [&>div]:bg-300%',
                psychic: 'bg-psiquico-100 [&>div]:bg-gradient-to-r [&>div]:from-psiquico-600 [&>div]:via-psiquico-500 [&>div]:to-psiquico-600 [&>div]:animate-gradient [&>div]:bg-300%',
                rock: 'bg-roca-100 [&>div]:bg-gradient-to-r [&>div]:from-roca-500 [&>div]:via-roca-400 [&>div]:to-roca-500 [&>div]:animate-gradient [&>div]:bg-300%',
                steel: 'bg-acero-100 [&>div]:bg-gradient-to-r [&>div]:from-acero-500 [&>div]:via-acero-400 [&>div]:to-acero-500 [&>div]:animate-gradient [&>div]:bg-300%',
                water: 'bg-agua-100 [&>div]:bg-gradient-to-r [&>div]:from-agua-500 [&>div]:via-agua-400 [&>div]:to-agua-500 [&>div]:animate-gradient [&>div]:bg-300%',
                neutral: 'bg-neutral-600/10 [&>div]:bg-neutral-700'
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
                bug: 'text-bicho-800',
                dark: 'text-siniestro-800',
                dragon: 'text-dragon-800',
                electric: 'text-electrico-800',
                fairy: 'text-hada-800',
                fighting: 'text-lucha-800',
                fire: 'text-fuego-800',
                flying: 'text-volador-900',
                ghost: 'text-fantasma-800',
                grass: 'text-planta-800',
                ground: 'text-tierra-800',
                ice: 'text-hielo-800',
                normal: 'text-normal-800',
                poison: 'text-veneno-800',
                psychic: 'text-psiquico-900',
                rock: 'text-roca-800',
                steel: 'text-acero-800',
                water: 'text-agua-800',
                neutral: 'text-neutral-foreground-dark/40'
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
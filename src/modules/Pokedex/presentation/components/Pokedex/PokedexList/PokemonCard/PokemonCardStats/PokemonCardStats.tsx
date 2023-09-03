import { MAP_STATS } from "@/config/constants";
import { EstadisticasPokemon } from "@/models/Pokedex.types";


interface PokemonCardStatsProps {
    stats: EstadisticasPokemon[];
}

const PokemonCardStats = ({stats} : PokemonCardStatsProps) => {

    

    return ( 
        <div className="flex flex-col gap-1 !mt-7">
            {
                //Muestra las stats en barritas cuyo 100% es 255
                stats.map(stat => (
                    <div key={`stat_${stat.nombre}`} className="flex items-center gap-2 font-mono">
                        <span className="text-neutral-foreground-dark/40 text-sm">
                            {MAP_STATS[stat.nombre as keyof typeof MAP_STATS]}
                        </span>
                        <div className="relative w-full h-2 bg-primary/10 rounded-full overflow-hidden" title={stat.base.toString()}>
                            <div className="absolute top-0 left-0 h-full bg-primary" style={{width: `${stat.base / 255 * 100}%`}}></div>
                        </div>
                        <div className="min-w-[25px]">
                            {
                                stat.puntosEsfuerzo > 0 && (
                                    <span className="text-xs font-bold flex justify-center items-center font-mono text-amber-500">{stat.puntosEsfuerzo}EV</span>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
//grid-cols-[repeat(auto-fill,_minmax(min(35px,100%),1fr))]
// const PokemonCardStats = ({stats} : PokemonCardStatsProps) => {

//     ;
//     return ( 
//         <div className="flex justify-between !mt-7">
//             {
//             stats.map(stat => (
//                 <div key={`stat_${stat.nombre}`} className="flex flex-col items-center px-3 relative">
//                     <span className="text-gray-400 text-xs">{MAP_STATS[stat.nombre as keyof typeof MAP_STATS]}</span>
//                     <span className="text-gray-600 font-semibold relative font-mono">
//                         {stat.base} 
//                     {
//                         stat.puntosEsfuerzo > 0 && 
//                         <span className="text-xs absolute -right-4 -top-2 flex justify-center text-amber-500 items-center">+{stat.puntosEsfuerzo}</span>
//                     }
//                     </span>
                    
//                 </div>
//             ))
//             }
//         </div>
//      );
// }
 
export default PokemonCardStats;
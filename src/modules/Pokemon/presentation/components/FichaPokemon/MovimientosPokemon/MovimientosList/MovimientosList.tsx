import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { CLASE_ATAQUES, TIPOS_POKEMON } from "@/config/constants";
import { capitalize } from "@/helpers/string.helper";
import { MovimientoPokemon } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";

const movimientoClasses = cva(
    ["flex flex-col rounded-md overflow-hidden"],
    {
        variants: {
            type: {
                bug: 'bg-bicho-100 [&>div:last-child]:bg-bicho-400 [&>div:last-child]:text-bicho-50',
                dark: 'bg-siniestro-200 [&>div:last-child]:bg-siniestro-400 [&>div:last-child]:text-siniestro-50',
                dragon: 'bg-dragon-100 [&>div:last-child]:bg-dragon-400 [&>div:last-child]:text-dragon-50',
                electric: 'bg-electrico-100 [&>div:last-child]:bg-electrico-400 [&>div:last-child]:text-electrico-50',
                fairy: 'bg-hada-100 [&>div:last-child]:bg-hada-400 [&>div:last-child]:text-hada-50',
                fighting: 'bg-lucha-100 [&>div:last-child]:bg-lucha-400 [&>div:last-child]:text-lucha-50',
                fire: 'bg-fuego-100  [&>div:last-child]:bg-fuego-400 [&>div:last-child]:text-fuego-50',
                flying: 'bg-volador-100 [&>div:last-child]:bg-volador-400 [&>div:last-child]:text-volador-50',
                ghost: 'bg-fantasma-100 [&>div:last-child]:bg-fantasma-400 [&>div:last-child]:text-fantasma-50',
                grass: 'bg-planta-100 [&>div:last-child]:bg-planta-400 [&>div:last-child]:text-planta-50',
                ground: 'bg-tierra-100 [&>div:last-child]:bg-tierra-400 [&>div:last-child]:text-tierra-50',
                ice: 'bg-hielo-100 [&>div:last-child]:bg-hielo-400 [&>div:last-child]:text-hielo-50',
                normal: 'bg-normal-100 [&>div:last-child]:bg-normal-400 [&>div:last-child]:text-normal-50',
                poison: 'bg-veneno-100 [&>div:last-child]:bg-veneno-400 [&>div:last-child]:text-veneno-50',
                psychic: 'bg-psiquico-100 [&>div:last-child]:bg-psiquico-400 [&>div:last-child]:text-psiquico-50',
                rock: 'bg-roca-100 [&>div:last-child]:bg-roca-400 [&>div:last-child]:text-roca-50',
                steel: 'bg-acero-100  [&>div:last-child]:bg-acero-400 [&>div:last-child]:text-acero-50',
                water: 'bg-agua-100 [&>div:last-child]:bg-agua-400 [&>div:last-child]:text-agua-50',
            }
        },
    }
);

interface MovimientosListProps {
    movimientos: MovimientoPokemon[];
}

const MovimientosList = ({movimientos} : MovimientosListProps) => {



    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {
                movimientos.map((movimiento,index) => <MovimientoPokemonData key={`movimiento-${movimiento.nombre}_${index}`} data={movimiento} />)
            }
        </div>
    )
}

const MovimientoPokemonData = ({data} : {data: MovimientoPokemon}) => {

    let datosTipo = TIPOS_POKEMON[data.tipo];

    let claseAtaque = CLASE_ATAQUES[data.categoria];

    let textoMostrar = data.metodoAprendizaje === 'nivel' ? `Nivel ${data.nivel}` : capitalize(data.metodoAprendizaje);

    return (
        <Tooltip title={data.descripcion} triggerAsChild>
            <div className={movimientoClasses({ type: data.tipo })}>
                <div className="flex items-center gap-2 px-2 min-h-[40px]">
                    <picture className="block w-6 shrink-0">
                        <img src={datosTipo.icono} alt={datosTipo.nombre} />
                    </picture>
                    <div className="text-sm font-semibold tracking-wide truncate">
                        {data.nombre}
                    </div>
                </div>
                <div className="flex items-center px-2">
                    <div className="flex-1 text-xs tracking-wider py-1 font-medium">
                        {textoMostrar}
                    </div>
                    <div>
                        <picture className="block w-6">
                            <img src={claseAtaque.icono} alt={claseAtaque.nombre} />
                        </picture>
                    </div>
                </div>
            </div>
        </Tooltip>
    )
}

export default MovimientosList;
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { TIPOS_POKEMON } from "@/config/constants";
import { PokemonTypeEffectivenessObject } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";

interface TagTipoFortalezaProps {
    data: PokemonTypeEffectivenessObject;
}

const tagClasses = cva(
    ["relative h-8 flex items-center gap-2 rounded-md px-2 border cursor-auto"],
    {
        variants: {
            type: {
                bug: 'text-bicho-900 bg-bicho-100 border-bicho-300',
                dark: 'text-siniestro-900 bg-siniestro-100 border-siniestro-300',
                dragon: 'text-dragon-900 bg-dragon-100 border-dragon-300',
                electric: 'text-electrico-900 bg-electrico-100 border-electrico-300',
                fairy: 'text-hada-900 bg-hada-100 border-hada-300',
                fighting: 'text-lucha-900 bg-lucha-100 border-lucha-300',
                fire: 'text-fuego-900 bg-fuego-100 border-fuego-300',
                flying: 'text-volador-900 bg-volador-100 border-volador-300',
                ghost: 'text-fantasma-900 bg-fantasma-100 border-fantasma-300',
                grass: 'text-planta-900 bg-planta-100 border-planta-300',
                ground: 'text-tierra-900 bg-tierra-100 border-tierra-300',
                ice: 'text-hielo-900 bg-hielo-100 border-hielo-300',
                normal: 'text-normal-900 bg-normal-100 border-normal-300',
                poison: 'text-veneno-900 bg-veneno-100 border-veneno-300',
                psychic: 'text-psiquico-900 bg-psiquico-100 border-psiquico-300',
                rock: 'text-roca-900 bg-roca-100 border-roca-300',
                steel: 'text-acero-900 bg-acero-100 border-acero-300',
                water: 'text-agua-900 bg-agua-100 border-agua-300',
            }
        },
    }
);

const TagTipoFortaleza = ({data} : TagTipoFortalezaProps) => {
    

    let datosTipo = TIPOS_POKEMON[data.tipo];

    let texto = `x${data.valor}`;

    if (data.valor === 0)
    {
        texto = 'Inmune';
    }

    return (
        <Tooltip title={datosTipo.nombre} triggerAsChild>
            <div className={tagClasses({type: data.tipo})}>
                <picture className="w-6 flex items-center absolute">
                    <img src={datosTipo.icono} alt={datosTipo.nombre} />
                </picture>
                <div className="flex-1 font-mono text-center font-bold text-sm">
                    <span>{texto}</span>
                </div>
            </div>
        </Tooltip>
    )
}

export default TagTipoFortaleza;
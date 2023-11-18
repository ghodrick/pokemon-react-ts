import { Pokemon } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";
import { LiaWeightHangingSolid } from 'react-icons/lia';
import { LuRuler } from 'react-icons/lu';

interface DescripcionPokemonProps {
    pokemon: Pokemon;
}

const cnDescripcion = cva(
    [
        'leading-relaxed py-4 px-6 rounded-md tracking-wide'
    ],
    {
        variants: {
            type: {
                bug: 'bg-bicho-100/50 text-bicho-800 dark:bg-bicho-200 dark:text-bicho-900',
                dark: 'bg-siniestro-200/50 text-siniestro-800 dark:bg-siniestro-200 dark:text-siniestro-900',
                dragon: 'bg-dragon-100/50 text-dragon-800 dark:bg-dragon-200 dark:text-dragon-900',
                electric: 'bg-electrico-100/50 text-electrico-800 dark:bg-electrico-200 dark:text-electrico-900',
                fairy: 'bg-hada-100/50 text-hada-800 dark:bg-hada-200 dark:text-hada-900',
                fighting: 'bg-lucha-100/50 text-lucha-800 dark:bg-lucha-200 dark:text-lucha-900',
                fire: 'bg-fuego-100/50 text-fuego-800 dark:bg-fuego-200 dark:text-fuego-900',
                flying: 'bg-volador-100/50 text-volador-900 dark:bg-volador-200 dark:text-volador-900',
                ghost: 'bg-fantasma-100/50 text-fantasma-800 dark:bg-fantasma-200 dark:text-fantasma-900',
                grass: 'bg-planta-100/50 text-planta-800 dark:bg-planta-200 dark:text-planta-900',
                ground: 'bg-tierra-100/50 text-tierra-800 dark:bg-tierra-200 dark:text-tierra-900',
                ice: 'bg-hielo-100/50 text-hielo-800 dark:bg-hielo-200 dark:text-hielo-900',
                normal: 'bg-normal-100/50 text-normal-800 dark:bg-normal-200 dark:text-normal-900',
                poison: 'bg-veneno-100/50 text-veneno-800 dark:bg-veneno-200 dark:text-veneno-900',
                psychic: 'bg-psiquico-100/50 text-psiquico-900 dark:bg-psiquico-200 dark:text-psiquico-900',
                rock: 'bg-roca-100/50 text-roca-800 dark:bg-roca-200 dark:text-roca-900',
                steel: 'bg-acero-200/50 text-acero-800 dark:bg-acero-200 dark:text-acero-900',
                water: 'bg-agua-100/50 text-agua-900 dark:bg-agua-200 dark:text-agua-900',
            }
        },
    }
);

const DescripcionPokemon = ({pokemon} : DescripcionPokemonProps) => {


    return (
        <div className="mt-8 space-y-8">
            <div className="flex gap-4">
                <div className="flex items-center gap-1 [&:not(:last-child)]:border-r pr-5 border-neutral-300 dark:border-neutral-500">
                    <div className="text-sm text-neutral-800 dark:text-neutral-400">
                        <LuRuler />
                    </div>
                    <div>
                        <span className="font-semibold">{(pokemon.altura / 10).toFixed(2)}</span>
                        <span className="text-xs text-neutral-400"> m</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="text-sm text-neutral-800 dark:text-neutral-400">
                        <LiaWeightHangingSolid />
                    </div>
                    <div>
                        <span className="font-semibold">{(pokemon.peso / 10).toFixed(2)}</span>
                        <span className="text-xs text-neutral-400"> kg</span>
                    </div>
                </div>
            </div>
            <div className={cnDescripcion({type: pokemon.tipos[0].id})}>
                {pokemon.descripcionPokedex?.descripcion}
            </div>
            
        </div>
    )

}

export default DescripcionPokemon;
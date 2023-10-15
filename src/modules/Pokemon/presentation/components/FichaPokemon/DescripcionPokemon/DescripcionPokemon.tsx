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
                bug: 'bg-bicho-100/50 text-bicho-800',
                dark: 'bg-siniestro-200/50 text-siniestro-800',
                dragon: 'bg-dragon-100/50 text-dragon-800',
                electric: 'bg-electrico-100/50 text-electrico-800',
                fairy: 'bg-hada-100/50 text-hada-800',
                fighting: 'bg-lucha-100/50 text-lucha-800',
                fire: 'bg-fuego-100/50 text-fuego-800',
                flying: 'bg-volador-100/50 text-volador-900',
                ghost: 'bg-fantasma-100/50 text-fantasma-800',
                grass: 'bg-planta-100/50 text-planta-800',
                ground: 'bg-tierra-100/50 text-tierra-800',
                ice: 'bg-hielo-100/50 text-hielo-800',
                normal: 'bg-normal-100/50 text-normal-800',
                poison: 'bg-veneno-100/50 text-veneno-800',
                psychic: 'bg-psiquico-100/50 text-psiquico-900',
                rock: 'bg-roca-100/50 text-roca-800',
                steel: 'bg-acero-200/50 text-acero-800',
                water: 'bg-agua-100/50 text-agua-900',
            }
        },
    }
);

const DescripcionPokemon = ({pokemon} : DescripcionPokemonProps) => {


    return (
        <div className="mt-8 space-y-8">
            <div className="flex gap-4">
                <div className="flex items-center gap-1 [&:not(:last-child)]:border-r pr-5 border-neutral-300">
                    <div className="text-sm text-neutral-800">
                        <LuRuler />
                    </div>
                    <div>
                        <span className="font-semibold">{(pokemon.altura / 10).toFixed(2)}</span>
                        <span className="text-xs text-neutral-400"> m</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="text-sm text-neutral-800">
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
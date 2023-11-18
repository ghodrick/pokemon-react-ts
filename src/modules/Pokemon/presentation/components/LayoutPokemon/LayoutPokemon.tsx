import { TipoPokemon } from "@/models/Pokedex.types";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";


const pokemonContainerClasses = cva(
    [
        "w-full shadow-sm rounded-xl dark:!bg-slate-500/10"
    ],
    {
        variants: {
            type: {
                bug: 'bg-bicho-200',
                dark: 'bg-siniestro-300',
                dragon: 'bg-dragon-200',
                electric: 'bg-electrico-100',
                fairy: 'bg-hada-100',
                fighting: 'bg-lucha-100',
                fire: 'bg-fuego-100',
                flying: 'bg-volador-200',
                ghost: 'bg-fantasma-200',
                grass: 'bg-planta-200',
                ground: 'bg-tierra-100',
                ice: 'bg-hielo-100',
                normal: 'bg-normal-100',
                poison: 'bg-veneno-200',
                psychic: 'bg-psiquico-200',
                rock: 'bg-roca-100',
                steel: 'bg-acero-200',
                water: 'bg-agua-100',
            }
        },
    }
);

interface LayoutPokemonProps {
    pokemonTypes: TipoPokemon[]
    children: ReactNode
}

const LayoutPokemon = ({pokemonTypes, children} : LayoutPokemonProps)  => {


    return (
        <div className={pokemonContainerClasses({type: pokemonTypes[0].id})}>
            {children}
        </div>
    )

}

export default LayoutPokemon;
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TipoPokemon as ITipoPokemon } from '../../models/Pokedex.types';

interface PropsTipoPokemon {
    type: ITipoPokemon;
    showName?: boolean;
    rounded?: string;
    classNames?: {
        image?: string;
        container?: string;
    };
}

const TipoPokemon = ({type, showName = true, rounded = 'full', classNames = {}} : PropsTipoPokemon) => {

    const classesTipoPokemon = clsx(
        'flex items-center gap-1 px-2 py-1 text-xs text-white shadow-xl',
        rounded === 'full' && 'rounded-full',
        rounded === 'none' && 'rounded-none',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-md',
        rounded === 'lg' && 'rounded-lg',
        rounded === 'xl' && 'rounded-xl',
        type.id === 'bug' && 'bg-bicho shadow-bicho-400/60',
        type.id === 'dark' && 'bg-siniestro shadow-siniestro-400/60',
        type.id === 'dragon' && 'bg-dragon shadow-dragon-400/60',
        type.id === 'electric' && 'bg-electrico shadow-electrico-400/60',
        type.id === 'fairy' && 'bg-hada shadow-hada-400/60',
        type.id === 'fighting' && 'bg-lucha shadow-lucha-400/60',
        type.id === 'fire' && 'bg-fuego shadow-fuego-400/60',
        type.id === 'flying' && 'bg-volador shadow-volador-400/60',
        type.id === 'ghost' && 'bg-fantasma shadow-fantasma-400/60',
        type.id === 'grass' && 'bg-planta shadow-planta-400/60',
        type.id === 'ground' && 'bg-tierra shadow-tierra-400/60',
        type.id === 'ice' && 'bg-hielo shadow-hielo-400/60',
        type.id === 'normal' && 'bg-normal shadow-normal-400/60',
        type.id === 'poison' && 'bg-veneno shadow-veneno-400/60',
        type.id === 'psychic' && 'bg-psiquico shadow-psiquico-400/60',
        type.id === 'rock' && 'bg-roca shadow-roca-400/60',
        type.id === 'steel' && 'bg-acero shadow-acero-400/60',
        type.id === 'water' && 'bg-agua shadow-agua-400/60',
        showName ? 'min-w-[95px]' : ''
    )


    return ( 
        <div className={twMerge(classesTipoPokemon, classNames.container)}>
            <div className={twMerge('w-6 h-6 shrink-0', classNames.image)}>
                <img src={type.icono} alt={type.nombre} />
            </div>
            {
                showName
                ?
                (
                    <div className='font-semibold tracking-wide truncate'>
                        {type.nombre}
                    </div>
                )
                : 
                null
            }
            
        </div>
     );
}
 
export default TipoPokemon;
import { TipoPokemon as ITipoPokemon } from '../../models/Pokedex.types';
import clsx from 'clsx';

interface PropsTipoPokemon {
    type: ITipoPokemon;
    showName?: boolean;
    rounded?: string;
    className?: string;
}

const TipoPokemon = ({type, showName = true, rounded = 'full', className = ''} : PropsTipoPokemon) => {

    const classesTipoPokemon = clsx(
        'flex items-center gap-1 px-2 py-1 text-xs text-white shadow-xl',
        rounded === 'full' && 'rounded-full',
        rounded === 'none' && 'rounded-none',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-md',
        rounded === 'lg' && 'rounded-lg',
        rounded === 'xl' && 'rounded-xl',
        type.id === 'bug' && 'bg-bicho shadow-bicho-lighter/50',
        type.id === 'dark' && 'bg-siniestro shadow-siniestro-lighter/50',
        type.id === 'dragon' && 'bg-dragon shadow-dragon-lighter/50',
        type.id === 'electric' && 'bg-electrico shadow-electrico-lighter/50',
        type.id === 'fairy' && 'bg-hada shadow-hada-lighter/50',
        type.id === 'fighting' && 'bg-lucha shadow-lucha-lighter/50',
        type.id === 'fire' && 'bg-fuego shadow-fuego-lighter/50',
        type.id === 'flying' && 'bg-volador shadow-volador-lighter/50',
        type.id === 'ghost' && 'bg-fantasma shadow-fantasma-lighter/50',
        type.id === 'grass' && 'bg-planta shadow-planta-lighter/50',
        type.id === 'ground' && 'bg-tierra shadow-tierra-lighter/50',
        type.id === 'ice' && 'bg-hielo shadow-hielo-lighter/50',
        type.id === 'normal' && 'bg-normal shadow-normal-lighter/50',
        type.id === 'poison' && 'bg-veneno shadow-veneno-lighter/50',
        type.id === 'psychic' && 'bg-psiquico shadow-psiquico-lighter/50',
        type.id === 'rock' && 'bg-roca shadow-roca-lighter/50',
        type.id === 'steel' && 'bg-acero shadow-acero-lighter/50',
        type.id === 'water' && 'bg-agua shadow-agua-lighter/50',
        showName ? 'min-w-[95px]' : '',
        className
    )

    //write a tailwind class to get type.color as shadow bg color
    

    return ( 
        <div className={classesTipoPokemon}>
            <div className='w-6 h-6'>
                <img src={type.icono} alt={type.nombre} />
            </div>
            {
                showName
                ?
                (
                    <div className='font-semibold tracking-wide'>
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
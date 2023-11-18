import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { ImagenPokemonType } from "@/modules/Pokedex/presentation/models/types";
import clsx from "clsx";
import { HiOutlineSparkles } from 'react-icons/hi';

interface ShinyButtonProps {
    tipoImagen: ImagenPokemonType;
    onClick: Function;
}

const ShinyButton = ({tipoImagen, onClick} : ShinyButtonProps) => {


    const classNameButton = clsx(
        'group duration-300 px-4 py-2 rounded-full font-semibold uppercase font-mono text-sm flex items-center gap-2',
        tipoImagen === 'shiny' ? 'bg-amber-400 dark:bg-amber-400 text-orange-50 dark:text-orange-900 shadow-lg shadow-amber-200 dark:shadow-amber-900/50' : 'bg-neutral-700 dark:bg-slate-700 text-neutral-100 dark:hover:bg-amber-400 dark:hover:text-orange-900 hover:text-orange-50 hover:bg-amber-400'
    );

    return (
        <Tooltip title={tipoImagen === 'normal' ? '¡Mostrar pokemons shiny!' : 'Mostrar pokemon normal'} triggerAsChild>
            <button type="button" className={classNameButton} onClick={() => onClick()}>
                <HiOutlineSparkles className="shrink-0 text-xl" />
            </button>
        </Tooltip>
    );

}

export default ShinyButton;
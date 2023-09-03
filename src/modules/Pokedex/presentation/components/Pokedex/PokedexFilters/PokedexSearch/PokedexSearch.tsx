import { useFormContext } from "react-hook-form";
import { TbPokeball } from "react-icons/tb";


const PokedexSearch = () => {
    
    const {register} = useFormContext();

    return (
        <div>
            <div className="relative w-full rounded-xl bg-white shadow-md shadow-slate-200">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Buscar pokémon"
                    className="peer/buscador w-full bg-transparent py-6 pl-8 pr-[74px] outline-none"
                    {...register('search')}
                />
                <button
                    type="button"
                    className="visible absolute right-6 top-5 flex items-center justify-center rounded-md bg-red-500 px-1 py-1 text-2xl text-white shadow-lg shadow-red-500 transition-all active:shadow-none peer-placeholder-shown/buscador:invisible"
                >
                    <TbPokeball />
                </button>
            </div>
        </div>
    );
};

export default PokedexSearch;

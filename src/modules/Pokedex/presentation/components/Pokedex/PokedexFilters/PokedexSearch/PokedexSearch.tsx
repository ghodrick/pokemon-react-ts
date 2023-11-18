import { useFormContext } from "react-hook-form";


const PokedexSearch = () => {
    
    const {register} = useFormContext();

    return (
        <div>
            <div className="relative w-full rounded-xl bg-container dark:bg-slate-800 shadow-md shadow-neutral-100 dark:shadow-slate-900/50">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Buscar pokémon"
                    className="peer/buscador w-full bg-transparent py-5 pl-8 pr-[74px] outline-none placeholder:text-neutral-400 dark:placeholder:text-slate-400"
                    {...register('search')}
                />
            </div>
        </div>
    );
};

export default PokedexSearch;

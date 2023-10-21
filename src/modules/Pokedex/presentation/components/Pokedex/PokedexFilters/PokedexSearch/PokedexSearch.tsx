import { useFormContext } from "react-hook-form";


const PokedexSearch = () => {
    
    const {register} = useFormContext();

    return (
        <div>
            <div className="relative w-full rounded-xl bg-white shadow-md shadow-neutral-200">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Buscar pokémon"
                    className="peer/buscador w-full bg-transparent py-5 pl-8 pr-[74px] outline-none placeholder:text-neutral-400"
                    {...register('search')}
                />
            </div>
        </div>
    );
};

export default PokedexSearch;

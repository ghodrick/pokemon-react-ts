import { capitalize } from "@/helpers/string.helper";
import clsx from "clsx";
import { useId } from "react";
import { useController } from "react-hook-form";

interface RegionFilterProps {
    regiones: string[];
}

const RegionFilter = ({regiones} : RegionFilterProps) => {


    return (
        <>
            {
                regiones.map(region => (

                    <RadioRegionButton
                        key={`region_${region}`}
                        name={'region'}
                        value={region}
                    />

                ))
            }
        </>
    )
}

interface RadioRegionButtonProps {
    name: string;
    value: string;
}

const RadioRegionButton = ({name, value} : RadioRegionButtonProps) => {

    const idRegion = useId();

    const { field } = useController({name});

    let isChecked = field.value === value;    
      
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        let isChecked = e.target.checked;

        if (isChecked)
        {
            field.onChange(value);
        }

    }

    const classnameButton = clsx(
        `py-1.5 px-2 rounded-md border-2 text-center cursor-pointer tracking-wider text-sm font-semibold transition-all duration-200`,
        isChecked ? `shadow-lg sm:shadow-xl border-transparent bg-primary-400 dark:bg-primary-300 shadow-primary-200 text-primary-foreground dark:text-slate-900` : 'bg-container dark:bg-slate-700 hover:bg-primary-400 dark:hover:bg-primary-300 dark:hover:border-primary-300 hover:border-transparent hover:text-primary-foreground dark:hover:text-slate-900 dark:border-slate-700'
    )

    return (
        <>
            <input 
                hidden
                id={idRegion}
                name={name}
                type="radio"
                value={value} 
                onChange={onChange}
                checked={isChecked}
            />
            <label htmlFor={idRegion} className="snap-center">
                <div className={classnameButton}>
                    {capitalize(value)}
                </div>
            </label>
        </>
    )

}

export default RegionFilter;
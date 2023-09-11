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
        `py-1.5 px-2 w-full rounded-md border-2 text-center cursor-pointer tracking-wider text-sm font-semibold transition-all duration-200`,
        isChecked ? `shadow-xl border-transparent bg-primary-400 shadow-primary-200 text-primary-foreground` : 'bg-container text-neutral-900 hover:bg-primary-400 hover:border-transparent hover:text-primary-foreground'
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
            <label htmlFor={idRegion}>
                <div className={classnameButton}>
                    {capitalize(value)}
                </div>
            </label>
        </>
    )

}

export default RegionFilter;
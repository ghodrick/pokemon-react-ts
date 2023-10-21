import TipoPokemon from "@/components/pokemon/TipoPokemon";
import { TipoPokemon as TipoPokemonType } from "@/models/Pokedex.types";
import clsx from "clsx";
import { useController } from "react-hook-form";

interface CheckboxTipoPokemonProps {
    name: string;
    data: TipoPokemonType;
    value: string;
}

const CheckboxTipoPokemon = ({name, data, value} : CheckboxTipoPokemonProps) => {

    const { field } = useController({name});

    let isChecked = field.value.includes(value);    
      

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        let isChecked = e.target.checked;

        const newValues = isChecked ? [...field.value, value] : field.value.filter((valor: any) => valor !== value);

        field.onChange(newValues);

    }

    const classNames = {
        container: clsx(
            'cursor-pointer gap-3 transition-all transition-250 ', 
            !isChecked ? 'bg-container border border-border text-container-foreground/70 shadow-none hover:bg-primary-50 hover:text-primary-800' : 'border border-transparent'
        )
    }

    return (
        <>
            <input 
                id={`${name}_${value}`}
                hidden
                type="checkbox"
                value={value} 
                onChange={onChange}
                checked={isChecked}
                />
            <label htmlFor={`${name}_${value}`} className="snap-center">
                <TipoPokemon type={data} classNames={classNames} />
            </label>
        </>
    )

}

export default CheckboxTipoPokemon;
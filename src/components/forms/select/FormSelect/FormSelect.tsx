import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import FormLabel from "./FormLabel";
import FormSelectedOption from "./FormSelectedOption";
import FormSelectOptions from "./FormSelectOptions";

interface FormSelectProps {
    name: string;
    options: object[];
    idKey?: string;
    textKey?: string;
    label?: string;
    multiple?: boolean,
    disabled?: boolean,
    allowClear?: boolean;
    maxSelectedShown?: number;
    defaultValue?: any;
    value?: any;
    groupBy?: string | null;
    onChange?: (value: any) => void;
}

/*
    TODO:
        -Añadir buscador
        -Añadir imagenes a las opciones
        -Soportar colores tailwind
        -Soportar variantes y tamaños
        -Revisar la forma correcta de setear el defaultValue, value, etc

*/

const FormSelect = (props : FormSelectProps) => {
    
    const {
        options, 
        idKey = "id", 
        textKey = "value", 
        label = "", 
        multiple = false, 
        maxSelectedShown = 3, 
        disabled = false, 
        allowClear = true, 
        groupBy = null,
        ...otherProps
    } = props;

    return ( 
        <Listbox defaultValue={multiple ? [] : null} multiple={multiple} disabled={disabled} {...otherProps}>
            <FormLabel label={label} />
            <div className="relative mt-2">
                <Listbox.Button className="relative group disabled:opacity-80 disabled:cursor-not-allowed w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                {
                    ({ value }) => <FormSelectedOption 
                                        idKey={idKey} 
                                        textKey={textKey} 
                                        options={options} 
                                        value={value} 
                                        allowClear={allowClear}
                                        maxSelectedShown={maxSelectedShown}  
                                        multiple={multiple}
                                    />
                }
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div>
                        <FormSelectOptions 
                            options={options} 
                            idKey={idKey} 
                            textKey={textKey}
                            groupBy={groupBy}

                        />
                    </div>
                </Transition>
            </div>
        </Listbox>
     );
}
 
export default FormSelect;
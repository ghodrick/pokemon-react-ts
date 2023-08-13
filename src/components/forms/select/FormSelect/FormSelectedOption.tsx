import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { isArray } from "lodash";
import { LuChevronDown, LuX } from "react-icons/lu";

interface FormSelectedOptionProps {
    options?: object[];
    value?: any;
    idKey: string;
    textKey: string;
    placeholder?: string;
    maxSelectedShown?: number;
    allowClear?: boolean;
    multiple?: boolean;
    
}

const FormSelectedOption = (props : FormSelectedOptionProps) => {

    const {
        idKey = "id", 
        textKey = "value", 
        options = [], 
        value = null, 
        maxSelectedShown = 3, 
        placeholder = "Selecciona una opción",
        allowClear = true,
        multiple = false
    } = props;

    const classNameClear = clsx(
        'h-3 w-3 p-[2px] text-white bg-gray-300 hover:bg-gray-500 rounded-full transition-all duration-300 opacity-0 scale-0 cursor-pointer',
        allowClear && value && 'group-hover:opacity-100 group-hover:scale-100'
    )


    let valueArray = isArray(value) ? value : [value];

    let selectedOption = options.filter((option : any) => valueArray.includes(option[idKey]));

    let textToShow = placeholder;

    let selectedOptionsLength = selectedOption.length;

    if (selectedOptionsLength > 0)
    {

        if (selectedOptionsLength > maxSelectedShown)
        {
            textToShow = selectedOption.slice(0, maxSelectedShown).map((option: any) => option[textKey]).join(", ");
        }
        else 
        {
            textToShow = selectedOption.map((option: any) => option[textKey]).join(", ");
        }

        
    }

    
    return (
            <>
                <span className="flex items-center gap-2">
                    {/*<img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />*/}
                    <span className="ml-3 block truncate group-disabled:text-gray-400">
                        {textToShow}
                    </span>
                    {
                        selectedOptionsLength > maxSelectedShown
                        ?
                            <span className="bg-slate-200 rounded-full font-mono min-w-5 text-xs flex justify-center items-center h-auto text-slate-500 px-2 shadow-sm font-semibold">
                                +{selectedOptionsLength - maxSelectedShown}
                            </span>
                        : null
                    }
                </span>
                {
                    !multiple 
                    ?
                    (
                        <Listbox.Option 
                            value={null} 
                            className={"absolute inset-y-0 flex items-center pr-2 right-6 ml-3"} 
                            onClick={(e) => e.stopPropagation()}
                        >
                            <LuX className={classNameClear} />
                        </Listbox.Option>
                    )
                    : null
                }
                

                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <LuChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </span>
            </>            
    )

}

export default FormSelectedOption;
import { Combobox } from "@headlessui/react";
import clsx from "clsx";
import { isArray } from "lodash";
import { LuChevronDown, LuX } from "react-icons/lu";
import { useSelect } from "./context/useSelect";
import { cva } from "class-variance-authority";

const arrowDown = cva(
    [
        "pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center"
    ],
    {
        variants: {
            rounded: {
                "none": "pr-2",
                "sm":   "pr-2",
                "md":   "pr-2",
                "lg":   "pr-2",
                "full": "pr-4"
            }
        },
        defaultVariants: {
            rounded: "md",
        },
    }
);

const clearValue = cva(
    [
        "absolute inset-y-0 flex items-center pr-2 ml-3"
    ],
    {
        variants: {
            rounded: {
                "none": "right-6",
                "sm":   "right-6",
                "md":   "right-6",
                "lg":   "right-6",
                "full": "right-8"
            }
        },
        defaultVariants: {
            rounded: "md",
        },
    }
);


interface SelectValueTextProps {
    image?:string;
    children: JSX.Element | JSX.Element[] | string;
}

const SelectValueText = ({image, children} : SelectValueTextProps) => {


    return (
        <span className="flex gap-2 items-center">
            {
                image 
                ?
                (
                    <span>
                        <img src={image} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                    </span>
                )
                : null
            }
            <span>
                {children}
            </span>
        </span>
    )

}

const SelectValue = ({value} : {value: any}) => {


    const {
        allowClear,
        options,
        maxSelectedShown = 3,
        idKey = 'id',
        textKey = "value",
        imageKey = "image",
        multiple,
        placeholder = 'Selecciona una opción',
        rounded
    } = useSelect();


    const classNameClear = clsx(
        'h-3 w-3 p-[2px] text-white bg-gray-300 hover:bg-gray-500 rounded-full transition-all duration-300 opacity-0 scale-0 cursor-pointer',
        allowClear && value && 'group-hover:opacity-100 group-hover:scale-100'
    )

    


    let valueArray = isArray(value) ? value : [value];

    let selectedOption = options.filter((option : any) => valueArray.includes(option[idKey]));

    let textToShow : JSX.Element | JSX.Element[] | string = placeholder;

    let selectedOptionsLength = selectedOption.length;

    if (selectedOptionsLength > 0)
    {

        if (selectedOptionsLength > maxSelectedShown)
        {
            textToShow = selectedOption
                        .slice(0, maxSelectedShown)
                        .map((option: any, index) => 
                            <SelectValueText key={`value_${index}`} image={option[imageKey]}>{option[textKey]}</SelectValueText>);
        }
        else 
        {
            textToShow = selectedOption.map((option: any, index) => <SelectValueText key={`value_${index}`} image={option[imageKey]}>{option[textKey]}</SelectValueText>);
        }

        
    }

    
    return (
            <>
                <span className="flex items-center gap-2">
                    <span className="flex gap-2 ml-1 truncate group-disabled:text-gray-400">
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
                        <Combobox.Option 
                            value={null} 
                            className={clearValue({rounded})} 
                            onClick={(e) => e.stopPropagation()}
                        >
                            <LuX className={classNameClear} />
                        </Combobox.Option>
                    )
                    : null
                }
                

                <span className={arrowDown({rounded})}>
                    <LuChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </span>
            </>            
    )

}

export default SelectValue;
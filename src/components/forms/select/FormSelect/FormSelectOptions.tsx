import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { MdCheck } from "react-icons/md";
import React from 'react';

interface FormSelectOptionsProps {
    options?: object[];
    idKey?: string;
    textKey?: string;
    disabled?: boolean;
    groupBy?: string | null;
}

const FormSelectOptions = (props : FormSelectOptionsProps) => {

    const {
        options = [], 
        idKey = "id", 
        textKey = "value",
        groupBy = null
    } = props;

    const printOptions = [...options];
    
    const groupedOptions : any = {};

    printOptions.forEach((option : any) => {

        const group = option[groupBy + ''];

        if (!groupedOptions[group]) 
        {
            groupedOptions[group] = []
        }

        groupedOptions[group].push(option)
        
    });

    return (
        <Listbox.Options className="divide-y absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {
            Object.entries(groupedOptions).map(([group, groupOptions] : any) => (
                <React.Fragment key={`group_${group}`}>
                {
                    group !== 'undefined'
                    ?
                    (
                        <Listbox.Option className="relative cursor-default !border-0 text-xs mt-2 text-slate-500 select-none py-2 pl-3 pr-9" value={null} disabled={true}>
                            {group}
                        </Listbox.Option>
                    )
                    : null
                }
                {
                    groupOptions.map((option : any) => (

                        <SelectOption 
                            key={`option_${option[idKey]}`}
                            value={option[idKey]}
                            disabled={option?.disabled}
                        >
                            {option[textKey]}
                        </SelectOption>

                    ))
                }   
                </React.Fragment>
            ))
        }
        </Listbox.Options>
    )

};





interface SelectOptionProps {
    value: any,
    disabled?: boolean,
    children: JSX.Element | JSX.Element[] | string

}

const SelectOption = ({value, disabled = false, children} : SelectOptionProps) => {

    return (
        <Listbox.Option
            className={({ active }) => 
                    clsx(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9 focus-visible:outline-none'
                    )
            }
            value={value}
            disabled={disabled}
        >
            { ({ active, selected, disabled }) => (
                <>
                    <div className="flex items-center">
                        {/*<img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />*/}
                        <span className={clsx(
                            'ml-3 block truncate',
                            selected ? 'font-semibold' : 'font-normal',
                            disabled && 'opacity-60'
                            )}
                        >
                            {children}
                        </span>
                    </div>

                    {
                        selected && value !== null ? 
                        (
                            <span className={clsx(
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                active ? 'text-white' : 'text-indigo-600'
                                )}
                            >
                                <MdCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) 
                        : 
                        null
                    }
                </>
            )}
            
        </Listbox.Option>
    )
}

export default FormSelectOptions;
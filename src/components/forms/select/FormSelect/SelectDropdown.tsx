import { useSearch } from "@/hooks/useSearch";
import { Combobox } from "@headlessui/react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { isEmpty } from "lodash";
import React, { memo, useMemo } from 'react';
import { MdCheck } from "react-icons/md";
import { useSelect } from "./context/useSelect";

const optionClasses = cva(
    [
        "relative cursor-pointer rounded-md select-none py-2 pl-3 pr-9 outline-none focus-visible:outline-none",
    ],
    {
        variants: {
            color: {
                primary: '',
                secondary: '',
                gray: ''
            },
            active: {
                true: '',
                false: 'text-neutral-900'
            }
        },
        compoundVariants: [
            {
                color: 'primary',
                active: true,
                className: 'bg-primary text-primary-foreground'
            },
            {
                color: 'secondary',
                active: true,
                className: 'bg-secondary text-secondary-foreground'
            },
            {
                color: 'gray',
                active: true,
                className: 'bg-neutral-900 text-neutral-100'
            }
        ]
    }
);

const checkedClasses = cva(
    [
        "absolute inset-y-0 right-0 flex items-center pr-4",
    ],
    {
        variants: {
            color: {
                primary: '',
                secondary: '',
                gray: ''
            },
            active: {
                true: '',
                false: ''
            }
        },
        compoundVariants: [
            {
                color: 'primary',
                active: true,
                className: 'text-primary-foreground'
            },
            {
                color: 'primary',
                active: false,
                className: 'text-primary'
            },
            {
                color: 'secondary',
                active: true,
                className: 'text-secondary-foreground'
            },
            {
                color: 'secondary',
                active: false,
                className: 'text-secondary'
            },
            {
                color: 'gray',
                active: true,
                className: 'text-neutral-100'
            }
        ]
    }
);

const SelectDropdown = () => {

    const {
        options,
        idKey = "id",
        textKey = "value",
        imageKey = "image",
        groupBy,
        allowSearch
    } = useSelect();

    const {setSearch, optionsFiltered} = useSearch(options, textKey);

    const groupedOptions = useMemo(() => {

        let devolver : any = {};

        optionsFiltered.forEach((option : any) => {

            const group = option[groupBy + ''];
    
            if (!devolver[group]) 
            {
                devolver[group] = []
            }
    
            devolver[group].push(option)
            
        });

        return devolver;

    }, [groupBy, optionsFiltered]);

    

    return (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white overflow-hidden text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {
                allowSearch 
                ? 
                (
                    <div className="">
                        <Combobox.Input
                            className="w-full border-b bg-gradient-to-b outline-none py-1 px-6 placeholder:italic placeholder:text-xs" 
                            placeholder="Buscar..."
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                ) 
                : null
            }
            <div className="max-h-56 overflow-auto">
                <SelectOptionsList
                    groupedOptions={groupedOptions}
                    idKey={idKey}
                    textKey={textKey}
                    imageKey={imageKey}
                />
            </div>
            
            
        </div>
    )

};

interface SelectOptionsListProps {
    groupedOptions: any;
    idKey: string;
    textKey: string;
    imageKey: string;
}

const SelectOptionsList = memo(({groupedOptions, idKey, textKey, imageKey} : SelectOptionsListProps) => {


    return (
        
        !isEmpty(groupedOptions)
        ?
        (
            <Combobox.Options className="focus:outline-none px-2 pb-3">
            {
                Object.entries(groupedOptions).map(([group, groupOptions] : any) => (
                    <React.Fragment key={`group_${group}`}>
                    {
                        group !== 'undefined'
                        ?
                        (
                            <Combobox.Option className="relative cursor-default !border-0 text-xs mt-2 text-slate-500 select-none py-2 pl-3 pr-9" value={null} disabled={true}>
                                {group}
                            </Combobox.Option>
                        )
                        : null
                    }
                    {
                        groupOptions.map((option : any, index: number) => (

                            <SelectOption
                                key={`option_${option[idKey]}_${index}`}
                                value={option[idKey]}
                                image={option[imageKey]}
                                disabled={option?.disabled}
                            >
                                {option[textKey]}
                            </SelectOption>

                        ))
                    }   
                    </React.Fragment>
                ))
            }
            </Combobox.Options>
        )
        :
        (
            <div className="text-xs px-6 py-2 text-neutral-400 text-center">
                No hay resultados
            </div>
        )
        
    )

})


interface SelectOptionProps {
    value: any;
    image?: string;
    disabled?: boolean;
    children: JSX.Element | JSX.Element[] | string;

}

const SelectOption = ({value, image, disabled = false, children} : SelectOptionProps) => {

    const {color} = useSelect();

    return (
        <Combobox.Option
            className={({ active }) => optionClasses({active, color})}
            value={value}
            disabled={disabled}
        >
            { ({ active, selected, disabled }) => (
                <>
                    <div className="flex items-center">
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
                            <span className={checkedClasses({active, color})}
                            >
                                <MdCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) 
                        : 
                        null
                    }
                </>
            )}
            
        </Combobox.Option>
    )
}

export default SelectDropdown;
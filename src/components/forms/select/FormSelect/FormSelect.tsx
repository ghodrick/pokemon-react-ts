import { Combobox, Transition } from "@headlessui/react";
import { cva } from "class-variance-authority";
import { Fragment } from "react";
import { FieldColors, FieldRound, FieldShadow, FieldSizes, FieldVariants } from "../../forms.props";
import FormLabel from "./FormLabel";
import SelectDropdown from "./SelectDropdown";
import SelectValue from "./SelectValue";
import SelectContext from "./context/useSelect";

const comboboxButton = cva(
    [
        "relative group w-full cursor-pointer text-left text-slate-700 shadow-neutral/50 border-border transtion-all duration-200",
        "disabled:opacity-80 disabled:cursor-not-allowed",
        "focus:outline-none focus:ring-2",
        "sm:leading-6"
    ],
    {
        variants: {
            size: {
                "sm": "py-1 pl-1.5 pr-10 text-xs",
                "md": "py-2 pl-2.5 pr-10 text-sm",
                "lg": "py-3 pl-3.5 pr-10 text-md"
            },
            rounded: {
                "none": "rounded-none",
                "sm": "rounded-sm",
                "md": "rounded-md",
                "lg": "rounded-lg",
                "full": "rounded-full"
            },
            shadow: {
                "none": "shadow-none",
                "sm": "shadow-sm",
                "md": "shadow-md",
                "lg": "shadow-lg",
                "xl": "shadow-xl",
                "2xl": "shadow-2xl"
            },
            variant: {
                "surface": "border bg-container",
                "ghost": "",
                "soft": ""
            },
            color: {
                "primary": "focus:ring-primary",
                "secondary": "focus:ring-secondary",
                "gray": "focus:ring-neutral"
            }
        },
        compoundVariants: [
            {
                variant: "ghost",
                color: "primary",
                className: "hover:bg-primary-100"
            },
            {
                variant: "ghost",
                color: "secondary",
                className: "hover:bg-secondary-100"
            },
            {
                variant: "ghost",
                color: "gray",
                className: "hover:bg-neutral-50"
            },
            {
                variant: "soft",
                color: "primary",
                className: "bg-primary-100"
            },
            {
                variant: "soft",
                color: "secondary",
                className: "bg-secondary-100"
            },
            {
                variant: "soft",
                color: "gray",
                className: "bg-neutral-50"
            },
          ],
        defaultVariants: {
            size: "md",
            rounded: "md",
            shadow: 'none',
            variant: 'surface',
            color: 'primary'
        },
    }
);

export interface FormSelectProps {
    name: string;
    options: object[];
    idKey?: string;
    textKey?: string;
    imageKey?: string;
    label?: string;
    multiple?: boolean;
    disabled?: boolean;
    allowClear?: boolean;
    maxSelectedShown?: number;
    defaultValue?: any;
    value?: any;
    groupBy?: string | null;
    allowSearch?: boolean;
    placeholder?: string;
    size?: FieldSizes;
    rounded?: FieldRound;
    shadow?: FieldShadow;
    variant?: FieldVariants;
    color?: FieldColors;
    className?: string;
    onChange?: (value: any) => void;
}

/*
    TODO:
        -Revisar la forma correcta de setear el defaultValue, value, etc

*/



const FormSelect = (props : FormSelectProps) => {
    
    const {
        options, 
        label = "", 
        multiple = false,
        disabled = false,  
        maxSelectedShown = 3,
        placeholder = 'Selecciona una opción',
        groupBy = null,
        idKey = 'id',
        textKey = 'value',
        imageKey = 'image',
        allowClear = true,
        allowSearch = true,
        size = "md",
        rounded = "md",
        shadow = "none",
        variant = "surface",
        color = "primary",
        className,
        ...otherProps
    } = props;

    const contextProps : FormSelectProps = {
        options,
        label,
        multiple,
        disabled,
        maxSelectedShown,
        placeholder,
        groupBy,
        idKey,
        textKey,
        imageKey,
        allowClear,
        allowSearch,
        size,
        rounded,
        shadow,
        variant,
        color,
        ...otherProps
    }
    
    /*
        Parece haber algún tipo de error con el tipado de la propiedad multiple en el Combobox, por lo que solo se pasará si está en true
    */
    const propsOpcionales : any = {}

    if (multiple)
    {
        propsOpcionales.multiple = true;
    }

    if (props.value)
    {
        propsOpcionales.value = props.value;
    }
    else 
    {
        propsOpcionales.defaultValue = multiple ? [] : null;
    }
    
    
    return ( 
        <SelectContext value={contextProps}>
            <Combobox {...propsOpcionales} disabled={disabled} {...otherProps}>
                <FormLabel label={label} />
                <div className="relative mt-2">
                    <Combobox.Button className={comboboxButton({size, rounded, shadow, variant, color, className})}>
                    {
                        ({ value }) => <SelectValue value={value} />
                    }
                    </Combobox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div>
                            <SelectDropdown />
                        </div>
                    </Transition>
                </div>
            </Combobox>
        </SelectContext>
     );
}
 



export default FormSelect;
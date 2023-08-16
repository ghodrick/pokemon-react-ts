import { createContext, useContext } from "react";
import { FormSelectProps } from "../FormSelect";


interface SelectContextProps {
    value: FormSelectProps,
    children: JSX.Element | JSX.Element[] | string;
}

const SelectContextValue = createContext<FormSelectProps | undefined>(undefined);

const SelectContext = ({value, children} : SelectContextProps) => {


    return (
        <SelectContextValue.Provider value={value}>
            {children}
        </SelectContextValue.Provider>
    )
}

export const useSelect = () => {

    const context = useContext(SelectContextValue);

    if (!context)
    {
        throw new Error("El contexto de useSelect debe ser definido");
    }

    return context;
}

export default SelectContext;
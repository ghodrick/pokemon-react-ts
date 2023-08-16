import { Combobox } from "@headlessui/react";

const FormLabel = ({label = ""}) => {
    return (  
        label 
        ?
        (
            <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </Combobox.Label>
        )
        :
        null
    );
}
 
export default FormLabel;
import { Listbox } from "@headlessui/react";

const FormLabel = ({label = ""}) => {
    return (  
        label 
        ?
        (
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </Listbox.Label>
        )
        :
        null
    );
}
 
export default FormLabel;
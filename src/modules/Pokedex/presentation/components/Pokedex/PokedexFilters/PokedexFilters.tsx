import PokedexSearch from "./PokedexSearch/PokedexSearch";
import PokemonFilter from "./PokemonFilter/PokemonFilter";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import AutoSubmit from "@/components/forms/RHF/AutoSubmit";
import { useCallback, useRef } from "react";
import { FormSearchValues } from "../../../models/types";

interface PokedexFiltersProps {
    onSubmit: Function;
    filtros: FormSearchValues;
}

const PokedexFilters = ({filtros, onSubmit} : PokedexFiltersProps) => {

    const methods = useForm<FormSearchValues>({
        defaultValues: filtros
    });

    const formRef = useRef(null);

    const handleFormSubmit: SubmitHandler<FormSearchValues> = useCallback((values) => {

        let enviar : Partial<FormSearchValues> = {};

        if (values.search !== '' && values.search !== null && values.search !== undefined)
        {
            enviar.search = values.search;
        }

        if (values?.types.length > 0)
        {
            enviar.types = values.types;
        }

        onSubmit(enviar);

    }, [onSubmit]);

    return (
        <div className="flex flex-col">
            <FormProvider {...methods}>
                <form ref={formRef} onSubmit={methods.handleSubmit(handleFormSubmit)}>
                    <PokedexSearch  />
                    <PokemonFilter />
                    <AutoSubmit formRef={formRef} />
                </form>
            </FormProvider>
        </div>
    );
};

export default PokedexFilters;

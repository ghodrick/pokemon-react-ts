import { normalizeString } from "@/helpers/string.helper";
import { useDeferredValue, useMemo, useState } from "react";

type OptionsType = { [key: string]: any }[];

export const useSearch = (options : OptionsType, searchKey: string) => {

    const [search, setSearch] = useState('');
    
    const deferredSearch = useDeferredValue(search);

    const optionsFiltered = useMemo(() => {

        const normalizedSearch = normalizeString(deferredSearch);
    
        return options.filter((option) => normalizeString(option[searchKey]).includes(normalizedSearch));

      }, [options, deferredSearch, searchKey]);


    return {
        search,
        deferredSearch,
        setSearch,
        optionsFiltered
    }

}
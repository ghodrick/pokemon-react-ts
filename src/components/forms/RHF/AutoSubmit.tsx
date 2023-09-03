import {  useEffect } from "react";
import { useWatch } from "react-hook-form";

interface AutoSubmitProps {
    formRef: React.MutableRefObject<HTMLFormElement | null>
}

const AutoSubmit = ({formRef} : AutoSubmitProps) => {

    const values = useWatch();

    useEffect(() => {

        if (formRef?.current)
        {
            formRef.current.requestSubmit();
        }

    }, [values, formRef])

    return null;
}

export default AutoSubmit;
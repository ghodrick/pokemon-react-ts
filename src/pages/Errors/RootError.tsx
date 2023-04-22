import { useRouteError } from "react-router-dom";

//TODO: Estilizar página de error

export default function RootError() {

    const error = useRouteError() as any;

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

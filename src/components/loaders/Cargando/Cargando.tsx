import DotLoader from "../../spinners/DotLoader/DotLoader";

interface PropsCargando {
    active?: boolean | string;
    children: React.ReactNode;
}

const Cargando = ({active = false, children} : PropsCargando) => {

    active = active === 'loading' ? true : active;

    return (  
        <>
            {
                ['loading', true].includes(active) ?
                    <div className="w-full flex justify-center items-center">
                        <DotLoader />
                    </div>
                :
                children
            }
        </>
        
    );
}
 
export default Cargando;
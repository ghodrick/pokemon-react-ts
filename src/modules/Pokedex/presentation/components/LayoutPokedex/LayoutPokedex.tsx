import { ReactNode } from "react";

interface LayoutPokedexProps {
    children: ReactNode;
}
const LayoutPokedex = ({children} : LayoutPokedexProps) => {
    return (  
        <div className="grid sm:grid grid-cols-12 sm:gap-8 px-8">
            {children}
        </div>
    );
}
 
export default LayoutPokedex;
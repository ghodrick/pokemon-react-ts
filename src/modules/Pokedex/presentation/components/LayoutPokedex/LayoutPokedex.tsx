import { ReactChildren } from "@/models/React.types";


const LayoutPokedex: ReactChildren = ({children}) => {
    return (  
        <div className="grid grid-cols-12 gap-8 px-8">
            {children}
        </div>
    );
}
 
export default LayoutPokedex;
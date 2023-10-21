import { twMerge } from "tailwind-merge";
import { menu } from "../../../config/menu";
import Menu from "./Menu";

const NavBar = ({className = ''}) => {
    return ( 
        <nav className={twMerge(`${className} text-sm`)}>
            <Menu items={menu} />
        </nav>
     );
}
 
export default NavBar;
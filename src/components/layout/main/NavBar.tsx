import { menu } from "../../../config/menu";
import Menu from "./Menu";

const NavBar = () => {
    return ( 
        <nav>
            <Menu items={menu} />
        </nav>
     );
}
 
export default NavBar;
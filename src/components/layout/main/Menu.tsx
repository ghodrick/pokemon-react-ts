import { MenuItem } from "../../../models/Menu.types";
import MenuOption from "./MenuOption";

interface MenuProps {
    items: MenuItem[]
}

const Menu = ({items} : MenuProps) => {
    return ( 
        <ul className="flex">
        {
            items.map((item, index) => <MenuOption key={`menuOption_${index}`} data={item} />)
        }
        </ul>
     );
}
 
export default Menu;


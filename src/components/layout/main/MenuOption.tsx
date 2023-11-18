import { Link } from "react-router-dom";
import { MenuItem } from "../../../models/Menu.types";

interface MenuOptionProps {
    data: MenuItem
}

const MenuOption = ({data} : MenuOptionProps) => {

    const Icon = data.icon;

    return ( 
        <li className="relative py-2 px-4 text-neutral-800 dark:text-neutral-200 hover:text-primary hover:dark:text-primary-200 transition-all duration-500 group">
            <Link to={data.path} className="flex items-center gap-2 ">
                <span>
                    <Icon className="text-xl" />
                </span>
                <span className="tracking-wide font-semibold">
                    {data.name}
                </span>
                
            </Link>
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary dark:bg-primary-200 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
        </li>
     );
}
 
export default MenuOption;
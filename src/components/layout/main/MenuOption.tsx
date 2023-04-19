import { MenuItem } from "../../../models/Menu.types";

interface MenuOptionProps {
    data: MenuItem
}

const MenuOption = ({data} : MenuOptionProps) => {

    console.log(data)

    const Icon = data.icon;

    return ( 
        <li className="relative py-6 px-4 text-slate-500 group">
            <a href="/" className="flex items-center gap-2 ">
                <span>
                    <Icon className="text-3xl" />
                </span>
                <span className="tracking-wide font-semibold">
                    {data.name}
                </span>
                
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-600 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
        </li>
     );
}
 
export default MenuOption;
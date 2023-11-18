import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import DarkModeActions from "./DarkModeActions";
import Logo from "./Logo";
import NavBar from "./NavBar";


interface Header2Props {
    className: string;
}

const Header2 = ({className = ''} : Header2Props) => {

    return (
        <header className={twMerge(`flex gap-2 px-8 items-center py-4 bg-container dark:bg-slate-800 rounded-b-xl shadow-sm dark:shadow-slate-900 ${className}`)}>
            <div>
                <Link className="inline-block" to={'/'} >
                    <Logo className="w-[200px] md:w-[200px] px-4 transition-all duration-200" />
                </Link>
            </div>
            <NavBar className='flex-1' />
            <div className="">
                <DarkModeActions />
            </div>
        </header>
    )

}

export default Header2;
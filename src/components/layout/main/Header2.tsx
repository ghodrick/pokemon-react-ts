import { PiSunDimBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import NavBar from "./NavBar";


interface Header2Props {
    className: string;
}

const Header2 = ({className = ''} : Header2Props) => {

    return (
        <header className={twMerge(`flex gap-2 px-8 items-center py-4 bg-white rounded-b-xl shadow-sm ${className}`)}>
            <div>
                <Link className="inline-block" to={'/'} >
                    <Logo className="w-[200px] md:w-[200px] px-4 transition-all duration-200" />
                </Link>
            </div>
            <NavBar className='flex-1' />
            <div className="text-2xl text-primary">
                {/* <DarkModeActions /> */}
                <PiSunDimBold />
            </div>
        </header>
    )

}

export default Header2;
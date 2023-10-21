import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";


interface Header2Props {
    className: string;
}

const Header2 = ({className = ''} : Header2Props) => {

    return (
        <header className={twMerge(`flex flex-col py-3 ${className}`)}>
            <div>
                <Link to={'/'} >
                    <Logo className="w-[200px] md:w-[200px] px-4 transition-all duration-200" />
                </Link>
            </div>
        </header>
    )

}

export default Header2;
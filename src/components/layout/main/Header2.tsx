import { twMerge } from "tailwind-merge";
import Logo from "./Logo";


interface Header2Props {
    className: string;
}

const Header2 = ({className = ''} : Header2Props) => {

    return (
        <div className={twMerge(`flex flex-col items-center ${className}`)}>
            <div>
                <Logo className="w-[300px] pt-8 md:w-[500px] px-4 transition-all duration-200" />
            </div>
        </div>
    )

}

export default Header2;
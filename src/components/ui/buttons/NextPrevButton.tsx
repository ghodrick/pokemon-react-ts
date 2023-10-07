import clsx from "clsx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface NextPrevButtonProps {
    href: string;
    orientation?: 'left' | 'right';
    renderPrev?: Function;
    className?: string;
}

const NextPrevButton = ({href, orientation = 'right', renderPrev = undefined, className = undefined} : NextPrevButtonProps) => {

    let Icon = orientation === 'right' ? MdChevronRight : MdChevronLeft;

    let cnRenderContainer = clsx(
        '',
        orientation === 'right' ? 'order-0 text-right' : 'order-1 text-left'
    )

    return (
        <Link to={href}>
            <div className={twMerge("flex items-center transition-all duration-200 px-4 rounded-lg hover:bg-container/20", className)}>
                {
                    typeof renderPrev === 'function' && (
                        <div className={cnRenderContainer}>
                            {renderPrev()}
                        </div>
                    )
                }
                <div className="text-5xl">
                    <Icon />
                </div>
            </div>
        </Link>
    )

}

export default NextPrevButton;
interface PropsSpinner {
    className?: string;
    colorClass?: string;
}

const DotLoader = ({ className = 'w-[100px]', colorClass = 'fill-blue-500' }: PropsSpinner) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className}  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="84" cy="50" r="10" className={colorClass}>
                <animate attributeName="r" repeatCount="indefinite" dur="0.7142857142857142s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                
            </circle>
            <circle cx="16" cy="50" r="10" className={colorClass}>
                <animate attributeName="r" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                <animate attributeName="cx" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
            </circle>
            <circle cx="50" cy="50" r="10" className={colorClass}>
                <animate attributeName="r" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.7142857142857142s"></animate>
                <animate attributeName="cx" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.7142857142857142s"></animate>
            </circle>
            <circle cx="84" cy="50" r="10" className={colorClass}>
                <animate attributeName="r" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.4285714285714284s"></animate>
                <animate attributeName="cx" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.4285714285714284s"></animate>
            </circle>
            <circle cx="16" cy="50" r="10" className={colorClass}>
                <animate attributeName="r" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.142857142857143s"></animate>
                <animate attributeName="cx" repeatCount="indefinite" dur="2.8571428571428568s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.142857142857143s"></animate>
            </circle>
        </svg>
      );
};

export default DotLoader;
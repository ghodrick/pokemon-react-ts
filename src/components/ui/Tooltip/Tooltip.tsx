import { TooltipBase, TooltipContent, TooltipProvider, TooltipTrigger } from "./TooltipBase"
import { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

interface TooltipProps extends Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, 'title'>{
    children: ReactNode;
    triggerAsChild?: boolean;
    title: ReactNode;
    
}

const Tooltip = ({children, title, triggerAsChild = false, ...props} : TooltipProps) => {


    return (
        <TooltipProvider delayDuration={200} skipDelayDuration={0}>
            <TooltipBase>
                <TooltipTrigger asChild={triggerAsChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent {...props}>
                    {title}
                </TooltipContent>
            </TooltipBase>
        </TooltipProvider>
    )

}

export default Tooltip;
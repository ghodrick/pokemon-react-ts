import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/DropdownMenu/DropdownMenu";
import { useThemeProvider } from "@/contexts/ThemeProvider/ThemeProvider";
import { PiMonitorBold, PiMoonStarsBold, PiSunBold, PiSunDimBold } from "react-icons/pi";


const DarkModeActions = () => {
    
    const {setTheme} = useThemeProvider();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className="outline-none text-xl text-primary dark:text-primary-300">
                    <PiSunBold className="dark:hidden"  />
                    <PiMoonStarsBold className="hidden dark:block" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-24">
                <DropdownMenuGroup className="font-medium ">
                    <DropdownMenuItem className="focus:text-primary dark:focus:text-primary-200" onClick={() => setTheme('light')}>
                        <PiSunDimBold className="mr-2 text-neutral text-lg" />
                        <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:text-primary dark:focus:text-primary-200" onClick={() => setTheme('dark')}>
                        <PiMoonStarsBold className="mr-2 text-neutral text-lg" />
                        <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:text-primary dark:focus:text-primary-200" onClick={() => setTheme('system')}>
                        <PiMonitorBold className="mr-2 text-neutral text-lg" />
                        <span>System</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default DarkModeActions;
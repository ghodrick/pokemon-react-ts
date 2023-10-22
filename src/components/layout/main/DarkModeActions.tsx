import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/DropdownMenu/DropdownMenu";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { PiMoonStarsBold, PiSunBold, PiSunDimBold } from "react-icons/pi";

let themeInicial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const DarkModeActions = () => {
    
    const [theme, setTheme] = useLocalStorage('theme', themeInicial);

    let IconoMostrar = theme === 'light' ? <PiSunBold /> : <PiMoonStarsBold />;

    useEffect(() => {
        
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

    }, [theme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className="outline-none text-xl text-primary">
                    {IconoMostrar}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-24">
                <DropdownMenuGroup className="font-medium">
                    <DropdownMenuItem className="hover:text-primary" onClick={() => setTheme('light')}>
                        <PiSunDimBold className="mr-2 text-neutral text-lg" />
                        <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:text-primary" onClick={() => setTheme('dark')}>
                        <PiMoonStarsBold className="mr-2 text-neutral text-lg" />
                        <span>Dark</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default DarkModeActions;
import { useLocalStorage } from "@uidotdev/usehooks";
import { ReactNode, createContext, useContext, useEffect } from "react";

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
  }

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null
}

const ThemeProviderContext = createContext(initialState);


export const ThemeProvider = ({children, defaultTheme = "system"} : ThemeProviderProps) => {
    
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

    useEffect(() => {
        
        const root = window.document.documentElement;
 
        root.classList.remove("light", "dark")
    
        if (theme === "system") 
        {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    
            root.classList.add(systemTheme);

            return;
        }
    
        root.classList.add(theme)

    }, [theme]);

    return (
        <ThemeProviderContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useThemeProvider = () => {

    const context = useContext(ThemeProviderContext);

    if (!context)
    {
        throw new Error("El contexto de useThemeProvider debe ser definido");
    }

    return context;
}
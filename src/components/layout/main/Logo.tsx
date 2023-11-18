import { useThemeProvider } from "@/contexts/ThemeProvider/ThemeProvider";

const Logo = ({className = ""}) => {

    const {theme} = useThemeProvider();

    let logo = theme === 'dark' ? '/assets/logo/logo_dark.png' : '/assets/logo/logo.png';

    return ( 
        <div className={className}>
            <img src={logo} alt="ArticDex" />
        </div>
     );
}
 
export default Logo;
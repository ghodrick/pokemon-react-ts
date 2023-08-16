import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = ({className = ''}) => {
    return ( 
        <header className={`bg-container flex items-center rounded-xl shadow-md shadow-neutral-200 px-4 ${className}`}>
            <Logo />
            <NavBar />
        </header>
     );
}
 
export default Header;
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = ({className = ''}) => {
    return ( 
        <header className={`bg-white flex items-center rounded-xl shadow-md shadow-slate-200 ${className}`}>
            <Logo />
            <NavBar />
        </header>
     );
}
 
export default Header;
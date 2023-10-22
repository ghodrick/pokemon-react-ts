
const anyoActual = new Date().getFullYear();

const Footer = () => {
    return ( 
        <footer className="text-center py-4 font-semibold text-foreground text-sm">
            <div>
                <div>Made with &#9829; by <a target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline underline-offset-2" href="https://github.com/ghodrick">Ghodrick</a></div>
                <div className="text-xs">
                    {anyoActual}
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
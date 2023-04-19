
const anyoActual = new Date().getFullYear();

const Footer = () => {
    return ( 
        <footer className="text-center py-4 font-semibold text-slate-600 text-sm">
            <div>
                <div>Made with &#9829; by <a target="_blank" rel="noreferrer" className="font-semibold text-blue-500 hover:underline underline-offset-2" href="https://github.com/ghodrick">Ghodrick</a></div>
                <div className="text-xs">
                    Copyright &#169; {anyoActual}
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
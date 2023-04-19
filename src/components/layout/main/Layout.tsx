import { ReactChildren } from '../../../models/React.types';
import CirclesSVG from './CirclesSVG';
import Footer from './Footer';
import Header from './Header';

const Layout : ReactChildren = ({children}) => {
    return (
        <div className='App relative'>
            <CirclesSVG />
            <div id='AppContainer' className='flex flex-col xl:pl-60 xl:pr-44 xl:pt-8'>
                <Header className="flex-shrink-0" />
                <section className='flex-1 py-8'>
                    {children}
                </section>
                <Footer />
            </div>
        </div>
      );
}
 
export default Layout;
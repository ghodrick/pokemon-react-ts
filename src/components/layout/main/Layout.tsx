import { ReactChildren } from '../../../models/React.types';
import CirclesSVG from './CirclesSVG';
import Footer from './Footer';
import Header2 from './Header2';

const Layout : ReactChildren = ({children}) => {
    return (
        <div className='App relative'>
            <CirclesSVG />
            <div id='AppContainer' className='flex flex-col px-8 2xl:pl-60 2xl:pr-44 xl:pt-8'>
                <Header2 className="flex-shrink-0" />
                <section className='flex-1 py-8'>
                    {children}
                </section>
                <Footer />
            </div>
        </div>
      );
}
 
export default Layout;
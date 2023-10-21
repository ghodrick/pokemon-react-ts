import { ReactNode } from 'react';
import CirclesSVG from './CirclesSVG';
import Footer from './Footer';
import Header2 from './Header2';

interface LayoutProps {
    children: ReactNode;
}
const Layout  = ({children} : LayoutProps) => {
    return (
        <div className='App relative'>
            <CirclesSVG />
            <div id='AppContainer' className='flex sm:gap-6 flex-col 2xl:pl-60 2xl:pr-44'>
                <Header2 className="flex-shrink-0" />
                <section className='flex-1 py-4 sm:py-8'>
                    {children}
                </section>
                <Footer />
            </div>
        </div>
      );
}
 
export default Layout;
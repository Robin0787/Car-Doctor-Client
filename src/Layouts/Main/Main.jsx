import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import NavigationMenu from '../../Shared/Navigation/NavigationMenu';

const Main = () => {
    return (
        <section>
            <article className='w-[80%] mx-auto'>
            <NavigationMenu />
            <Outlet />
            </article>
            <Footer />
        </section>
    );
};

export default Main;
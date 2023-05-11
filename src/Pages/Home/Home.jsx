import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Services from './Services/Services';
// import Swal from 'sweetalert2';
// import { BeakerIcon } from '@heroicons/react/24/solid';

const Home = () => {
    return (
        <section>
            <Banner />
            <AboutUs />
            <Services />
        </section>
    );
};

export default Home;
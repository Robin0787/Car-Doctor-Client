import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = ({header}) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-ten-xi.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return (
        <section className='my-20'>
            <article className='text-center space-y-3'>
               {header ? '' : <h2 className="text-lg text-[#FF3811] font-bold">Service</h2>}
                <h2 className="text-4xl font-bold mb-4">Our Service Area</h2>
                <p className="text-sm text-gray-500 leading-relaxed md:w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </article>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7 mb-10'>
                {
                    services.map(service => <Service key={service._id} service={service}/>)
                }
            </article>
        </section>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Service from './Service/Service';

const Services = ({ header }) => {
    const [sort, setSort] = useState(false);
    const [limit, setLimit] = useState(200);
    const [searchService, setSearchService] = useState('');
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch(`https://car-doctor-server-ten-xi.vercel.app/services?sort=${sort ? 1 : -1}&limit=${limit}&name=${searchService}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [sort, limit, searchService]);

    function handlePriceLimit(e) {
        e.preventDefault();
        const form = e.target;
        const price = form.priceLimit.value;
        if(price){
            setLimit(price);
            setTimeout(() => {
                form.reset();
            }, [300]);
        }else {
            toast.error('Write the price first!');
        }
    }
    
    function handleServiceSearch (e) {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        setSearchService(service_name);
        setTimeout(() => {
            form.reset();
        }, [300]);
        // if(service_name.length > 0) {
        //     setSearchService(service_name);
        // }else {
        //     toast.error('Write name first!!');
        // }
    }

    return (
        <section className='my-20'>
            <article className='text-center space-y-3'>
                {header ? '' : <h2 className="text-lg text-[#FF3811] font-bold">Service</h2>}
                <h2 className="text-4xl font-bold mb-4">Our Service Area</h2>
                <p className="text-sm text-gray-500 leading-relaxed md:w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </article>
            <article className='flex flex-col flex-wrap md:flex-row justify-between items-center gap-4 mt-5'>
                <button className='px-4 py-2 md:w-auto text-white bg-[#fc4c29] hover:bg-[#ff3811] duration-300 border rounded-md' onClick={() => setSort(!sort)}>{sort ? "Price: High to Low" : "Price: Low to High"}</button>
                <form onSubmit={handleServiceSearch} className='flex justify-center items-center'>
                    <input type="text" name="service_name" className='md:w-2/3 px-3 py-2 bg-white focus:outline-0 border border-orange-600 border-e-0 rounded-full rounded-r-none' min={30} max={200} placeholder='Search service'/>
                    <button type='submit' className='bg-[#fa4d2b] hover:bg-[#ff3811] duration-300 -ml-1 text-white px-3 py-2 border border-orange-600 border-s-0 rounded-full rounded-l-none'>Search</button>
                </form>
                <form onSubmit={handlePriceLimit} className='flex justify-center items-center'>
                    <input type="number" name="priceLimit" className='w-32 px-3 py-2 bg-white focus:outline-0 border border-orange-600 border-e-0 rounded-md rounded-r-none' min={30} max={200} placeholder='Price Limit'/>
                    <button type='submit' className='bg-[#fa4521] hover:bg-[#ff3811] duration-300 -ml-1 text-white px-3 py-2 border border-orange-600 border-s-0 rounded-md rounded-l-none'>Set Limit</button>
                </form>
            </article>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7 mb-10'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </article>
        </section>
    );
};

export default Services;
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import CheckoutBanner from './CheckoutBanner/CheckoutBanner';
const Checkout = () => {
    const {user} = useContext(authContext);
    const { title, price, service_id, _id, img } = useLoaderData();

    function handleAddToBookings (e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const bookingInfo = { title, img, price, service_id, name, email, phone, date, message};
        fetch('https://car-doctor-server-ten-xi.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Added to bookings');
                form.reset();
            }
        });
    }
    
    return (
        <section>
            <article className='mt-5 mb-20'>
                <CheckoutBanner title={'Checkout'} path={'Home/Checkout'}/>
            </article>
            <article className='bg-gray-100 p-10 md:p-16 lg:px-32 lg:py-20 rounded-md'>
                <form className='space-y-5' onSubmit={handleAddToBookings}>
                <div className='flex flex-col md:flex-row w-full gap-5'>
                    <div className='w-full space-y-5'>
                        <div>
                            <input type="text" name='name' className='w-full p-3 bg-gray-200 focus:bg-white rounded-md focus:ring-4 focus:outline-0 ring-gray-200 duration-300 placeholder:text-sm placeholder:text-gray-500' placeholder='Your Name' defaultValue={user?.displayName} required/>
                        </div>
                        <div>
                            <input type="text" name='phone' className='w-full p-3 bg-gray-200 focus:bg-white rounded-md focus:ring-4 focus:outline-0 ring-gray-200 duration-300 placeholder:text-sm placeholder:text-gray-500' placeholder='Your Phone' required/>
                        </div>
                    </div>
                    <div className='w-full space-y-5'>
                        <div>
                            <input type="date" name='date' className='w-full text-gray-500 p-3 rounded-md focus:ring-4 focus:outline-0 bg-gray-200  ring-gray-200 duration-300 placeholder:text-sm placeholder:text-gray-500'/>
                        </div>
                        <div>
                            <input type="email" name='email' className='w-full p-3 bg-gray-200 focus:bg-white rounded-md focus:ring-4 focus:outline-0 ring-gray-200 duration-300 placeholder:text-sm placeholder:text-gray-500' placeholder='You Email' defaultValue={user?.email} required/>
                        </div>
                    </div>
                </div>
                <div>
                <textarea type="text" name='message' className='w-full p-3 bg-gray-200 focus:bg-white rounded-md focus:ring-4 focus:outline-0 ring-gray-200 duration-300 placeholder:text-sm placeholder:text-gray-500' placeholder='You Message' cols={10} rows={6}/>
                </div>
                <div>
                <button type='submit' className='w-full p-3 text-md rounded-md text-white bg-gradient-to-r from-[#ff3811] to-[#f53218] bg-[#ff3811]'>Add To Bookings</button>
                </div>
                </form>
            </article>
        </section>
    );
};

export default Checkout;
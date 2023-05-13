import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import CheckoutBanner from '../Checkout/CheckoutBanner/CheckoutBanner';
import SingleItem from './SignleItem/SingleItem';

const Bookings = () => {
    const navigate = useNavigate();
    const [bookingItems, setBookingItems] = useState([]);
    const {user} = useContext(authContext);
    useEffect(() => {
        fetch(`http://localhost:2000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => {setBookingItems(data)});
    }, [user]);

    function deleteBooking (id) {
        console.log(id);
        fetch(`http://localhost:2000/delete-booking/${id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1) {
                const remaining = bookingItems.filter(item => item._id !== id);
                setBookingItems(remaining);
                toast.success('Service Deleted');
            }
        })

    }
    return (
        <section>
            <article className='mt-5 mb-20'>
                <CheckoutBanner title={'All Bookings'} path={'Home/Bookings'}/>
            </article>
            <article className='space-y-10'>
                {
                    bookingItems.map((item) => <SingleItem key={item._id} item={item} deleteBooking={deleteBooking}/>)
                }
            </article>
            <article className='flex justify-between items-center mt-10 pl-14'>
                <div onClick={() => navigate('/')} className='flex gap-2 items-center cursor-pointer  hover:text-[#ff3811] duration-300'>
                    <FaArrowLeft />
                    <p>Continue shopping</p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer hover:text-[#ff3811] duration-300'>
                    <FaTrashAlt />
                    <p>Clear shopping cart</p>
                </div>
            </article>
        </section>
    );
};




export default Bookings;
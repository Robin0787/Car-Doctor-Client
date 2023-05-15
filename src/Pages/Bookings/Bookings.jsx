import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../../AuthProvider/AuthProvider';
import LoadingSpinner from '../../Shared/Loading/LoadingSpinner';
import CheckoutBanner from '../Checkout/CheckoutBanner/CheckoutBanner';
import SingleItem from './SignleItem/SingleItem';

const Bookings = () => {
    const navigate = useNavigate();
    const [bookingItems, setBookingItems] = useState([]);
    const { user, logout, loading } = useContext(authContext);

    useEffect(() => {
        fetch(`https://car-doctor-server-ten-xi.vercel.app/bookings?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => { 
                if(!data.error) {
                    setBookingItems(data);
                }
                else {
                    toast.error('Your JWT token is expired!');
                    logout()
                    .then(() => {localStorage.removeItem('access-token')});
                    navigate('/login');
                }
            });
    }, [user]);

    function deleteBooking(id) {
        fetch(`https://car-doctor-server-ten-xi.vercel.app/delete-booking/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const remaining = bookingItems.filter(item => item._id !== id);
                    setBookingItems(remaining);
                    toast.success('Service Deleted');
                }
            })
    }

    function clearCart() {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://car-doctor-server-ten-xi.vercel.app/delete-all-bookings?email=${user.email}`, { method: 'DELETE' })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                toast.success(`Deleted ${data.deletedCount} Items`);
                                setBookingItems([]);
                            }
                        });
                }
            })

    }

    function handleConfirm (id) {
        fetch(`https://car-doctor-server-ten-xi.vercel.app/update-booking/${id}` , {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Confirm'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                const remaining = bookingItems.filter(item => item._id !== id);
                const updated = bookingItems.find(item => item._id === id);
                updated.status = 'Confirmed';
                const newBookings = [updated,...remaining];
                setBookingItems(newBookings);
                toast.success('Confirmed');
            }
        })
    }
    
    return (
        <section>
            <article className='mt-5 mb-20'>
                <CheckoutBanner title={'All Bookings'} path={'Home/Bookings'} />
            </article>
            <article className='space-y-10'>
                {
                    loading ? <LoadingSpinner /> : <>{bookingItems.length > 0 ?
                        bookingItems.map((item) => <SingleItem key={item._id} item={item} deleteBooking={deleteBooking} handleConfirm={handleConfirm}/>)
                        :
                        <h2 className='text-center text-3xl font-semibold py-10'>No service has been added to the booking!</h2>
                    }</>
                }
            </article>
            <article className='flex justify-between items-center mt-10 pl-14'>
                <div onClick={() => navigate('/')} className='flex gap-2 items-center cursor-pointer  hover:text-[#ff3811] duration-300'>
                    <FaArrowLeft />
                    <p>Continue shopping</p>
                </div>
                {
                    bookingItems.length > 0 && <div onClick={clearCart} className='flex gap-2 items-center cursor-pointer hover:text-[#ff3811] duration-300'>
                    <FaTrashAlt />
                    <p>Clear shopping cart</p>
                </div>
                }
            </article>
        </section>
    );
};




export default Bookings;
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SingleItem = ({ item, deleteBooking }) => {
    const { _id, title, img, price, service_id, name, email, phone, date, message } = item;
    function handleDelete() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    deleteBooking(_id);
                }
            })
    }
    
    return (
        <div className='flex flex-col md:flex-row justify-between md:items-center '>

            <div className='flex items-center gap-4 mb-5 md:mb-0'>
                <button onClick={handleDelete} className='p-3 text-white rounded-full bg-[#ff3811] hover:bg-white hover:text-[#ff3811] hover:ring-2 ring-[#ff3811] mt-3 md:mt-0 h-full duration-300'>
                    <FaTrashAlt />
                </button>
                <img src={img} alt="" className='h-36 w-36 object-cover rounded-md' />
                <div className='flex flex-col justify-center gap-2'>
                    <h2 className="text-xl">{title}</h2>
                    <p className='text-gray-500'>Color : Blue</p>
                    <p className='text-gray-500'>Size : S</p>
                </div>
            </div>
            <p className='text-md font-semibold hidden md:block'>${price}</p>
            <p className='text-md font-semibold hidden md:block'>{date}</p>
            <div className='flex md:hidden justify-between'>
                <p className='text-md font-semibold'>${price}</p>
                <p className='text-md font-semibold'>{date}</p>
            </div>
            <button className='py-2 px-4 text-white rounded-md bg-[#ff3811] mt-3 md:mt-0'>Pending</button>
        </div>
    );
};

export default SingleItem;
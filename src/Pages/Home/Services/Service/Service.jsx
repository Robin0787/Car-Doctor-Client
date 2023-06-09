import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, service_id, img, price, title } = service;
    return (
        <div className="card p-5 gap-6 border-0 shadow-lg duration-500 hover:scale-105">
            <figure><img src={img} alt="car!" className='rounded-md h-52' /></figure>
            <div className="space-y-2">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center text-[#FF3811]">
                    <h3 className="text-md">Price : ${price}</h3>
                    <Link to={`/checkout/${_id}`} className='p-3 rounded-full cursor-pointer duration-500 hover:bg-gray-100'>
                        <ArrowRightIcon className='h-4 w-4' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
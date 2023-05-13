import React from 'react';
import banner from "../../../assets/images/checkout/checkout.png";

const CheckoutBanner = ({ title, path,  }) => {
    return (
        <div className='text-white relative '>
            <img src={banner} className='rounded-md ' alt="" />
            <h1 className='absolute top-1/2  -translate-y-1/2 left-5 text-2xl md:text-3xl font-bold p-4 '>{title}</h1>
            <h3 className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#ff3811] px-3 py-1 md:py-2 rounded-t-md">{path}</h3>
        </div>
    );
};

export default CheckoutBanner;
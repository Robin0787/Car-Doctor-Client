import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import img6 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img1 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg lg:h-[80vh] mt-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full object-cover" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:right-10 bottom-0 md:bottom-3 gap-5 text-white">
                        <a href="#slide6" className='hover:text-[#FF3811] duration-300 p-1 md:p-3 rounded-full'><ArrowLeftIcon className='h-6 w-6' /></a>
                        <a href="#slide2" className='bg-[#FF3811] p-1 md:p-3 rounded-full'>
                        <ArrowRightIcon className='h-6 w-6' /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full object-cover" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:right-10 bottom-0 md:bottom-3 gap-5 text-white">
                        <a href="#slide1" className='hover:text-[#FF3811] duration-300 p-1 md:p-3 rounded-full'><ArrowLeftIcon className='h-6 w-6' /></a>
                        <a href="#slide3" className='bg-[#FF3811] p-1 md:p-3 rounded-full'>
                        <ArrowRightIcon className='h-6 w-6' /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full object-cover" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:right-10 bottom-0 md:bottom-3 gap-5 text-white">
                        <a href="#slide2" className='hover:text-[#FF3811] duration-300 p-1 md:p-3 rounded-full'><ArrowLeftIcon className='h-6 w-6' /></a>
                        <a href="#slide4" className='bg-[#FF3811] p-1 md:p-3 rounded-full'>
                        <ArrowRightIcon className='h-6 w-6' /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full object-cover" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:right-10 bottom-0 md:bottom-3 gap-5 text-white">
                        <a href="#slide3" className='hover:text-[#FF3811] duration-300 p-1 md:p-3 rounded-full'><ArrowLeftIcon className='h-6 w-6' /></a>
                        <a href="#slide5" className='bg-[#FF3811] p-1 md:p-3 rounded-full'>
                        <ArrowRightIcon className='h-6 w-6' /></a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full object-cover" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:right-10 bottom-0 md:bottom-3 gap-5 text-white">
                        <a href="#slide4" className='hover:text-[#FF3811] duration-300 p-1 md:p-3 rounded-full'><ArrowLeftIcon className='h-6 w-6' /></a>
                        <a href="#slide6" className='bg-[#FF3811] p-1 md:p-3 rounded-full'>
                        <ArrowRightIcon className='h-6 w-6' /></a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full object-cover" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:right-10 bottom-0 md:bottom-3 gap-5 text-white">
                        <a href="#slide5" className='hover:text-[#FF3811] duration-300 p-1 md:p-3 rounded-full'><ArrowLeftIcon className='h-6 w-6' /></a>
                        <a href="#slide1" className='bg-[#FF3811] p-1 md:p-3 rounded-full'>
                        <ArrowRightIcon className='h-6 w-6' /></a>
                    </div>
                </div>
        </div>
    );
};

export default Banner;
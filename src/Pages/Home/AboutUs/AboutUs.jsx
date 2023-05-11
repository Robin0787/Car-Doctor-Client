import React from 'react';
import img2 from "../../../assets/images/about_us/parts.jpg";
import img1 from "../../../assets/images/about_us/person.jpg";

const AboutUs = () => {
    return (
        <section className='lg:flex gap-14 space-y-5 md:space-y-14'>
            <article className='lg:w-1/2 relative'>
                <img src={img1} alt="" className='rounded-md'/>
                <img src={img2} alt="" className='absolute -bottom-10 right-0 md:-right-10 w-3/5 rounded-md border-8 border-white'/>
            </article>
            <article className='lg:w-1/2 space-y-4 px-4 md:text-center lg:text-left'>
            <h2 className="text-lg text-[#FF3811] font-bold">About Us</h2>
            <h2 className="text-4xl font-bold mb-5 leading-tight">We are qualified <br className='hidden md:inline'/> & of experience <br className='hidden md:inline'/> in this field</h2>
            <p className="text-sm text-gray-500 leading-relaxed">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            <p className="text-sm text-gray-500 leading-relaxed">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            <button className="p-2 lg:py-3 lg:px-6 text-sm lg:text-md bg-[#FF3811] text-white rounded-md font-semibold mr-2 md:mr-5 hover:shadow-xl shadow-white duration-500">Get More Info</button>
            </article>

        </section>
    );
};

export default AboutUs;
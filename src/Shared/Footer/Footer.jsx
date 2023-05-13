import React from 'react';
import footerIcon from "../../assets/AllIcons.png";
const Footer = () => {
    return (
        <section className='bg-black text-gray-200 py-24 mt-20 lg:mt-28'>
            <article className='w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-footerCol gap-12 '>
                <div className='space-y-5'>
                    <h2 className="text-2xl font-bold">Car Doctor</h2>
                    <p className="text-md text-left  text-gray-400 w-[70%]">Explore all the services for making your car better</p>
                    <img src={footerIcon} className='h-10' />
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Company</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Product</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Support</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h2 className="text-xl">Contact</h2>
                    <ul className='list-none space-y-3 text-gray-400'>
                        <li>example@gmail.com</li>
                        <li>+9912-3754-4634</li>
                    </ul>
                </div>
            </article>
            <hr className='border-gray-800 my-10 w-[80%] mx-auto'/>
            <div className='w-[80%] mx-auto flex justify-between items-center text-sm text-gray-400'>
                <p>@2023 CarDoctor. All Rights Reserved</p>
                <p>Powered by Car Doctor</p>
            </div>
        </section>
    );
};

export default Footer;
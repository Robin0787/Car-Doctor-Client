import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../Shared/Navigation/NavigationMenu';
import loginImg from "../../assets/images/login/login.svg";
const SignUp = () => {
    function handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password };
        console.log(loginInfo);
    }
    return (
        <section className='w-4/5 mx-auto'>
            <NavigationMenu />
            <article className='flex gap-10'>
                <div className='md:w-1/2'>
                    <img src={loginImg} alt="" className='h-3/4 mx-auto mt-10' />
                </div>
                <div className='md:w-1/2 my-auto px-5'>
                    <form onSubmit={handleLogin} className='shadow-lg rounded-md py-5 px-14 space-y-4'>
                        <h2 className="text-2xl text-center font-semibold rounded-md my-5">Sign Up</h2>
                        <div className='space-y-2'>
                            <label htmlFor="name" className='text-md'>Name</label><br />
                            <input type="text" name='name' placeholder='Your name' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='text-md'>Email</label><br />
                            <input type="email" name='email' placeholder='Your email' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="password" className='text-md'>Password</label><br />
                            <div className='space-y-1'>
                            <input type="password" name='password' placeholder='Your password' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' />
                            <p className='text-sm text-gray-500'>forgot password? <span className='text-[#ff3811] cursor-pointer'>reset</span></p>
                            </div>
                        </div>
                        <div>
                            <button className='w-full py-3 bg-[#ff3811] text-white font-semibold cursor-pointer rounded-md hover:bg-[#ff0000] duration-500'>SignUp</button>
                        </div>
                        <div className='flex w-full items-center'>
                            <hr className='w-1/3' />
                            <p className='text-center text-sm text-gray-500 px-2'>Or Sign Up with</p>
                            <hr className='w-1/3' />
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <button className='bg-gray-100 p-3 rounded-full text-blue-500'><FaFacebook className='h-5 w-5'/></button>
                            <button className='bg-gray-100 p-3 rounded-full text-blue-600'><FaLinkedinIn className='h-5 w-5'/></button>
                            <button className='bg-gray-100 p-3 rounded-full text-blue-500'><FaGoogle className='h-5 w-5'/></button>
                        </div>
                        <div>
                            <p className="text-sm text-center text-gray-600">Already have an account? <Link className='text-[#FF3811]'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default SignUp;
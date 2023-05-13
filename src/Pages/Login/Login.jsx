
import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import NavigationMenu from '../../Shared/Navigation/NavigationMenu';
import loginImg from "../../assets/images/login/login.svg";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [showEye, setShowEye] = useState(false);
    const  {continueWithGoogle, continueWithGithub, loginWithEmailAndPass,resetPass} = useContext(authContext);
    const emailRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname;
    
    function handleLogin (e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailAndPass(email, password)
        .then(res => {
            toast.success('Login Successful');
            form.reset();
            setShowEye(false);
            navigate(from, {replace: true});
        })
        .catch(err => {
            toast.error(err.message.slice(22, -2).replace(/-/g, " "));
            console.log(err.message);
        })
    }
    function handleGoogleSignUp () {
        continueWithGoogle()
        .then(result => {
            toast.success('SignUp Successful');
            navigate(from, {replace: true});
        })
        .catch(err => {
            toast.error('Something wrong! Check Console');
            console.log(err.message);
        })
    }
    function handleGithubSignUp () {
        continueWithGithub()
        .then(res => {
            toast.success('Sign Up Successful');
            navigate(from, {replace: true});
        })
        .catch(err => {
            toast.error('Something wrong! Check Console');
            console.log(err.message);
        })
    }
    function handlePassChange (e) {
        const value = e.target.value;
        if(value.length > 0){
            setShowEye(true);
        }
        else {
            setShowEye(false);
        }
    }
    function handleResetPass () {
        const email = emailRef.current.value;
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            resetPass(email)
            .then(res => {
                toast.success('Password reset Email sent');
            })
        }
        else if (email.length < 1) {
            toast.error('Write your email first');
            emailRef.current.focus();
        }
        else {
            toast.error("Invalid Email");
        }
    }

    return (
        <section className='w-4/5 mx-auto'>
            <NavigationMenu />
            <article className='flex flex-col md:flex-row gap-10'>
                <div className='md:w-2/5 lg:w-1/2'>
                    <img src={loginImg} alt="" className='h-3/4 mx-auto mt-6 md:mt-14' />
                </div>
                <div className='md:w-3/5 lg:w-1/2 my-auto px-0 lg:px-4'>
                    <form onSubmit={handleLogin} className='shadow-lg rounded-md py-5 px-6 lg:px-14 space-y-5'>
                        <h2 className="text-2xl text-center font-semibold rounded-md my-5">Login</h2>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='text-md'>Email</label><br />
                            <input type="email" ref={emailRef} name='email' placeholder='Your email' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' required/>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="password" className='text-md'>Password</label><br />
                            <div className='space-y-1'>
                            <div className='relative'>
                            <input onChange={handlePassChange} type={showPass ? 'text' : 'password'} name='password' placeholder='Your password' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' required/>
                           {showEye && <p onClick={() => {setShowPass(!showPass)}} className='absolute right-2 top-[5px] cursor-pointer p-2 hover:bg-gray-100 rounded-full'>
                            {
                                showPass ?
                                <FaEye className='text-blue-400 h-4 w-4'/>
                                :
                                <FaEyeSlash className='text-blue-400 h-4 w-4'/>
                            }
                            </p>}
                            </div>
                            <p className='text-sm text-gray-500'>forgot password? <span className='text-[#ff3811] cursor-pointer' onClick={handleResetPass}>reset</span></p>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full py-3 bg-[#ff3811] text-white font-semibold cursor-pointer rounded-md hover:bg-[#ff0000] duration-500'>Login</button>
                        </div>
                        <div className='flex w-full items-center'>
                            <hr className='w-1/3' />
                            <p className='text-center text-sm text-gray-500 px-2'>Or Continue with</p>
                            <hr className='w-1/3' />
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <p onClick={() => {toast.error('Not Implemented Yet !!')}} className='bg-gray-100 hover:bg-gray-200 duration-300 p-3 cursor-pointer rounded-full text-blue-500'><FaFacebook className='h-5 w-5 hover:scale-110 duration-500'/></p>
                            <p onClick={handleGithubSignUp} className='bg-gray-100 hover:bg-gray-200 duration-300 p-3 cursor-pointer rounded-full text-gray-800'><FaGithub className='h-5 w-5 hover:scale-110 duration-500'/></p>
                            <p onClick={handleGoogleSignUp} className='bg-gray-100 hover:bg-gray-200 duration-300 p-3 cursor-pointer rounded-full text-blue-500'><FaGoogle className='h-5 w-5 hover:scale-110 duration-500'/></p>
                        </div>
                        <div>
                            <p className="text-sm text-center text-gray-600">Don't have an account? <Link to={'/signUp'} className='text-[#FF3811]'>SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default Login;
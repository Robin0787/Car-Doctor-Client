import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import NavigationMenu from '../../Shared/Navigation/NavigationMenu';
import loginImg from "../../assets/images/login/login.svg";
const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const [isPassOk, setIsPassOk] = useState(false);
    const { continueWithGoogle, continueWithGithub, signUpWithEmailAndPass } = useContext(authContext);
    const [validatePass, setValidatePass] = useState('');
    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (isPassOk) {
            signUpWithEmailAndPass(email, password)
                .then(res => {
                    toast.success('Sign Up Successful');
                    form.reset();
                    setShowEyeIcon(false);
                    navigate('/');
                    updateProfile(res.user, {displayName: name})
                    .catch((err) => {console.log(err.message)})
                })
                .catch(err => {
                    toast.error(err.message.slice(22, -2).replace(/-/g, " "));
                    console.log(err.message);
                })
        }
        else {
            toast.error("Password isn't valid");
        }
    }
    function handleGoogleSignUp() {
        continueWithGoogle()
            .then(result => {
                toast.success('SignUp Successful');
                navigate('/');
            })
            .catch(err => {
                toast.error('Something wrong! Check Console');
                console.log(err.message);
            })
    }
    function handleGithubSignUp() {
        continueWithGithub()
            .then(res => {
                toast.success('Sign Up Successful');
                navigate('/');
            })
            .catch(err => {
                toast.error('Something wrong! Check Console');
                console.log(err.message);
            })
    }
    function handlePassChange(e) {
        const pass = e.target.value;
        if (!/(?=.*[A-Z])/.test(pass)) {
            setValidatePass('Password must contain a uppercase letter');
            setIsPassOk(false);
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
            setValidatePass('Password must contain two numbers');
            setIsPassOk(false);
        } else if (!/(?=.*[!@#$%^&*])/.test(pass)) {
            setValidatePass('Password must contain a special character');
            setIsPassOk(false);
        }
        else if (pass.length < 6) {
            setValidatePass('Password must contain at least six characters')
            setIsPassOk(false);
        }
        else {
            setValidatePass('');
            setIsPassOk(true);
        }
        handlePassError(pass);
    }
    function handlePassError(pass) {
        if (pass.length > 0) {
            setShowEyeIcon(true);
        }
        else {
            setShowEyeIcon(false);
            setValidatePass('');
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
                    <form onSubmit={handleSignUp} className='shadow-lg rounded-md py-5 px-6 lg:px-14 space-y-4'>
                        <h2 className="text-2xl text-center font-semibold rounded-md my-5">Sign Up</h2>
                        <div className='space-y-2'>
                            <label htmlFor="name" className='text-md'>Name</label><br />
                            <input type="text" name='name' placeholder='Your name' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' required />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='text-md'>Email</label><br />
                            <input type="email" name='email' placeholder='Your email' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' required />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="password" className='text-md'>Password</label><br />
                            <div className='space-y-1 relative'>
                                <input type={showPass ? 'text' : 'password'} onChange={handlePassChange} name='password' placeholder='Your password' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-sm' required />
                                {
                                    showEyeIcon &&
                                    <p className='absolute right-1 top-[1px] text-blue-500 hover:bg-gray-100 p-2 rounded-full duration-300 cursor-pointer'>
                                        {
                                            showPass ? <FaEye onClick={() => { setShowPass(!showPass) }} className='h-4 w-4' /> : <FaEyeSlash onClick={() => { setShowPass(!showPass) }} className='h-4 w-4' />
                                        }
                                    </p>
                                }
                                <p className='text-xs absolute -bottom-5 text-red-400'>{validatePass}</p>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full py-3 mt-5 bg-[#ff3811] text-white font-semibold cursor-pointer rounded-md hover:bg-[#ff0000] duration-500'>Sign Up</button>
                        </div>
                        <div className='flex w-full items-center'>
                            <hr className='w-1/3' />
                            <p className='text-center text-sm text-gray-500 px-2'>Or Continue with</p>
                            <hr className='w-1/3' />
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <p onClick={() => { toast.error("Not Implemented Yet !!") }} className='bg-gray-100 hover:bg-gray-200 duration-500 p-3 cursor-pointer rounded-full text-blue-500'><FaFacebook className='h-5 w-5 hover:scale-110 duration-500' /></p>
                            <p onClick={handleGithubSignUp} className='bg-gray-100 hover:bg-gray-200 duration-500 p-3 cursor-pointer rounded-full text-gray-800'><FaGithub className='h-5 w-5 hover:scale-110 duration-500' /></p>
                            <p onClick={handleGoogleSignUp} className='bg-gray-100 hover:bg-gray-200 duration-500 p-3 cursor-pointer rounded-full text-blue-500'><FaGoogle className='h-5 w-5 hover:scale-110 duration-500' /></p>
                        </div>
                        <div>
                            <p className="text-sm text-center text-gray-600">Already have an account? <Link to={'/login'} className='text-[#FF3811]'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default SignUp;
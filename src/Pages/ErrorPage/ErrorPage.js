import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/404.png'
import logo from '../../assets/logo/logo.png'

const ErrorPage = () => {
    return (
        <section className='bg-[#343498] min-h-screen py-12'>
            <div className='flex justify-center items-center'>
                <Link to='/' className='flex items-center gap-3 font-bold text-3xl text-center text-white'>
                    <img className='w-8' src={logo} alt="" />
                    <span>HeyLink.me</span>
                </Link>
            </div>
            <div className='mx-auto flex justify-center items-center mt-20'>
                <img className='w-72 md:w-96' src={img} alt="" />
            </div>
            <p className='mt-16 text-gray-100 font-semibold text-center'>We can't find the page that you're looking for :(</p>
            <div className='flex justify-center mt-8'>
                <Link to='/home' className='w-32 flex justify-between items-center h-12 bg-[#2975CF] rounded-[50px] px-6'>
                    <button className='text-white text-2xl font-bold'>←</button>
                    <button className='text-white font-bold'>Home</button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
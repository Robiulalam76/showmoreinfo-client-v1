import React from 'react';
import { Link } from 'react-router-dom';

const CommerceTab = () => {
    return (
        <section className='min-h-screen'>
            <div>
                <div className='flex justify-center items-center gap-1 px-6 rounded-[50px] h-10 w-fit mx-auto bg-blue-200'>
                    <button className='text-white font-semibold'>+ Add Commerce Link</button>
                </div>
                <h1 className='text-gray-900 font-semibold text-center mt-6'>Set up your payment provider</h1>
                <p className='text-gray-900 font-semibold text-center mt-6'>To collect payments, please add a payment provider in <Link to='' className='text-blue-600 underline'>Commerce Integrations</Link></p>
            </div>
        </section>
    );
};

export default CommerceTab;
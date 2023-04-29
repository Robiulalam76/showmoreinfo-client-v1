import React from 'react';

const ServicesDropdown = () => {
    return (
        <div class="absolute -right-36 lg:-right-56 z-10 mt-2 w-[700px] rounded-md bg-gray-50 shadow-lg">
            <div className='grid grid-cols-2 gap-6 py-4 px-3'>
                <div className='flex gap-6 hover:bg-gray-200 rounded-md p-3'>
                    <div className='flex flex-col justify-start'>
                        <div className='bg-white rounded-md p-3 border'>
                            <img className='w-28' src="https://cdn-f.heylink.me/static/img/popup-menu/blog.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-black'>Blog & Help</h1>
                        <small className='text-gray-400 font-medium'>Learn more about HeyLink.me, guides and explainers for your questions.</small>
                    </div>
                </div>

                <div className='flex gap-6 hover:bg-gray-200 rounded-md p-3'>
                    <div className='flex flex-col justify-start'>
                        <div className='bg-white rounded-md p-3 border'>
                            <img className='w-28' src="https://cdn-f.heylink.me/static/img/popup-menu/community.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-black'>Community</h1>
                        <small className='text-gray-400 font-medium'>HeyLink.me in numbers. Take a look at some key figures from our services.</small>
                    </div>
                </div>

                <div className='flex gap-6 hover:bg-gray-200 rounded-md p-3'>
                    <div className='flex flex-col justify-start'>
                        <div className='bg-white rounded-md p-3 border'>
                            <img className='w-28' src="https://cdn-f.heylink.me/static/img/popup-menu/contact.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-black'>Contact</h1>
                        <small className='text-gray-400 font-medium'>Connect with HeyLink.me Team for partnership, promotions, or events.</small>
                    </div>
                </div>

                <div className='flex gap-6 hover:bg-gray-200 rounded-md p-3'>
                    <div className='flex flex-col justify-start'>
                        <div className='bg-white rounded-md p-3 border'>
                            <img className='w-28' src="https://cdn-f.heylink.me/static/img/popup-menu/agency.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold text-black'>Agency</h1>
                        <small className='text-gray-400 font-medium'>Easily create & manage all your HeyLink.me accounts in one place under a single login.</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesDropdown;
import React from 'react';

const Services = () => {
    return (
        <section className='px-6 md:px-16 max-w-[1440px] mx-auto'>
            <h1 className='text-center font-bold text-gray-900 my-16 text-xl md:text-3xl'>The one link to rule them all</h1>

            {/* ----------------service card---------------- */}
            <div className='grid md:grid-cols-3 items-center gap-12 mx-auto'>
                <div className='grid grid-cols-1'>
                    <img className='w-24 mx-auto' src="https://cdn-f.heylink.me/static/img/ic_create.svg" alt="" />
                    <div className='text-center px-6'>
                        <h1 className='font-bold text-gray-900 text-2xl mt-6'>Create</h1>
                        <p className='text-gray-400 mt-6 text-xl'>Easily create & manage all your
                            links in one place: personal website,
                            store, recent video or social post.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <img className='w-24 mx-auto' src="https://cdn-f.heylink.me/static/img/ic_integrate.svg" alt="" />
                    <div className='text-center px-6'>
                        <h1 className='font-bold text-gray-900 text-2xl mt-6'>Integrate</h1>
                        <p className='text-gray-400 mt-6 text-xl'>Integrate with ecommerce or lead
                            generation solutions, add donation form
                            or analysis of your social profile.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1'>
                    <img className='w-24 mx-auto' src="https://cdn-f.heylink.me/static/img/ic_share.svg" alt="" />
                    <div className='text-center px-6'>
                        <h1 className='font-bold text-gray-900 text-2xl mt-6'>Share</h1>
                        <p className='text-gray-400 mt-6 text-xl'>Share your link anywhere: Instagram,
                            YouTube, TikTok, in messengers
                            or via SMS.</p>
                    </div>
                </div>
            </div>

            {/* -------------------------------- */}
            <div className='grid md:grid-cols-2 items-center gap-8 mt-28 mx-auto'>
                <img className='h-[500px]' src="https://cdn-f.heylink.me/static/img/works-anywere.gif" alt="" />
                <div className='text-center md:text-left'>
                    <h1 className='text-gray-900 font-bold text-3xl'>Works Anywhere</h1>
                    <p className='text-xl text-gray-500 font-semibold mt-6'>Share your link on any social or digital platform: Instagram, YouTube, Facebook or TikTok, in messengers or via SMS.</p>
                </div>
            </div>

            <div className='grid md:grid-cols-2 items-center gap-8 mt-28 mx-auto'>
                <div className='text-center md:text-left'>
                    <h1 className='text-gray-900 font-bold text-3xl'>Get detailed social analytics</h1>
                    <p className='text-xl text-gray-500 font-semibold mt-6'>Identify, organize and manage your audience on social media.</p>
                </div>
                <img className='' src="https://cdn-f.heylink.me/static/img/index-analytics-example.gif" alt="" />
            </div>

            <div className='grid md:grid-cols-2 items-center gap-8 mt-28 mx-auto'>
                <img className='' src="https://cdn-f.heylink.me/static/img/index-links-example.gif" alt="" />
                <div className='text-center md:text-left'>
                    <h1 className='text-gray-900 font-bold text-3xl'>Manage your links as you wish</h1>
                    <p className='text-xl text-gray-500 font-semibold mt-6'>Optimize your links. HeyLink.me allows you to connect any links and effectively manage your audience.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
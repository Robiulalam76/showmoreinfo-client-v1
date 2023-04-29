import React from 'react';
import img1 from '../../../assets/icons/social-icons/img (1).svg'
import img2 from '../../../assets/icons/social-icons/img (2).svg'
import img3 from '../../../assets/icons/social-icons/img (3).svg'
import img4 from '../../../assets/icons/social-icons/img (4).svg'
import img5 from '../../../assets/icons/social-icons/img (5).svg'
import img6 from '../../../assets/icons/social-icons/img (6).svg'
import img7 from '../../../assets/icons/social-icons/img (7).svg'
import img8 from '../../../assets/icons/social-icons/img (8).svg'
import img9 from '../../../assets/icons/social-icons/img (9).svg'
import img10 from '../../../assets/icons/social-icons/img (10).svg'
import img11 from '../../../assets/icons/social-icons/img (11).svg'
import img12 from '../../../assets/icons/social-icons/img (12).svg'
import img13 from '../../../assets/icons/social-icons/img (13).svg'
import img14 from '../../../assets/icons/social-icons/img (14).svg'
import img15 from '../../../assets/icons/social-icons/img (15).svg'
import img16 from '../../../assets/icons/social-icons/img (16).svg'
import img17 from '../../../assets/icons/social-icons/img (17).svg'
import img18 from '../../../assets/icons/social-icons/img (18).svg'
import img19 from '../../../assets/icons/social-icons/img (19).svg'
import img20 from '../../../assets/icons/social-icons/img (20).svg'

const SocialMedia = () => {
    return (
        <section className='mt-16 px-12 max-w-[1440px] mx-auto'>
            {/* ----------------social media Link---------------- */}
            <div>
                <iframe className='mx-auto my-6 md:w-[980px] md:h-[515px]' width="100%" height="100%" src="https://www.youtube.com/embed/StyoJdAqxBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='grid md:grid-cols-2 items-center gap-6 my-16'>
                <div className='grid grid-cols-5 order-last md:order-first gap-8 cursor-pointer'>
                    <img className='w-8' src={img1} alt="" />
                    <img className='w-8' src={img2} alt="" />
                    <img className='w-8' src={img3} alt="" />
                    <img className='w-8' src={img4} alt="" />
                    <img className='w-8' src={img5} alt="" />
                    <img className='w-8' src={img6} alt="" />
                    <img className='w-8' src={img7} alt="" />
                    <img className='w-8' src={img8} alt="" />
                    <img className='w-8' src={img9} alt="" />
                    <img className='w-8' src={img10} alt="" />
                    <img className='w-8' src={img11} alt="" />
                    <img className='w-8' src={img12} alt="" />
                    <img className='w-8' src={img13} alt="" />
                    <img className='w-8' src={img14} alt="" />
                    <img className='w-8' src={img15} alt="" />
                    <img className='w-8' src={img16} alt="" />
                    <img className='w-8' src={img17} alt="" />
                    <img className='w-8' src={img18} alt="" />
                    <img className='w-8' src={img19} alt="" />
                    <img className='w-8' src={img20} alt="" />
                </div>
                <div>
                    <img className='w-full' src="https://cdn-f.heylink.me/static/img/connect-brands-label.svg" alt="" />
                </div>
            </div>

        </section>
    );
};

export default SocialMedia;
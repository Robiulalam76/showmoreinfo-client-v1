import React, { useEffect, useRef, useState } from 'react';
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import arrowRight from '../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import edit from '../../../../../assets/icons/appearance-tab-icons/edit.svg'
import right from '../../../../../assets/icons/appearance-tab-icons/blue-right.png'
import blueRight from '../../../../../assets/icons/appearance-tab-icons/blue-right.svg'
import move from '../../../../../assets/icons/appearance-tab-icons/move.svg'
import links from '../../../../../assets/icons/appearance-tab-icons/links.svg'
import sliders from '../../../../../assets/icons/appearance-tab-icons/sliders.svg'
import music from '../../../../../assets/icons/appearance-tab-icons/music.svg'
import signups from '../../../../../assets/icons/appearance-tab-icons/signups.svg'
import messages from '../../../../../assets/icons/appearance-tab-icons/messages.svg'
import social from '../../../../../assets/icons/appearance-tab-icons/social.svg'
import menu from '../../../../../assets/icons/appearance-tab-icons/menu.svg'
import maps from '../../../../../assets/icons/appearance-tab-icons/maps.svg'

const placementItems = [
    { img: links, title: 'Links' },
    { img: sliders, title: 'Sliders' },
    { img: music, title: 'Music Links' },
    { img: signups, title: 'Signups' },
    { img: messages, title: 'Messages' },
    { img: social, title: 'Social Links' },
    { img: menu, title: 'Menu' },
    { img: maps, title: 'Locations & Maps' },
    { img: links, title: 'Links' },
]

const PlacementManager = () => {
    const [open, setOpen] = useState(true)

    return (
        <section id='Placement-Manager' className='mb-4'>
            <div className='flex items-center justify-between'>
                <h1 onClick={() => setOpen(!open)} className='text-left font-semibold text-blue-900 mb-2'>PLACEMENT MANAGER</h1>
                {
                    open ? <img onClick={() => setOpen(!open)} src={arrowDown} alt="" />
                        :
                        <img onClick={() => setOpen(!open)} src={arrowRight} alt="" />
                }
            </div>
            {
                open && <div className='grid grid-cols-1 gap-4 p-2 md:p-4 border rounded-xl w-full h-full'>
                    {
                        placementItems.map(pItem => <div className='w-full h-12 bg-gray-100 rounded-md flex justify-between items-center px-4'>
                            <div className='flex items-center gap-4'>
                                <img className='w-6' src={pItem.img} alt="" />
                                <h1 className='font-semibold text-gray-500'>{pItem.title}</h1>
                            </div>
                            <img className='w-6' src={move} alt="" />
                        </div>)
                    }
                </div>
            }
        </section>
    );
};

export default PlacementManager;
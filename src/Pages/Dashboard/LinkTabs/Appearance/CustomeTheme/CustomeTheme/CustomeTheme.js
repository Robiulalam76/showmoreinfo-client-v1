import React, { useEffect, useRef, useState } from 'react';
import arrowDown from '../../../../../../assets/icons/appearance-tab-icons/arrowDown.svg'
import arrowRight from '../../../../../../assets/icons/appearance-tab-icons/arrowRight.svg'
import ProButton from '../../../../../../components/Buttons/ProButton';

const themeCategories = [
    { id: '1', name: 'All' },
    { id: '2', name: 'Free' },
    { id: '3', name: 'Patterns' },
    { id: '4', name: 'Crypto' },
    { id: '5', name: 'Templates' },
    { id: '6', name: 'Countries' },
    { id: '7', name: 'PRO' },
    { id: '8', name: 'Christmas' },
    { id: '9', name: 'Lunar New Year' },
    { id: '10', name: 'Holidays' },
    { id: '11', name: 'Partnerships' },
]

const subjects = [
    { id: '1', ctgID: '2', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '2', ctgID: '2', name: 'Unknown Squares', pro: false, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '3', ctgID: '2', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },

    { id: '4', ctgID: '3', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '5', ctgID: '3', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '6', ctgID: '3', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },


    { id: '1', ctgID: '2', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '2', ctgID: '2', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '3', ctgID: '2', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },

    { id: '4', ctgID: '3', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '5', ctgID: '3', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
    { id: '6', ctgID: '3', name: 'Unknown Squares', pro: true, img: 'https://cdn-f.heylink.me/static/media/img_theme_07_pattern.c9835e17.png' },
]

const CustomeTheme = () => {
    const [open, setOpen] = useState(true)
    const [viewCtgTab, setViewCtgTab] = useState('1')
    const [allData, setAllData] = useState([])

    const handleData = (id) => {
        setViewCtgTab(id)
        const subjectData = subjects.filter(sub => sub.ctgID === id)
        setAllData(subjectData)
    }

    return (
        <section id='Placement-Manager' className='mb-4'>
            <div className='flex items-center justify-between'>
                <h1 onClick={() => setOpen(!open)} className='text-left font-semibold text-blue-900 mb-2'>THEME</h1>
                {
                    open ? <img onClick={() => setOpen(!open)} src={arrowDown} alt="" />
                        :
                        <img onClick={() => setOpen(!open)} src={arrowRight} alt="" />
                }
            </div>
            {
                open && <div className='grid grid-cols-1 gap-4 p-2 md:p-4 border rounded-xl h-full'>
                    <div>
                        <div className='flex items-center flex-wrap md:flex-nowrap gap-6'>
                            {
                                themeCategories.map(themeCtg => <div onClick={() => handleData(themeCtg.id)}
                                    className={`text-gray-500 pb-2 pt-2 border-b-4 border-white  
                    ${themeCtg.id === viewCtgTab && ' border-green-600 text-blue-900 duration-300'}`}>
                                    <h1 className='text-sm'>{themeCtg.name}</h1>
                                </div>)
                            }
                        </div>
                        <hr className='border-gray-300' />
                    </div>

                    <div className='flex items-center'>
                        {
                            allData.map(sub => <div className='relative flex flex-col justify-center gap-2 items-center w-32 h-32 rounded-md hover:bg-blue-200'>
                                <div className='relative w-20 h-14'>
                                    <img className='w-20 h-16' src={sub.img} alt="" />
                                    {
                                        sub.pro && <div className='w-8 h-8 rounded-full bg-white absolute flex justify-center items-center top-3 right-6'>
                                            <img className='w-5' src="https://cdn-f.heylink.me/static/media/lock.676efdd8.svg" alt="" />
                                        </div>
                                    }
                                </div>
                                <h1 className='text-sm text-center w-16 mx-auto'>{sub.name}</h1>
                                {
                                    sub.pro && <div className='absolute top-0 right-9'><ProButton /></div>
                                }
                            </div>
                            )
                        }
                    </div>
                </div>

            }
        </section>
    );
};

export default CustomeTheme;
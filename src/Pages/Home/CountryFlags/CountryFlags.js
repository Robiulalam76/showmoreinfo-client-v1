import React from 'react';
import { Link } from 'react-router-dom';

import Argentina from '../../../assets/icons/flag-icons/Argentina.svg'
import Australia from '../../../assets/icons/flag-icons/Australia.svg'
import Brazil from '../../../assets/icons/flag-icons/Brazil.svg'
import Cambodia from '../../../assets/icons/flag-icons/Cambodia.svg'
import Canada from '../../../assets/icons/flag-icons/Canada.svg'
import Chile from '../../../assets/icons/flag-icons/Chile.svg'
import China from '../../../assets/icons/flag-icons/China.svg'
import Colombia from '../../../assets/icons/flag-icons/Colombia.svg'
import Germany from '../../../assets/icons/flag-icons/Germany.svg'
import India from '../../../assets/icons/flag-icons/India.svg'
import Indonesia from '../../../assets/icons/flag-icons/Indonesia.svg'
import Iraq from '../../../assets/icons/flag-icons/Iraq.svg'
import Ireland from '../../../assets/icons/flag-icons/Ireland.svg'
import Italy from '../../../assets/icons/flag-icons/Italy.svg'
import Jordan from '../../../assets/icons/flag-icons/Jordan.svg'
import Kuwait from '../../../assets/icons/flag-icons/Kuwait.svg'
import Malaysia from '../../../assets/icons/flag-icons/Malaysia.svg'
import Mexico from '../../../assets/icons/flag-icons/Mexico.svg'
import Morocco from '../../../assets/icons/flag-icons/Morocco.svg'
import Netherlands from '../../../assets/icons/flag-icons/Netherlands.svg'
import Nigeria from '../../../assets/icons/flag-icons/Nigeria.svg'
import Philippines from '../../../assets/icons/flag-icons/Philippines.svg'
import Romania from '../../../assets/icons/flag-icons/Romania.svg'
import Saudi_Arabia from '../../../assets/icons/flag-icons/Saudi Arabia.svg'

const CountryFlags = () => {
    const flags = [
        { img: Argentina, name: "Argentina" },
        { img: Australia, name: "Australia" },
        { img: Brazil, name: "Brazil" },
        { img: Cambodia, name: "Cambodia" },
        { img: Canada, name: "Canada" },
        { img: Chile, name: "Chile" },
        { img: China, name: "China" },
        { img: Colombia, name: "Colombia" },
        { img: Germany, name: "Germany" },
        { img: India, name: "India" },
        { img: Indonesia, name: "Indonesia" },
        { img: Iraq, name: "Iraq" },
        { img: Ireland, name: "Ireland" },
        { img: Italy, name: "Italy" },
        { img: Jordan, name: "Jordan" },
        { img: Kuwait, name: "Kuwait" },
        { img: Malaysia, name: "Malaysia" },
        { img: Mexico, name: "Mexico" },
        { img: Morocco, name: "Morocco" },
        { img: Netherlands, name: "Netherlands" },
        { img: Nigeria, name: "Nigeria" },
        { img: Philippines, name: "Philippines" },
        { img: Romania, name: "Romania" },
        { img: Saudi_Arabia, name: "Saudi Arabia" },
    ]
    return (
        <section className=''>
            <div className='text-center my-6'>
                <h1 className='text-black font-bold text-2xl md:text-6xl'>1,340,000 customers</h1>
                <h1 className='text-2xl mt-4 font-bold text-gray-500'>from 195 countries trust HeyLink.me</h1>
                <Link to='/signup' className='mt-6 text-white font-bold text-xl inline-block py-4 px-16 bg-orange-500 hover:bg-sky-500 duration-300 rounded-[50px]'>
                    <button>Start For Free</button>
                </Link>
            </div>
            <div className='flex justify-center bg-gray-100 py-8'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-6 max-w-[1440px] mx-auto'>
                    {
                        flags.map(flag => <div className='flex items-center gap-2 mt-3 mx-4 md:mx-8'>
                            <img src={flag.img} alt="image" />
                            <div>
                                <Link to='/' className='font-semibold'>Heylink.me</Link>
                                <h1 className='font-bold text-gray-900'>{flag.name}</h1>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CountryFlags;
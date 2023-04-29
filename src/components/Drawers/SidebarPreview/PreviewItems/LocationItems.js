import React, { useContext } from 'react';
import noImg from "../../../../assets/icons/no-img.png";
import { AuthContext } from '../../../../ContextAPI/AuthProvider/AuthProvider';

const LocationItems = ({ location, view }) => {
    const { userData } = useContext(AuthContext)
    return (
        <div className="w-full min-h-12 max-h-fit rounded-[32px] p-2 border-2 border-[#E5E7EB]"
            style={{ backgroundColor: `${userData?.buttonBackgroundColor}`, color: `${userData?.buttonTextColor}` }}  >

            <div className="flex items-center gap-2">
                <img className="w-12 h-12 rounded-full object-cover"
                    src={`${location?.image ? location?.image : noImg}`} alt="" />

                <span className="font-bold">{location?.name?.slice(0, 20)}</span>
            </div>


            <div className="w-full flex flex-col justify-start items-center gap-4 py-2"
                style={{ backgroundColor: `${userData?.buttonBackgroundColor}` }} >
                <div className={`flex items-center gap-2 justify-between w-full ${view === "public" ? "h-32 md:h-96" : "h-32"}`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28881.17424342704!2d55.28268127919007!3d25.19827208970151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sThe%20Dubai%20Mall!5e0!3m2!1sen!2sbd!4v1677291607353!5m2!1sen!2sbd" className="w-20 h-full flex-grow" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <svg className='' width="16" height="16" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.12132" y1="2" x2="16.5" y2="16.3787" stroke="black" stroke-width="3" stroke-linecap="round" />
                        <line x1="3" y1="30.5037" x2="16.6287" y2="16.875" stroke="black" stroke-width="3" stroke-linecap="round" />
                    </svg>

                </div>

                <span className='text-sm text-center'>{location?.markersOnMap ? location?.markersOnMap : location?.name}</span>
            </div>

        </div>
    );
};

export default LocationItems;
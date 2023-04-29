import React, { useContext } from 'react';
import noImg from "../../../../assets/icons/no-img.png";
import { AuthContext } from '../../../../ContextAPI/AuthProvider/AuthProvider';

const LinkItems = ({ item }) => {
    const { userData } = useContext(AuthContext)
    // console.log(userData);
    return (
        <>
            {
                item?.show === 'true' && <a
                    target='_blank'
                    href={item?.link}
                    className="flex justify-between items-center border-2 border-[#E5E7EB] rounded-[60px] 
                          w-full h-[66px] px-2"
                    style={{ backgroundColor: `${userData?.buttonBackgroundColor}`, color: `${userData?.buttonTextColor}` }} >

                    <div className="flex items-center gap-2">
                        <img className="w-12 h-12 rounded-full object-cover"
                            src={`${item?.image ? item?.image : noImg}`} alt="" />

                        <span className="font-bold">{item.link.slice(0, 20)}</span>
                    </div>

                    <svg width="16" height="16" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.12132" y1="2" x2="16.5" y2="16.3787" stroke="black" stroke-width="3" stroke-linecap="round" />
                        <line x1="3" y1="30.5037" x2="16.6287" y2="16.875" stroke="black" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </a>
            }
        </>
    );
};

export default LinkItems;
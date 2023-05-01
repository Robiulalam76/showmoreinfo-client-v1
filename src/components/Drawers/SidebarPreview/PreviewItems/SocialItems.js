import React from 'react';


import facebook from '../../../../assets/icons/socials/facebook.png'
import twitter from '../../../../assets/icons/socials/twitter.png'
import linkedin from '../../../../assets/icons/socials/linkedin.png'
import youtube from '../../../../assets/icons/socials/youtube.png'

const SocialItems = ({ item }) => {
    return (
        <>
            {
                item?.bottom &&
                <a
                    target="_blank"
                    href={`https://${item?.name}/${item?.link}`}
                    className="flex justify-center items-center flex-wrap"
                >
                    <img src={item?.name === "Facebook" && facebook || item?.name === "Twitter" && twitter || item?.name === "Linkedin" && linkedin || item?.name === "Youtube" && youtube}
                        alt="" className="rounded-full h-8 w-8 object-cover" />
                </a>
            }
        </>
    );
};

export default SocialItems;
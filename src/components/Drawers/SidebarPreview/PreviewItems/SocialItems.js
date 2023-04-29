import React from 'react';

const SocialItems = ({ item }) => {
    return (
        <>
            {
                item?.bottom === 'icon' &&
                <a
                    target="_blank"
                    href={`https://${item?.name}/${item?.link}`}
                    className="flex justify-center items-center flex-wrap"
                >
                    <img src={item?.image} alt="" className="rounded-full h-8 w-8 object-cover" />
                </a>
            }
        </>
    );
};

export default SocialItems;
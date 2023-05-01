import React, { useContext, useEffect, useState } from "react";
import { Buffer } from "buffer";
import arrowRight from '../../assets/icons/right-arrow.svg'
import avatar from '../../assets/avatars/user-avatar.png'
import useFetch from "../../Hoock/Hoock";
import PageLoader from "../../components/loaders/PageLoader";
import { AuthContext } from "../../ContextAPI/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import SendMessageForm from "../../components/ViewLiveComponents/SendMessageForm";
import LocationItems from "../../components/Drawers/SidebarPreview/PreviewItems/LocationItems";
import LinkItems from "../../components/Drawers/SidebarPreview/PreviewItems/LinkItems";
import SocialItems from "../../components/Drawers/SidebarPreview/PreviewItems/SocialItems";
const SmallDevicePreview = () => {
    const { userData } = useContext(AuthContext)
    const linksData = useFetch("links/common");
    const socialData = useFetch("links/social");
    // const galleryData = useFetch("links/gallery");
    // const menuData = useFetch("links/menu");
    // const musicData = useFetch("links/music");
    const locationsData = useFetch("links/location");

    const token = localStorage.getItem('HeyLinkToken')

    const navigate = useNavigate()

    const [data, setData] = useState([])


    const handleMessageData = () => {
        // console.log(userData?.username);
        fetch(`https://3twn4n.xn--b5bp.com/${userData?.username}`)
            .then((res) => res.json())
            .then((data) => {
                const { messageData } = data?.data
                setData(messageData[0])
            });
    }

    useEffect(() => {
        if (userData === null || !token) {
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        if (!userData === null && userData?._id) {
            handleMessageData()
        }
    }, []);

    const bufferToImage = (data) => {
        const buff = Buffer.from(
            data?.image?.data?.data
                ? data?.image?.data?.data
                : avatar
        );
        return buff?.toString("base64");
    };

    // image convarte buffer
    const buff = Buffer.from(
        userData?.image?.data?.data ? userData?.image?.data?.data : avatar
    );
    const base64 = buff?.toString("base64");

    return (
        <section className="w-full min-h-screen"
            style={{ backgroundColor: `${userData?.backgroundColor}`, color: `${userData?.pageTextColor}` }}>

            {linksData.length === 0 ? <PageLoader />
                :
                <div className="max-w-[880px] mx-auto">
                    <div
                        className="flex flex-col justify-start items-center">
                        <div className="flex flex-col justify-center items-center overflow-hidden mt-6">
                            <img
                                className="rounded-full w-20 h-20 border object-cover"
                                // src={`data:image/png;base64, ${base64}`}
                                src={`${userData?.image ? userData?.image : avatar}`}
                                alt=""
                            />
                            <h2 className="font-bold text-2xl mt-2 text-center">{userData?.profiletitle ? userData?.profiletitle : userData?.username}</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mx-auto w-full px-2 mt-4 pb-4">


                            {/* ---------------social tab data--------------- */}
                            {socialData.length > 0 && (
                                <div className="flex justify-center items-center flex-wrap gap-4 w-full">
                                    {socialData.map((item, index) => <SocialItems key={index} item={item} />)}
                                </div>
                            )}

                            {/* ---------------Link tab data--------------- */}
                            {linksData.length > 0 && (
                                <div className="grid grid-cols-1 gap-4 w-full">
                                    {linksData.map((item, index) => <LinkItems key={index} item={item} />)}
                                </div>
                            )}




                            {/* ---------------Location tab data--------------- */}
                            {locationsData.length > 0 && (
                                <div className="grid grid-cols-1 gap-4 w-full">
                                    {locationsData.map((location, index) => <>
                                        {
                                            location?.show === 'true' && <LocationItems key={index} location={location} view="public" />
                                        }
                                    </>)}
                                </div>
                            )}

                            {
                                data && data?.turnOnOffMessage === 'true' &&
                                <SendMessageForm messageData={data} />
                            }

                        </div>
                    </div>

                </div>

            }


            <div className='cursor-pointer block lg:hidden flex justify-center'>
                <div onClick={() => navigate(-1)} className='fixed bottom-8 right-auto flex gap-2 items-center justify-center w-10 h-10 rounded-full bg-gray-300 border border-blue-900'>
                    <img className='w-4' src='https://cdn-f.heylink.me/static/media/ic_close.5c9d2dc7.svg' alt="" />
                </div>
            </div>

        </section>
    );
};

export default SmallDevicePreview;
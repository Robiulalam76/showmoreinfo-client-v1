import React, { useEffect, useState } from "react";
import avatar from '../../assets/avatars/user-avatar.png'
import PageLoader from "../../components/loaders/PageLoader";
import { useLocation } from "react-router-dom";
import SendMessageForm from "../../components/ViewLiveComponents/SendMessageForm";
import LocationItems from "../../components/Drawers/SidebarPreview/PreviewItems/LocationItems";
import LinkItems from "../../components/Drawers/SidebarPreview/PreviewItems/LinkItems";
import SocialItems from "../../components/Drawers/SidebarPreview/PreviewItems/SocialItems";
const ViewLive = () => {
    const location = useLocation()
    const [data, setData] = useState([])
    const { userData, commonData, socialData, galleryData, menuData, locationData, musicData, messageData } = data;

    // console.log(messageData);

    useEffect(() => {
        const name = location.pathname.slice(1, location?.pathname?.length)
        fetch(`https://3twn4n.xn--b5bp.com/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            });
    }, []);

    const refetch = () => {
        const name = location.pathname.slice(1, location?.pathname?.length)
        fetch(`https://3twn4n.xn--b5bp.com/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            });
    }

    return (
        <section className={`w-full min-h-screen`}
            style={{ backgroundColor: `${userData?.backgroundColor}`, color: `${userData?.pageTextColor}` }} >


            {data?.length === 0 ? <PageLoader />
                :
                <div className="max-w-[880px] mx-auto">
                    {
                        !userData ? <div className="flex justify-center items-center w-full min-h-screen">
                            <h1 className="font-bold text-3xl md:text-4xl text-center">
                                URL is Wrong
                            </h1>
                        </div>
                            :
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
                                    {commonData?.length > 0 && (
                                        <div className="grid grid-cols-1 gap-4 w-full">
                                            {commonData?.map((item, index) => <LinkItems key={index} item={item} />)}
                                        </div>
                                    )}




                                    {/* ---------------Location tab data--------------- */}
                                    {locationData.length > 0 && (
                                        <div className="grid grid-cols-1 gap-4 w-full">
                                            {locationData.map((location, index) => <>
                                                {
                                                    location?.show === 'true' && <LocationItems key={index} location={location} view="public" />
                                                }
                                            </>)}
                                        </div>
                                    )}


                                    {
                                        messageData[0] && messageData[0]?.turnOnOffMessage === 'true' && <SendMessageForm messageData={messageData[0]} refetch={refetch} />
                                    }

                                </div>
                            </div>
                    }

                </div>

            }

        </section>
    );
};

export default ViewLive;
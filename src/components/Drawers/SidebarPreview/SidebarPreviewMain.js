import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../../Hoock/Hoock";
import { Link } from "react-router-dom";
import arrowRight from '../../../assets/icons/right-arrow.svg'
import avatar from '../../../assets/avatars/user-avatar.png'
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../ContextAPI/AuthProvider/AuthProvider";
import SmallLoader from "../../loaders/SmallLoader";
import SendMessageForm from "../../ViewLiveComponents/SendMessageForm";
import LocationItems from "./PreviewItems/LocationItems";
import LinkItems from "./PreviewItems/LinkItems";
import SocialItems from "./PreviewItems/SocialItems";
const SidebarPreviewMain = () => {
  const { render } = useSelector((state) => state.getData)
  const { userData } = useContext(AuthContext)
  const dispatch = useDispatch()

  const linksData = useFetch("links/common");
  const socialData = useFetch("links/social");
  // const galleryData = useFetch("links/gallery");
  // const menuData = useFetch("links/menu");
  // const musicData = useFetch("links/music");
  const locationsData = useFetch("links/location");

  const [data, setData] = useState([])


  // console.log(linksData);

  useEffect(() => {
    if (userData?._id) {
      console.log(userData?.username);
      fetch(`https://3twn4n.xn--b5bp.com/${userData?.username}`)
        .then((res) => res.json())
        .then((data) => {
          const { messageData } = data?.data
          setData(messageData[0])
        });
    }
  }, []);

  return (
    <div className="fixed flex flex-col justify-center items-center cursor-pointer">

      <div className=" bg-black pr-1 w-[320px] h-[640px] rounded-[50px] flex justify-center items-center relative">
        <div className=" h-1 w-16 bg-gray-300 rounded-3xl absolute top-6"></div>
        <div
          className="relative flex flex-col justify-start items-center h-[530px] w-[300px] mx-auto overflow-y-auto overflow-x-hidden scrollBar"
          style={{ backgroundColor: `${userData?.backgroundColor}`, color: `${userData?.pageTextColor}` }} >
          {render && !userData?._id ? <SmallLoader />
            :

            <>
              <div className="flex flex-col justify-center items-center mt-6">
                <img
                  className="rounded-full w-20 h-20 object-cover"
                  src={`${userData?.image ? userData?.image : avatar}`}
                  alt="prifle image"
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
                        location?.show === 'true' && <LocationItems key={index} location={location} />
                      }
                    </>)}
                  </div>
                )}



                {
                  data && data?.turnOnOffMessage === 'true' &&
                  <SendMessageForm messageData={data} />
                }

              </div>
            </>

          }
        </div>
        <div className=" h-8 w-8 bg-gray-300 rounded-full absolute bottom-3"></div>
      </div>

      {
        userData?._id ? <Link to={`/${userData?.username}`}
          className="w-32 h-8 bg-blue-600 rounded-2xl flex justify-center items-center mx-auto mt-4">
          <h1 className="text-white font-semibold">View Live</h1>
        </Link>
          :
          <button disabled
            className="w-32 h-8 bg-gray-600 rounded-2xl flex justify-center items-center mx-auto mt-4">
            <h1 className="text-white font-semibold">View Live</h1>
          </button>
      }

    </div>
  );
};

export default SidebarPreviewMain;

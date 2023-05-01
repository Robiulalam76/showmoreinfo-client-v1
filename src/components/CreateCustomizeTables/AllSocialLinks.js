import React from "react";
import downArrow from "../../assets/icons/link-customize-icons/down-arrow.svg";
import upArrow from "../../assets/icons/link-customize-icons/up-arrow.svg";
import swap from "../../assets/icons/link-customize-icons/swap.svg";
import edit from "../../assets/icons/link-customize-icons/edit.svg";
import blueRight from '../../assets/icons/blue-right.png'

import facebook from '../../assets/icons/socials/facebook.png'
import twitter from '../../assets/icons/socials/twitter.png'
import linkedin from '../../assets/icons/socials/linkedin.png'
import youtube from '../../assets/icons/socials/youtube.png'

import deletes from "../../assets/icons/link-customize-icons/delete.svg";
import DeleteModal from "../Modals/CommonModals/DeleteModal";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setSocialLinkName, setSocialLinkNameUpdateSuccess } from "../../Slices/socialSlice";
import { setOpen, setDeleteModal, setOpenInputChange1 } from "../../Slices/controllerSlice";
import { setRenderReducer } from "../../Slices/getDataSlice";

const AllSocialLinks = ({ socialLink }) => {
  const { socialLinkName, socialLinkNameUpdateSuccess } = useSelector((state) => state.socialSlice)
  const { open, deleteModal, openInputChange1 } = useSelector((state) => state.controllerSlice)
  const dispatch = useDispatch()

  console.log(socialLink);

  // handle update social link name
  const handleUpdateSocialLinkName = () => {
    fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/social/${socialLink?._id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ link: socialLinkName?.linkName })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.data.acknowledged) {
          toast.success('Link URL Updated')
          dispatch(setRenderReducer({ render: true }))
          dispatch(setSocialLinkName({ id: '', linkName: '' }))
          dispatch(setSocialLinkNameUpdateSuccess({ id: socialLink?._id }))
          dispatch(setOpenInputChange1(''))
        }
      })
  }

  const socialLinkNameChange = (e) => {
    if (e !== socialLink.link) {
      dispatch(setSocialLinkName({ id: socialLink?._id, linkName: e }))
    }
  }

  const handleButtonORIcon = (input) => {
    fetch(`https://3twn4n.xn--b5bp.com/app/v1/links/social/${socialLink?._id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ bottom: input })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.data.acknowledged) {
          toast.success('Data Successfully Updated')
          dispatch(setRenderReducer({ render: true }))
        }
      })
  }

  return (
    <div>
      <div className="relative my-6 flex items-center gap-2 w-full cursor-pointer">
        <div>
          <img className="w-5" src={swap} alt="" />
        </div>
        <div className="h-20 border border-gray-200 rounded-[70px] flex justify-between items-center gap-2 md:gap-6 py-4 px-2 md:px-6 w-full bg-white">


          <div className="w-full flex flex-row justify-between gap-2 items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={socialLink?.name === "Facebook" && facebook || socialLink?.name === "Twitter" && twitter || socialLink?.name === "Linkedin" && linkedin || socialLink?.name === "Youtube" && youtube}
                alt=""
              />
              <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-300">My</span>
                <span className="text-gray-300">{socialLink?.name}</span>
              </div>
            </div>

            <div className="flex-grow flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <input
                  onChange={(e) => socialLinkNameChange(e.target.value)}
                  className={`mr-3 px-2 h-8 bg-white rounded w-full focus:outline-none text-black font-bold text-xl
                      ${openInputChange1 === socialLink?._id ? "bg-blue-100 border border-blue-600" : "border-none cursor-pointer"
                    }`}
                  type="text"
                  disabled={openInputChange1 === socialLink?._id ? false : true}
                  defaultValue={socialLink.link}
                  name="linkName"
                />
                {
                  socialLinkName?.id === socialLink?._id && socialLinkName.linkName ?
                    <button onClick={() => handleUpdateSocialLinkName()} className="w-12 h-8 rounded-md bg-blue-600 text-[12px] text-white font-semibold">
                      <span>SAVE</span>
                    </button>
                    :
                    <>
                      {
                        socialLinkNameUpdateSuccess?.id !== socialLink?._id && <img onClick={() => dispatch(setOpenInputChange1(openInputChange1 ? '' : socialLink?._id))}
                          className='w-4 cursor-pointer' src={edit} alt="" />
                      }
                    </>
                }
                {
                  socialLinkNameUpdateSuccess?.id === socialLink?._id && <img className='w-4 cursor-pointer'
                    src={blueRight} alt="" />
                }
              </div>
            </div>
          </div>
        </div>

        {/* {open === socialLink?._id && (
          <div className="flex flex-col justify-center items-center gap-2 h-36 border-t border-gray-200 py-4 sm:py-0">
            <div className="relative cursor-pointer flex justify-center flex-wrap sm:flex-nowrap items-center gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-gray-500">Show as</h1>
                  <h1 className="flex justify-center items-center w-4 h-4 bg-gray-200 rounded-full text-white">
                    <span>?</span>
                  </h1>
                </div>
              </div>
              <div className="flex items-center">

                <div onClick={() => handleButtonORIcon('button')}
                  className={`flex justify-center items-center h-10 w-20 bg-blue-100 rounded-l-md 
                  ${socialLink?.bottom === 'button' && "rounded-y border border-blue-600"
                    }`}
                >
                  <h1 className="text-gray-500 p-2">Button</h1>
                </div>

                <div onClick={() => handleButtonORIcon('icon')}
                  className={`flex justify-center items-center h-10 w-20 bg-blue-100 rounded-r-md 
                  ${socialLink?.bottom === 'icon' && "rounded-y border border-blue-600"
                    }`}
                >
                  <h1 className="text-gray-500 p-2">icon</h1>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                onClick={() => dispatch(setDeleteModal(deleteModal ? '' : socialLink?._id))}
                className="flex flex-col justify-center items-center gap-2 my-1"
              >
                <img className="w-4" src={deletes} alt="" />
                <span className="text-sm text-gray-500">Delete</span>
              </div>
              {deleteModal === socialLink?._id && (
                <DeleteModal
                  endPoint={"social"}
                  id={socialLink._id}
                ></DeleteModal>
              )}
            </div>
          </div>
        )} */}

        {/* -----------toggler button start----------- */}
        {/* <div
          onClick={() => dispatch(setOpen(open ? '' : socialLink?._id))}
          className="cursor-pointer h-6 bg-gray-200 w-full flex justify-center items-center"
        >
          <img className="w-4" src={open === socialLink?._id ? upArrow : downArrow} alt="" />
        </div> */}
        {/* -----------toggler button end----------- */}
      </div>
    </div>
  );
};

export default AllSocialLinks;

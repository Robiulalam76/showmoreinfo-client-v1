import React, { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import close from "../../../assets/icons/link-customize-icons/close.svg";
import { setRenderReducer } from "../../../Slices/getDataSlice";
import ChooseIconsModal from "./ChooseIconsModal";
import { useState } from "react";
import { setUploadImageModal } from "../../../Slices/controllerSlice";

// setUploadImageModal
const ImageUploadModal = ({ closeModal, endPoint }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleImageUpload = async (e) => {
    const image = e.target.files[0]
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("https://api.imgbb.com/1/upload?key=932ae96b4af949bccda61ebea8105393", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.data.url) {
        imageUpload(data.data.url)
      }
    } catch (error) {
      console.error(error);
    }
  };


  const imageUpload = (imageURL) => {
    console.log(imageURL, endPoint);
    const url = `https://3twn4n.xn--b5bp.com/app/v1/${endPoint}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: `${imageURL}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.data.acknowledged) {
          setOpen(false)
          dispatch(setUploadImageModal(""))
          toast.success('Image Upload Successfully')
          dispatch(setRenderReducer({ render: true }))
        }
      });
  };

  let dropdownRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        dispatch(setUploadImageModal(''))
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className="cursor-pointer absolute border bottom-0 z-50 mt-2 rounded-md bg-white shadow"
    >
      <div className="p-2">
        <div className="w-full flex justify-end">
          <img
            onClick={() => dispatch(setUploadImageModal(""))}
            className="w-3"
            src={close}
            alt=""
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-6 mt-3">
            <div
              className="relative w-24 h-24 flex justify-center items-center text-[#A2A7C2] hover:text-white bg-[#F2F3F8] hover:bg-blue-600 rounded-xl"
            >
              <label className="cursor-pointer flex justify-center items-center">
                <div className=" relative flex cursor-pointer items-center justify-center">
                  <span className="p-2 text-center text-sm">
                    Upload Your own Image
                  </span>
                  <input onChange={(e) => handleImageUpload(e)}
                    type="file"
                    name="image"
                    className="w-24 h-24 top-0 z-40 absolute opacity-0 cursor-pointer"
                  />
                </div>
              </label>
            </div>


            <div onClick={() => setOpen(true)}
              className="relative w-24 h-24 flex justify-center items-center text-[#A2A7C2] hover:text-white bg-[#F2F3F8] hover:bg-blue-600 rounded-xl">
              <div className=" relative flex cursor-pointer items-center justify-center">
                <span className="p-2 text-center text-sm">
                  Choose from our icons
                </span>
              </div>
            </div>


          </div>
        </div>

        {
          open && <ChooseIconsModal imageUpload={imageUpload} closeModal={setOpen} />
        }
      </div>
    </div>
  );
};

export default ImageUploadModal;

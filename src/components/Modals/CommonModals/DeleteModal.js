import React, { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import close from "../../../assets/icons/link-customize-icons/close.svg";
import { setDeleteModal } from "../../../Slices/controllerSlice";
import { setRenderReducer } from "../../../Slices/getDataSlice";

const DeleteModal = ({ id, endPoint }) => {
  const token = localStorage.getItem("HeyLinkToken");

  const closeModal = () => {
    dispatch(setDeleteModal(''))
  }

  const dispatch = useDispatch()
  let dropdownRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        dispatch(setDeleteModal(''))
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });


  const DeleteHandle = () => {
    const url = `http://localhost:8000/app/v1/links/${endPoint}/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.acknowledged) {
          toast.success('Delete Successfully')
          dispatch(setRenderReducer({ render: true }))
          dispatch(setDeleteModal(''))
        }
      });
  };
  return (
    <div
      ref={dropdownRef}
      className="cursor-pointer absolute -right-8 border z-50 mt-2 rounded-md bg-gray-50 shadow"
    >
      <div className="p-3">
        <div className="w-full flex justify-end">
          <img
            onClick={() => closeModal()}
            className="w-3"
            src={close}
            alt=""
          />

        </div>
        <div>
          <h1 className="text-gray-900 font-bold text-center py-2">Delete</h1>
          <p className="text-sm text-red-400 text-center">
            Are you sure you want to delete this link? You can't undo this
            action.
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
          <button
            onClick={() => closeModal(false)}
            class="bg-red-500 px-4 py-2 rounded-md text-md text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => DeleteHandle()}
            class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

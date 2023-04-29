import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import arrowDown from "../../../../../assets/icons/social-tab-icons/arrow-down.svg";
import empty from "../../../../../assets/icons/social-tab-icons/empty.svg";
import AllSocialLinks from "../../../../../components/CreateCustomizeTables/AllSocialLinks";
import PageLoader from "../../../../../components/loaders/PageLoader";
import { AuthContext } from "../../../../../ContextAPI/AuthProvider/AuthProvider";
import useFetch from "../../../../../Hoock/Hoock";
import { setRenderReducer } from "../../../../../Slices/getDataSlice";
import { setInputError, setSearch, setSearchSocials, setSelectedSocial, setSocialImg, setUsernamePlaceholder } from "../../../../../Slices/socialSlice";

const SocialTab = () => {
  const {
    socials,
    searchSocials,
    selectedSocial,
    usernamePlacehoder,
    socialImg,
    search,
    inputError
  } = useSelector((state) => state.socialSlice)
  const { render } = useSelector((state) => state.getData)
  const dispatch = useDispatch()
  const { userData } = useContext(AuthContext)
  const data = useFetch("links/social");

  let dropdownRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        dispatch(setSearch(false))
        dispatch(setSearchSocials([]));
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSocialSet = (url, name, img) => {
    dispatch(setSelectedSocial(name))
    dispatch(setUsernamePlaceholder(url))
    dispatch(setSocialImg(img))
  };


  // handle search social media
  const handleSearchSocial = (e) => {
    const results = socials.filter((social) => social?.name.toLowerCase().includes(e.toLowerCase()))
    dispatch(setSearchSocials(results));
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const data = {
      image: socialImg,
      name: selectedSocial,
      link: username,
      userInfo: userData?._id,
    };

    fetch(`http://localhost:8000/app/v1/links/social`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("HeyLinkToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((data) => {
        event.target.reset();
        toast.success('Socail Address Add Successfully')
        dispatch(setRenderReducer({ render: true }))
        dispatch(setInputError(''))
      });
  };
  return (
    <section className="min-h-screen pb-6">
      <div className="px-2 w-full lg:max-w-[960px] mx-auto cursor-pointer">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6 w-full">
          <div className="relative">
            <div
              onClick={() => dispatch(setSearch(!search))}
              className="relative border-b flex justify-between items-center px-4 h-12 w-full bg-white"
            >
              <div className="flex items-center gap-4">
                <img className="w-6" src={socialImg && socialImg} alt="" />
                <h1>{selectedSocial}</h1>
              </div>
              <div>
                <img className="w-3" src={arrowDown} alt="" />
              </div>
            </div>
            {search && (
              <div
                ref={dropdownRef}
                className="w-full top-12 border-x border-b right-0 cursor-pointer absolute z-50 border bg-gray-50 shadow"
              >
                <div className="p-3">
                  <div className="w-full h-12 border border-blue-600 bg-white">
                    <input onChange={(e) => handleSearchSocial(e.target.value)}
                      className="w-full h-full rounded-[50px] px-4 text-gray-400 bg-white focus:outline-none border-none"
                      type="search"
                      placeholder="Start typing or select..."
                    />
                  </div>
                </div>
                <div className="w-full h-44 border-t overflow-y-auto bg-white">
                  {searchSocials?.length > 0 ? <>
                    {
                      searchSocials?.map((s) => (
                        <div
                          onClick={() => handleSocialSet(s.url, s.name, s.img)}
                          className="h-8 w-full flex items-center gap-4 mb-2 hover:bg-blue-200 px-2"
                        >
                          <img className="w-6" src={s.img} alt="" />
                          <h1 className="text-gray-900">{s.name}</h1>
                        </div>
                      ))
                    }
                  </>
                    :
                    <>
                      {
                        socials?.map((s) => (
                          <div
                            onClick={() => handleSocialSet(s.url, s.name, s.img)}
                            className="h-8 w-full flex items-center gap-4 mb-2 hover:bg-blue-200 px-2"
                          >
                            <img className="w-6" src={s.img} alt="" />
                            <h1 className="text-gray-900">{s.name}</h1>
                          </div>
                        ))
                      }
                    </>
                  }
                </div>
              </div>
            )
            }
          </div>

          <div className="rounded-[50px] h-12 w-full bg-blue-50">
            <input
              onChange={(e) => dispatch(setInputError(e.target.value))}
              className="w-full h-full rounded-[50px] px-4 focus:text-gray-400 text-gray-400 bg-blue-50 focus:outline-none border-none"
              name="username"
              type="text"
              placeholder={`${usernamePlacehoder}usrname`}
            />
          </div>

          {inputError && selectedSocial !== "Select Popular Social Link" ? (
            <button className=" flex justify-center items-center gap-1 px-4 rounded-[50px] h-12 mx-auto w-full bg-blue-600 hover:bg-blue-700 duration-150">
              <h1 className="text-white font-semibold">+ Add</h1>
              <h1 className="text-white font-semibold">
                {selectedSocial}
              </h1>
            </button>
          ) : (
            <button disabled className="cursor-not-allowed  flex justify-center items-center gap-1 px-4 rounded-[50px] h-12 mx-auto w-full bg-[#9FC1EA]">
              <h1 className="text-white font-semibold">
                + Add
              </h1>
              <h1 className="text-white font-semibold">
                {selectedSocial}
              </h1>
            </button>
          )}
        </form>
      </div>

      {
        render ? <PageLoader />
          :
          <div>
            {data?.length > 0 && data?.map((socialLink) => <AllSocialLinks socialLink={socialLink} />)}
            {data?.length === 0 && (
              <div className="flex flex-col justify-center items-center mt-12">
                <img className="md:w-96" src={empty} alt="" />
                <p className="text-center mt-6 text-gray-400">
                  You haven't added any Social Links
                </p>
              </div>
            )}
          </div>
      }

    </section>
  );
};

export default SocialTab;

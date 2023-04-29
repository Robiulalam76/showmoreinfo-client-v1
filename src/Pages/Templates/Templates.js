import React, { useEffect, useRef, useState } from "react";
import Navber from "../Shared/Navber/Navber";
import AllTempletes from "./AllTempletes";

const Templates = () => {
  const [dropdown, setDropdown] = useState(false);
  const [viewCategory, setViewCategory] = useState("1");
  const categories = [
    { id: "1", name: "All Templetes" },
    { id: "2", name: "Creators" },
    { id: "3", name: "Musicians" },
    { id: "4", name: "NFT & Crypto" },
    { id: "5", name: "Brand & Business" },
    { id: "6", name: "Simple" },
  ];

  const handleViewCategory = (id) => {
    setViewCategory(id)
    setDropdown(false)
  }

  let dropdownRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <section className="bg-[#393AA7]">
      <Navber />
      <div className="text-center text-white px-8">
        <h1 className="font-bold text-4xl md:text-6xl text-center">
          Free Templates
        </h1>
        <p className="text-2xl md:text-3xl mt-6">
          Create Your HeyLink.me bio link in seconds!
        </p>
      </div>

      <div
        ref={dropdownRef}
        className="cursor-pointer relative lg:hidden mt-8 flex justify-center py-6"
      >
        <button
          onClick={() => setDropdown(!dropdown)}
          className="flex justify-between items-center gap-6 border-2 border-white text-white py-3 px-4 rounded-[50px]"
        >
          <span className="pr-16 font-bold text-xl">All Templetes</span>
          <svg
            className="text-sky-500 w-6"
            xmlns="https://www.w3.org/2000/svg"
            width="7"
            height="10"
          >
            <path
              d="M6.745 5.582L2.403 9.8a.838.838 0 01-1.083.053A.838.838 0 01.237 9.8a.772.772 0 010-1.123L4 5.02.237 1.363a.772.772 0 010-1.123A.84.84 0 011.32.187.84.84 0 012.403.24l4.342 4.218a.773.773 0 010 1.124z"
              fill="#FFF"
            ></path>
          </svg>
        </button>
        {dropdown && (
          <div className="z-10 absolute left-54 top-24 w-72 rounded-lg bg-white py-5 grid grid-cols-1">
            {categories.map((category) => (
              <button
                onClick={() => setViewCategory(category.id)}
                className="hover:bg-slate-100 px-4 py-4 text-sky-600 font-semibold text-left"
              >
                <span className="text-xl">{category.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* only medium device  */}
      <div className="hidden lg:block lg:grid lg:grid-cols-6 gap-4 mx-auto py-8 px-12 cursor-pointer">
        {categories.map((category) => {
          return (
            <div
              onClick={() => handleViewCategory(category.id)}
              className={`flex justify-center items-center border-2 border-white text-white hover:text-sky-600 hover:bg-white lg:py-2 lg:px-4 rounded-[50px] font-semibold lg:text-[16px] ${viewCategory === category.id && "bg-white text-sky-600"
                }`}
            >
              <span>{category.name}</span>
            </div>
          );
        })}
      </div>

      <div className="bg-[#393AA7] relative">
        <div className="bg-white min-h-screen flex justify-center py-12">
          <div className="max-w-[1440px] mx-auto">
            {viewCategory === "1" && <AllTempletes />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;

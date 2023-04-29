{
    open === url?._id && (
        <div className="h-full border-t border-gray-200 py-12">
            <div className="relative cursor-pointer flex justify-center flex-wrap sm:flex-nowrap items-center gap-6  ">
                {/* -----------Move to Top start----------- */}
                {url?.moveToBottom === 'true' ?
                    <div onClick={() => handleMoveUpdate(false)} className="flex flex-col justify-center items-center gap-2">
                        <div>
                            <img className="w-4" src={moveToDown} alt="" />
                        </div>
                        <h1 className="text-gray-400 text-sm">Move to Down</h1>
                    </div>
                    :
                    <div onClick={() => handleMoveUpdate(true)} className="flex flex-col justify-center items-center gap-2">
                        <div>
                            <img className="w-4" src={moveToTop} alt="" />
                        </div>
                        <h1 className="text-gray-400 text-sm">Move to Top</h1>
                    </div>
                }
                {/* -----------Move to Top end----------- */}

                {/* -----------schedule start----------- */}
                <div
                    onClick={() => dispatch(setOpenSchedule(openSchedule ? '' : url?._id))}
                    className="flex flex-col justify-center items-center gap-2"
                >
                    <div>
                        <img className="w-4" src={schedule} alt="" />
                    </div>
                    <h1 className="text-gray-400 text-sm">schedule</h1>
                </div>
                {/* -----------schedule end----------- */}

                {/* -----------effects start----------- */}
                <div className="relative ">
                    <div
                        onClick={() => dispatch(setOpenEffcetsModal(openEffcetsModal ? '' : url?._id))}
                        className="flex flex-col justify-center items-center gap-2"
                    >
                        <div>
                            <img className="w-4" src={effects} alt="" />
                        </div>
                        <h1 className="text-gray-400 text-sm">effects</h1>
                    </div>
                    {openEffcetsModal === url?._id && <EffectsModal url={url} />}
                </div>
                {/* -----------effects end----------- */}

                {/* -----------Fast Link start----------- */}
                <div className="relative">
                    <div
                        onClick={() => dispatch(setFastLinkProModal(fastLinkProModal ? '' : url?._id))}
                        className="flex flex-col justify-center items-center gap-2"
                    >
                        <div className="relative">
                            <img className="w-4" src={fire} alt="" />

                            <div className="absolute -top-4 -right-3 flex justify-center items-center w-10 h-4 rounded-3xl bg-[#F06957]">
                                <img className="w-7" src={lock} alt="" />
                            </div>
                        </div>
                        <h1 className="text-gray-400 text-sm">Fast Link</h1>
                    </div>
                    {fastLinkProModal === url?._id && <FastLinkProModal />}
                </div>
                {/* -----------Fast Link end----------- */}

                {/* -----------only small device show----------- */}
                <div className="relative cursor-pointer">
                    <div
                        onClick={() => setDeleteModal(!deleteModal)}
                        className="sm:hidden flex flex-col justify-center items-center gap-2"
                    >
                        <div>
                            <img className="w-4" src={deletes} alt="" />
                        </div>
                        <h1 className="text-gray-400 text-sm">Delete</h1>
                    </div>
                    {/* -----------only small device show end----------- */}
                </div>

            </div>

            {openSchedule === url?._id &&
                <div className="mt-4 w-full md:ml-8 relative">
                    <h1 className="font-bold text-black text-left mb-3">Schedule Link</h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-gray-500 font-semibold text-left">Active From</h1>
                            <div onClick={() => dispatch(setStartDateCalander(startDateCalander ? '' : url?._id))}
                                className="flex items-center justify-between gap-2 w-72 px-2 h-12 rounded-md bg-gray-200">
                                <input className="cursor-pointer w-full focus:outline-none border-none bg-gray-200 text-gray-600" type="text" value={url?.activeFrom && url?.activeFrom} readOnly placeholder="Select Date" />
                                <img className="w-5" src={schedule} alt="" />
                            </div>
                            {startDateCalander === url?._id &&
                                <CalanderData selectedDate={url?.activeFrom} setSelectedDate={handleActiveFrom} />
                            }
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-gray-500 font-semibold text-left">Active Until</h1>
                            <div onClick={() => dispatch(setEndDateCalander(endDateCalander ? '' : url?._id))}
                                className="flex items-center justify-between gap-2 w-72 px-2 h-12 rounded-md bg-gray-200">
                                <input className="cursor-pointer w-full focus:outline-none border-none bg-gray-200 text-gray-600" type="text" value={url?.activeUntile && url?.activeUntile} readOnly placeholder="Select Date" />
                                <img className="w-5" src={schedule} alt="" />
                            </div>
                            {endDateCalander === url?._id &&
                                <CalanderData selectedDate={url?.activeUntile} setSelectedDate={handleActiveUntile} />
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

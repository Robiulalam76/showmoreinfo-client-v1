import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowDown from '../../../../../assets/icons/appearance-tab-icons/arrow-down.svg'
import { setOpenJump, setOpenJumpName } from '../../../../../Slices/appearanceSlice';
import { setOpenTab } from '../../../../../Slices/controllerSlice';
import CustomeTheme from '../CustomeTheme/CustomeTheme/CustomeTheme';
import PlacementManager from '../PlacementManager/PlacementManager';
import AvatarTitle from '../QuicklyItems/AvatarTitle';
import LayoutSimple from '../QuicklyItems/LayoutSimple';
import Shortcut from '../QuicklyItems/Shortcut';
import ShortUserName from '../QuicklyItems/ShortUserName';
import UserName from '../QuicklyItems/UserName';
import PageAppearance from '../QuicklyItems/PageAppearance';

const Appearance = () => {
    const { jumpItems, openJump, openJumpName } = useSelector((state) => state.appearanceSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setOpenTab(false))
    }, [])

    return (
        <section className='min-h-screen py-6 cursor-pointer'>
            {/* <div onClick={() => dispatch(setOpenJump(!openJump))}
                className='flex justify-between items-center gap-4 mb-4'>
                <h1>Quickly jump to:</h1>
                <div className='relative flex-grow md:flex-grow-0'>
                    <div className='flex justify-between items-center px-2 w-full md:w-[500px] h-12 bg-gray-200 text-black rounded-md'>
                        <h1>{openJumpName}</h1>
                        <img className='w-4' src={arrowDown} alt="" />
                    </div>
                    {
                        openJump && <div className='z-50 absolute w-full md:w-[500px] h-fit max-h-56 overflow-y-auto bg-white border'>
                            {
                                jumpItems.map(item => <div onClick={() => dispatch(setOpenJumpName(item.name))}
                                    className='w-full h-10 hover:bg-gray-200 flex justify-start items-center gap-4 px-4'>
                                    <img className='w-5' src={item.img} alt="" />
                                    <a className='' href={'#' + item.name.toLowerCase()}>{item.name}</a>
                                </div>)
                            }
                        </div>
                    }
                </div>
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                {/* <Shortcut /> */}
                <UserName />
                {/* <ShortUserName /> */}
                {/* <LayoutSimple /> */}
                <AvatarTitle />
                <PageAppearance />
            </div>
            {/* <div className='mt-6'>
                <PlacementManager />
                <CustomeTheme />
            </div> */}
        </section>
    );
};

export default Appearance;
import React, { useEffect, useState } from 'react';
import PreviewDrawer from '../../../components/Drawers/SidebarPreview/PreviewDrawer';
import DashboardNavber from '../DashboardNavber/DashboardNavber';
import LinkTabs from '../LinkTabs/AllLinkTabs/LinkTabs';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarPreviewMain from '../../../components/Drawers/SidebarPreview/SidebarPreviewMain';
import PreviewSmallBtn from '../../../components/Drawers/SidebarPreview/PreviewSmallBtn';
import { useDispatch } from 'react-redux';
import { setOpenTab } from '../../../Slices/controllerSlice';

const Dashboard = () => {
    const [preview, setPreview] = useState(true)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    if (pathname === '/dashboard') {
        dispatch(setOpenTab(true))
    }

    // console.log(object);

    return (
        <section className='bg-[#393AA7] min-h-screen'>
            <div className='min-h-screen max-w-[1440px] mx-auto md:py-6'>
                <div className={` ${preview && 'lg:grid lg:grid-cols-4 lg:gap-4'} md:px-3`}>
                    <div className='lg:col-span-3 bg-white md:rounded-3xl md:shadow relative'>
                        <DashboardNavber />
                        <LinkTabs />
                        <div className='my-6 px-2 md:px-12'>
                            <Outlet />
                        </div>

                        {/* -------Preview Drawer icon start------- */}
                        <PreviewDrawer preview={preview} setPreview={setPreview} />
                    </div>
                    <div className={`${!preview && 'hidden'}`}>
                        <SidebarPreviewMain />
                    </div>

                </div>
            </div>

            <PreviewSmallBtn />
        </section>
    );
};

export default Dashboard;
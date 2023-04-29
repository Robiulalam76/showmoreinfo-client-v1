import React from 'react';
import { Outlet } from 'react-router-dom';
import ViewLive from '../Pages/LiveViewPage/ViewLive';

const ViewLiveLayout = () => {
    return (
        <div>
            <ViewLive />
        </div>
    );
};

export default ViewLiveLayout;
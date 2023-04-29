import React, { useState } from 'react';
import Images from '../GridSmallTabs/Images';
import ShapAndSizeInGrid from '../GridSmallTabs/ShapAndSizeInGrid';

const GridTab = () => {
    const [gridTabView, setGridTabView] = useState(1);
    return (
        <>
            <div className='cursor-pointer mt-4 flex items-center flex-wrap md:flex-nowrap gap-6 w-full'>
                <div onClick={() => setGridTabView(1)}
                    className={`border-b-2 border-white ${gridTabView === 1 && 'border-green-500'}`}>
                    <h1 className='mb-2 text-black text-sm'>Images</h1>
                </div>
                <div onClick={() => setGridTabView(2)}
                    className={`border-b-2 border-white ${gridTabView === 2 && 'border-green-500'}`}>
                    <h1 className='mb-2 text-black text-sm'>Shap & Size</h1>
                </div>
            </div>

            <hr className='border-gray-200' />

            <div>
                {
                    gridTabView === 1 && <Images />
                }
                {
                    gridTabView === 2 && <ShapAndSizeInGrid />
                }
            </div>
        </>
    );
};

export default GridTab;
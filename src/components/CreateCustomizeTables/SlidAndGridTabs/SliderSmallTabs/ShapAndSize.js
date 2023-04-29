import React, { useEffect, useRef, useState } from 'react';
import downArrow from '../../../../assets/icons/down-arrow.svg'
import rightArrow from '../../../../assets/icons/right-arrow.svg'

const shapAndSizes = [
    'Square 1:1 (Width:Height)',
    'Landscape 4:3 (Width:Height)',
    'Vertical 3:4 (Width:Height)'
]

const ShapAndSize = ({ initialAdvanceImagesAutomatic, getAdvanceImagesAutomatic, initialHeightWidth, getHeightWidth }) => {
    const [viewShapAndSizes, setViewShapAndSizes] = useState(false)


    let outSideRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!outSideRef.current.contains(e.target)) {
                setViewShapAndSizes(false)
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section>
            <div className='relative cursor-pointer mt-4'>
                <div onClick={() => setViewShapAndSizes(!viewShapAndSizes)}
                    className='h-12 w-full bg-gray-100 flex justify-between items-center px-4'>
                    <h1 className='text-gray-600'>{initialHeightWidth}</h1>
                    {
                        viewShapAndSizes ? <img className='w-5' src={downArrow} alt="" />
                            :
                            <img className='w-5' src={rightArrow} alt="" />
                    }
                </div>
                {
                    viewShapAndSizes && <div ref={outSideRef} className='absolute w-full z-10 border py-2 bg-white'>
                        {shapAndSizes.map(shapSize => <div onClick={() => getHeightWidth(shapSize)}
                            className='w-full h-10 flex justify-start items-center px-4 hover:bg-gray-200'>
                            <h1 className={`text-gray-900 ${initialHeightWidth === shapSize && 'font-semibold'}`} >{shapSize}</h1>
                        </div>
                        )}
                    </div>
                }

                <div onClick={() => getAdvanceImagesAutomatic(!initialAdvanceImagesAutomatic)}
                    className='flex items-center gap-4 mt-4'>
                    <input className='cursor-pointer'
                        checked={initialAdvanceImagesAutomatic} type="checkbox" name="advanceImage" id="advanceImage" />
                    <p className='cursor-pointer'>Advance images automatically</p>
                </div>
            </div>
        </section>
    );
};

export default ShapAndSize;
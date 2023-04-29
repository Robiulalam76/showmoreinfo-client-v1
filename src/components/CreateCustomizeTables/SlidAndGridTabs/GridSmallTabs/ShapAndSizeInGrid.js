import React, { useEffect, useRef, useState } from 'react';
import downArrow from '../../../../assets/icons/down-arrow.svg'
import rightArrow from '../../../../assets/icons/right-arrow.svg'

const shapAndSizes = [
    '1 item per Row',
    '2 items per Row',
    '3 items per Row'
]
const ShapAndSizeInGrid = () => {
    const [viewShapAndSizes, setViewShapAndSizes] = useState(false)
    const [addShapAndSize, setAddShapAndSize] = useState('1 item per Row')


    const advanceImagesAutomatic = (e) => {
        if (e.checked) {
            alert('check');
        } else {
            alert('unchecked');
        }
    }

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
        <div className='relative cursor-pointer mt-4'>
            <h1 className='text-black font-semibold mb-2'>Images Per Row</h1>
            <div onClick={() => setViewShapAndSizes(!viewShapAndSizes)}
                className='h-12 w-full bg-gray-100 flex justify-between items-center px-4'>
                <h1 className='text-gray-600'>{addShapAndSize}</h1>
                {
                    viewShapAndSizes ? <img className='w-5' src={downArrow} alt="" />
                        :
                        <img className='w-5' src={rightArrow} alt="" />
                }
            </div>
            {
                viewShapAndSizes && <div ref={outSideRef} className='absolute w-full z-10 border py-2 bg-white'>
                    {shapAndSizes.map(shapSize => <div onClick={() => setAddShapAndSize(shapSize)}
                        className='w-full h-10 flex justify-start items-center px-4 hover:bg-gray-200'>
                        <h1 className={`text-gray-900 ${addShapAndSize === shapSize && 'font-semibold'}`} >{shapSize}</h1>
                    </div>
                    )}
                </div>
            }
        </div>
    );
};

export default ShapAndSizeInGrid;
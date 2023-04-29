import React, { useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ getColor, closePicker, action }) => {
    const [color, setColor] = useState('');

    const handleChangeComplete = (color) => {
        setColor(color.hex);
        getColor(color.hex)
    };

    let outSideRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!outSideRef.current.contains(e.target)) {
                closePicker(0)
                action()
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div ref={outSideRef} className="absolute z-10">
            <SketchPicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
}


export default ColorPicker
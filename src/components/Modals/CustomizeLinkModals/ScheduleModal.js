import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const ScheduleModal = ({ closeModal }) => {
    const [selectedDate, setSelectedDate] = useState(new Date)


    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                closeModal(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });


    return (
        <div className='flex justify-center'>
            <div ref={menuRef} class="fixed w-fit mx-auto bg-white top-10 right-2/5 shadow-xl rounded-md z-50 md:h-fit flex justify-center p-10">
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;
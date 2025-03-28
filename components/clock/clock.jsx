import React, { useEffect, useState, useRef } from 'react';
import 'styles/clock/clock.css';

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='container'>
            <div className='clock-container'>
                <div className='clock'>
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })}
                </div>
            </div>
            <div className='date-container'>
                <div className='date'>
                    {time.toLocaleDateString(undefined, options)}
                </div>
            </div>
        </div>
    );
};


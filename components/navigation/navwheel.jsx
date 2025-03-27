'use client';

import React, { useEffect, useState, useRef } from 'react';
import 'styles/navigation/navwheel.css';

export default function Navwheel() {

    const [isMouseDown, setMouseDown] = useState(false);
    const navRef = useRef();
    // just fix this shit next time
    // rotating navwheel or sumthing

    const handleMouseDown = () => {
        setMouseDown(true);
        console.log('down');
    };

    const handleMouseUp = () => {
        setMouseDown(false);
        console.log('up');
    };



    return (
        <div className='main-container' id='main-container'>
            <div className='navwheel' id='navwheel'
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                ref={navRef}
            >
                <ul>
                    <li><a href="#"></a>ONE</li>
                    <li><a href="#"></a>TWO</li>
                    <li><a href="#"></a>THREE</li>
                    <li><a href="#"></a>FOUR</li>
                    <li><a href="#"></a>FIVE</li>
                    <li><a href="#"></a>SIX</li>
                </ul>
            </div>
            
        </div>
    )
}
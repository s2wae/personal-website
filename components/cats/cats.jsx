'use client';

import React, { useEffect, useState } from 'react';
import 'styles/cats/cats.css';



export default function Navwheel() {

    const [number, setNumber] = useState(0);
    const [dyCat, setDyCat] = useState('/images/cats/dy_cat.gif');
    const [ianCat, setIanCat] = useState('/images/cats/ian_cat.gif');

    function tailWag() {
        setDyCat('/images/cats/dy_cat.gif');
        setIanCat('/images/cats/ian_cat.gif');
    }

    return (
        <div>
            <div className='cat-container'>
                <img className='iancat image pixelated' src={ianCat} alt='ian_cat' />
                <img className='dycat image pixelated' src={dyCat} alt='dy_cat' />
            </div>
            <div className='cat-shadow' />
        </div>
    )
}
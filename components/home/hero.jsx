'use client';

import React, { useEffect, useState, useRef } from 'react';
import 'styles/home/hero.css';


export default function Hero() {
    return (
        <div className='container'>
            <div className='hero-container'>
                <div className='picture-line-wrapper'>
                    <hr className='picture-line style1' />

                    <div className='picture-wrapper picline1-pic1 picline1'>
                        <img className='picture' src='./images/us/us1.jpg' alt='us1' />
                    </div>
                    <div className='picture-wrapper picline1-pic2 picline1' >
                        <img className='picture' src='./images/us/us2.jpg' alt='us2' />
                    </div>
                    <div className='picture-wrapper picline1-pic3 picline1'>
                        <img className='picture' src='./images/us/us3.jpg' alt='us3' />
                    </div>
                    <div className='picture-wrapper picline1-pic4 picline1'>
                        <img className='picture' src='./images/us/us4.jpg' alt='us4' />
                    </div>
                </div>

                <div className='picture-line-wrapper'>
                    <hr className='picture-line style2' />
                    <div className='picture-wrapper picline2-pic1 picline2'>
                        <img className='picture' src='./images/us/us5.jpg' alt='us5' />
                    </div>
                    <div className='picture-wrapper picline2-pic2 picline2' >
                        <img className='picture' src='./images/us/us6.jpg' alt='us6' />
                    </div>
                    <div className='picture-wrapper picline2-pic3 picline2'>
                        <img className='picture' src='./images/us/us7.jpg' alt='us7' />
                    </div>
                    <div className='picture-wrapper picline2-pic4 picline2'>
                        <img className='picture' src='./images/us/us8.jpg' alt='us8' />
                    </div>
                </div>
            </div>
        </div>
    )
}
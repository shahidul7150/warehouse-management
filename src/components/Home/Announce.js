import React, { useState } from 'react';
import './Announce.css';
const Announce = () => {
    const [announceStyle, setAnnounceStyle] = useState('background1 text-white d-flex justify-items-center justify-content-between px-5 display-6')
    
    const handleClose = () => {
        setAnnounceStyle(announceStyle + " d-none")
    }
    return (
        <div className={announceStyle}>
            <h1>Hurry up it's 40% off now</h1>
            <h2 className='cursor-pointer' onClick={handleClose}>x</h2>
           
        </div>
    );
};

export default Announce;
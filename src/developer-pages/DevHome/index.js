import React from 'react';
import headerImage from '../../images/web-development-ad.webp';
import './style.css';


function Developer() {
    return (
        <>
            <img
                src={headerImage}
                alt="Web development services"
                className="header-image"
            />
        </>
    )
};

export default Developer;
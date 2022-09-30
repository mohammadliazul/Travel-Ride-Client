import React from 'react';
// import { Image } from 'react-bootstrap';
// import bannerImg from '../../Images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-main position-relative'>
            {/* <Image className='banner img-fluid' src={bannerImg} /> */}
            <h1 className='quote'>“Travel is the only thing you buy that makes you richer.”</h1>
        </div>
    );
};

export default Banner;
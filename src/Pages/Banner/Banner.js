import React from 'react';
// import { Image } from 'react-bootstrap';
// import bannerImg from '../../Images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-main position-relative'>
            {/* <Image className='banner img-fluid' src={bannerImg} /> */}
            <h2 className='quote'>Book unique homes and experiences all over the world.</h2>
        </div>
    );
};

export default Banner;
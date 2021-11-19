import React from 'react';
import { Image } from 'react-bootstrap';
import bannerImg from '../../Images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-div'>
            <Image className='banner img-fluid' src={bannerImg} />
        </div>
    );
};

export default Banner;
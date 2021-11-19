import React from 'react';
import { Image } from 'react-bootstrap';
import notFound from '../../Images/notFound.jpeg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Image className='img' src={notFound} />
        </div>
    );
};

export default NotFound;
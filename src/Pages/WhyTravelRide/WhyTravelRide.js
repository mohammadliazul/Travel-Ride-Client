import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img1 from '../../Images/1.png';
import img2 from '../../Images/2.png';
import img3 from '../../Images/3.png';
import img4 from '../../Images/4.png';
import img5 from '../../Images/5.png';
import img6 from '../../Images/6.png';
import './WhyTravelRide.css';

const advantages = [
    {
        "id":1,
        "pic": img1,
        "title": 'PERSONALIZED MATCHING',
        "sub_title": 'Our search system helps you find a personalized tour in just a few clicks.'
    },
    {
        "id":2,
        "pic": img2,
        "title": 'WIDE VARIETY OF DESTINATIONS',
        "sub_title": 'With Travel-Ride, you’ll find a perfect destination among hundreds available.'
    },
    {
        "id":3,
        "pic": img3,
        "title": 'HIGHLY QUALIFIED SERVICE',
        "sub_title": 'Our high level of service is officially recognized by thousands of clients.'
    },
    {
        "id":4,
        "pic": img4,
        "title": '24/7 SUPPORT',
        "sub_title": 'Our travel agents are always there to support you during your trip.'
    },
    {
        "id":5,
        "pic": img5,
        "title": 'HANDPICKED HOTELS',
        "sub_title": 'We pick the hotels with the utmost reputation and positive reviews.'
    },
    {
        "id":6,
        "pic": img6,
        "title": 'BEST PRICE GUARANTEE',
        "sub_title": "We guarantee you'll get top-notch comfort at an affordable price."
    },
]

const WhyTravelRide = () => {
    return (
        <div className='banner-bg'>
            <div className='py-5'>
                <div>
                    <h1 className='text-center mb-5'>Why <span>Travel-Ride</span></h1>
                </div>
                <Container>
                    <Row className='mt-3'>
                    {advantages.map(({id, title, sub_title, pic}) =>
                        <Col xs={12} md={6} lg={4}>
                            <div  className='d-flex align-items-center p-3 bg-white mb-3 rounded'>
                                <div>
                                    <Image className='icon p-4 m-3' src={pic} />
                                </div>
                                <div className='ps-3'>
                                    <h6 className='text-bold'>{title}</h6>
                                    <p className='text'>{sub_title}</p>
                                </div>
                            </div>
                        </Col>)}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default WhyTravelRide;
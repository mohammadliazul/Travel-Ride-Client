import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img1 from '../../Images/1.png';
import img2 from '../../Images/2.png';
import img3 from '../../Images/3.png';
import img4 from '../../Images/4.png';
import img5 from '../../Images/5.png';
import img6 from '../../Images/6.png';
import './WhyTravelRide.css';

const WhyTravelRide = () => {
    return (
        <div className='banner-bg'>
            <div className='py-5'>
                <div>
                    <h1 className='text-center mb-2'>Why <span>Travel-Ride</span></h1>
                </div>
                <Container>
                    <Row className='mt-3'>
                        <Col xs={12} md={6} lg={4}>
                            <div className='d-flex align-items-center p-3 bg-white mb-3'>
                                <div>
                                    <Image className='icon p-4 m-3  ' src={img1} />
                                </div>
                                <div className='ps-3'>
                                    <h6 className='text-bold'>PERSONALIZED MATCHING</h6>
                                    <h6 className='text'>Our search system helps you find a personalized tour in just a few clicks.</h6>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} >
                            <div className='d-flex align-items-center p-3 bg-white mb-3'>
                                <div>
                                    <Image className='icon p-4 m-3 ' src={img2} />
                                </div>
                                <div className='ps-3'>
                                    <h6 className='text-bold'>WIDE VARIETY OF DESTINATIONS</h6>
                                    <h6 className='text'>With Travel-Ride, you’ll find a perfect destination among hundreds available.</h6>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} >
                            <div className='d-flex align-items-center p-3 bg-white'>
                                <div>
                                    <Image className='icon p-4 m-3' src={img3} />
                                </div>
                                <div className='ps-3'>
                                    <h6 className='text-bold'>HIGHLY QUALIFIED SERVICE</h6>
                                    <h6 className='text'>Our high level of service is officially recognized by thousands of clients.</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col xs={12} md={6} lg={4} >
                            <div className='d-flex align-items-center p-3 bg-white mb-3'>
                                <div>
                                    <Image className='icon p-4 m-3' src={img4} />
                                </div>
                                <div className='ps-3'>
                                    <h6 className='text-bold'>24/7 SUPPORT</h6>
                                    <h6 className='text'>Our travel agents are always there to support you during your trip.</h6>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4} >
                            <div className='d-flex align-items-center p-3 bg-white mb-3'>
                                <div>
                                    <Image className='icon p-4 m-3' src={img5} />
                                </div>
                                <div className='ps-3'>
                                    <h6 className='text-bold'>HANDPICKED HOTELS</h6>
                                    <h6 className='text'>We pick the hotels with the utmost reputation and positive reviews.</h6>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className='d-flex align-items-center p-3 bg-white '>
                                <div>
                                    <Image className='icon p-4 m-3' src={img6} />
                                </div>
                                <div className='ps-3'>
                                    <h6 className='text-bold'>BEST PRICE GUARANTEE</h6>
                                    <h6 className='text'>We guarantee you’ll get top-notch comfort at an affordable price.</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default WhyTravelRide;
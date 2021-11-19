import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AiFillFacebook, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark py-3'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 href="#" className='footer-logo mt-3'>Travel Ride</h2>
                        <Nav className="d-flex justify-content-center align-items-center">
                            <NavLink as={HashLink} to='/home#home' className='nav-Link fw-3 text-white hv fs-5' >Home</NavLink>
                            <NavLink as={HashLink} to='/tours' className='nav-Link fw-3 text-white hv fs-5' >Tours</NavLink>
                            <NavLink to='/myTour' className='nav-Link fw-3 text-white hv fs-5' >My Tour</NavLink>
                            <NavLink to='/admin' className='nav-Link fw-3 text-white hv fs-5' >Admin</NavLink>
                        </Nav>
                        <ul className="d-flex justify-content-center align-items-center social-icon my-4 p-0">
                            <li><AiFillFacebook className='fill-color fb' style={{ fontSize: '44px' }} /></li>
                            <li><AiFillYoutube className='fill-color utube' style={{ fontSize: '57px' }} /></li>
                            <li><FaWhatsappSquare className='fill-color whatapp' style={{ fontSize: '42px' }} /></li>
                            <li><AiFillTwitterSquare className='fill-color twit' style={{ fontSize: '45px' }} /></li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12 text-center">
                        <p className="copyright text-white">
                            Copyright ©2021 All rights reserved by Travel Ride.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Footer;
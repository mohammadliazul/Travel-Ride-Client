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
                            <li><AiFillFacebook className='fill-color icon-style' style={{ fontSize: '30px', marginRight:'15px' }} /></li>
                            <li><FaWhatsappSquare className='fill-color icon-style' style={{ fontSize: '28px', marginRight:'15px' }} /></li>
                            <li><AiFillTwitterSquare className='fill-color icon-style' style={{ fontSize: '30px', marginRight:'15px' }} /></li>
                            <li><AiFillYoutube className='fill-color icon-style' style={{ fontSize: '37px'}} /></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-center">
                        <p className="copyright text-white">
                            Copyright &copy; {new Date().getFullYear()} | Developed by <span>&#10084;</span> <a className='developer text-decoration-none' href="https://www.linkedin.com/in/liazul">Liazul</a>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Footer;
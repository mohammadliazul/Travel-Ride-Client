import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav-bar' sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        <Image src='https://aaryaweb.info/html/travelride/tr001/images/logo.png' />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse  >
                        <Nav className="mx-auto">
                            <NavLink as={HashLink} to='/home#home' className='nav-Link fw-3 text-white hv fs-5' >Home</NavLink>
                            <NavLink as={HashLink} to='/tours' className='nav-Link fw-3 text-white hv fs-5' >Tours</NavLink>
                            {/* <NavLink to='/about' className='nav-Link fw-3 text-white hv fs-5' >About</NavLink> */}
                            <NavLink to='/myTour' className='nav-Link fw-3 text-white hv fs-5' >My Tour</NavLink>
                            {/* <NavLink to='/manageBooking' className='nav-Link fw-3 text-white hv fs-5' >Manage Booking</NavLink>
                            <NavLink to='/addNewTour' className='nav-Link fw-3 text-white hv fs-5 ' >Add New Tour</NavLink>
                            <NavLink to='/manageTours' className='nav-Link fw-3 text-white hv fs-5' >Manage Tours</NavLink> */}
                            <NavLink to='/admin' className='nav-Link fw-3 text-white hv fs-5' >Admin</NavLink>
                        </Nav>
                        <Nav>

                            <Link className='nav-Link mt-2'><img
                                className="rounded-circle"
                                style={{ width: '40px' }}
                                src={user?.photoURL}
                                alt=""
                            /></Link>
                            {
                                user?.email &&
                                <Navbar.Text className='text-white fw-3 text-white fs-5 mt-1 ms-2' > {user?.displayName}</Navbar.Text>

                            }
                            {
                                user?.email ?
                                    <Button onClick={logOut} className='fw-3 btn-authentication fs-5 px-3 ms-2 my-1'>Log Out</Button> :
                                    <Button className='btn-authentication fw-3 fs-5 px-3'><NavLink className='login' to='/login'>Login</NavLink></Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
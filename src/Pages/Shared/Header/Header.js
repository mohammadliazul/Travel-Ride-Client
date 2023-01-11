import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../Images/logo.png';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav-bar' fixed="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        <div className='d-flex align-items-end'>
                            <Image width="48" height="53" src={logo} alt="logo"/> 
                            <h2 className='text-white ps-2'>Travel Ride</h2>
                        </div>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse  >
                        <Nav className="mx-auto">
                            <NavLink as={HashLink} to='/home#home' className='nav-Link fw-3 hv fs-5' >Home</NavLink>
                            <NavLink as={HashLink} to='/tours' className='nav-Link fw-3  hv fs-5' >Tours</NavLink>
                            <NavLink to='/myTour' className='nav-Link fw-3 hv fs-5' >My Tour</NavLink>
                            <NavLink to='/admin' className='nav-Link fw-3 hv fs-5' >Admin</NavLink>
                        </Nav>
                        <Nav>
                            {user?.photoURL &&
                                <Link to='' className='nav-Link mt-2'>
                                    <img className="rounded-circle" style={{ width: '40px' }} 
                                    src={user?.photoURL} alt=""/>
                                </Link>
                            }
                            {
                                user?.email &&
                                <Navbar.Text className='text-white fw-3 fs-5 mt-1 ms-2' > {user?.displayName}</Navbar.Text>
                            }
                            {
                                user?.email ?
                                    <Button onClick={logOut} className='fw-3 btn-authentication fs-5 px-3 ms-2 my-1'>Log Out</Button> :
                                    <NavLink className='login' to='/login'><Button className='btn-authentication fw-3 fs-5 px-3'>Login</Button></NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
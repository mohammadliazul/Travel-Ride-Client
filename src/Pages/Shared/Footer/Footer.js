import React from 'react';
import blogImgOne from '../../../Images/blog-img-1.jpg';
import blogImgTwo from '../../../Images/blog-img-2.jpg';
import blogImgThree from '../../../Images/blog-img-3.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='footer-t'>
                <div className='container'>
                    <div className='row footer-col-wrapper'>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                            <div className='widget'>
                                <h3 className='widget-title'>TRAVEL RIDE</h3>
                                <div className='widget-text'>
                                    <p>
                                        Travel Ride is a ipsum amet quasi blanditiis amet est maxime culpa numquam minus. Lorem ipsum dolor sit amet consectetur adip isicing. Luo at quisquam cumque elit aliquam, nostrum iure, adiep quasi inventore tenetur on aliqu customizer cumque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                            <div className='widget'>
                                <h3 className='widget-title'>RECENT POSTS</h3>
                                <ul className='style-one'>
                                    <li>
                                        <a  href="/" className='post-thumbnail'>
                                            <img  src={blogImgOne} alt="blog-img"/>
                                        </a>
                                        <div className='entry-header'>
                                            <a href="/">
                                                <h6 className='entry-title'>Tips for taking a longterm holiday plan this 2022</h6>
                                            </a>
                                            <time className='posted-on'>March 15, 2022</time>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/" className='post-thumbnail'>
                                            <img src={blogImgTwo} alt="blog-img"/>
                                        </a>
                                        <div className='entry-header'>
                                            <a href="/">
                                                <h6 className='entry-title'>Longterm holiday plan this 2021</h6>
                                            </a>
                                            <time className='posted-on'>March 15, 2022</time>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/" className='post-thumbnail'>
                                            <img src={blogImgThree} alt="blog-img"/>
                                        </a>
                                        <div className='entry-header'>
                                            <a href="/">
                                                <h6 className='entry-title'>Eight of the most common travel disasters of 2020</h6>
                                            </a>
                                            <time className='posted-on'>March 15, 2022</time>
                                        </div>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                            <div className='widget'>
                                <h3 className='widget-title'>QUICK LINKS</h3>
                                <ul className='quick-links-wrapper'>
                                    <li>
                                        <a href="/">Trip Listing</a>
                                    </li>
                                    <li>
                                        <a href="/">Activities</a>
                                    </li>
                                    <li>
                                        <a href="/">Destination</a>
                                    </li>
                                    <li>
                                        <a href="/">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/">Popular Trips</a>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                            <div className='widget contact-info-wrapper'>
                                <h3 className='widget-title'>CONTACT INFO</h3>
                                <div className='contact-info'>
                                    <ul className='contact-list'>
                                        <li>
                                            <i className='fa fa-phone'></i>
                                            <a href="tel:0123456789">0123456789</a>
                                        </li>
                                        <li>
                                            <i className='fa fa-envelope'></i>
                                            <a href="mailto:info@travelride.com">info@travelride.com</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker"></i>
                                            <span>Athens, Greece</span>
                                        </li>
                                    </ul>
                                    <ul className='social-networks'>
                                        <li>
                                            <a href="https://facabook.com" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-linkedin'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://google-plus-g.com" target="_blank" rel="noopener noreferrer">
                                                <i className='fab fa-google'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-b'>
                <div className='container'>
                    <span className='copyright-info'>
                        <span className='copyright'>
                            &copy; Copyright {new Date().getFullYear()} 
                            <a href="/" className='site-name'> Travel Ride </a> 
                            | Developed by 
                            <span> &#10084;</span> 
                            <a className='developer text-decoration-none' href="https://www.linkedin.com/in/liazul" target="_blank" rel="noopener noreferrer"> Liazul</a>
                        </span>
                    </span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
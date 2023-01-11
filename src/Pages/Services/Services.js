
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Services.css';


const Services = () => {

    const [servicesData] = useServices();
    const path = window.location.pathname;
    return (
        <div>
            <div className='container py-5'>
                {path !== '/tours' && <h2 className='section-heading'>Popular Trip</h2>}
                {servicesData?.length === 0 ? 
                    <div className='d-flex justify-content-center align-items-center my-5 py-5'>
                        <Spinner animation='border' variant='info' />
                    </div>
                    :
                    <div className="row py-5">
                        {servicesData.map(tour => <div key={tour._id} className="col-md-6 col-lg-4 col-sm-12">
                            <div className="service my-3 px-2">
                                {/* img-holder  */}
                                <div className="img-holder">
                                    <img className='w-100' src={tour.image} alt="service" />
                                    <div className='discount-amount'>
                                        14%
                                        <span> Off</span>
                                    </div>
                                </div>
                                {/* text-holder */}
                                <div className='text-holder'>
                                    <div className='price-info'>
                                        <div className="price-holder">
                                            <span className='old-price striked-price'>$ {tour.rePrice}</span>
                                            <span className='new-price actual-price'>$ {tour.price}</span>
                                        </div>
                                    </div>
                                    <div className='trip-info'>
                                        <h3 className='title'>{tour.title}</h3>
                                        <div className='meta-info'>
                                            <span className='place'>
                                                <i className="fa fa-map-marker"></i> {tour.title}
                                            </span>
                                            <span className='time'>
                                                <i className="far fa-clock"></i> {tour.days} Days
                                            </span>
                                        </div>
                                        <div className='category-trip-desc'>
                                            <p>The Tiananmen, a gate in the wall of the Imperial City, was built in 1415 during the Ming dynasty. In...</p>
                                        </div>
                                    </div>
                                    <div className='btn-holder'>
                                        <Link to={`/getservices/${tour._id}`} className='primary-btn'>
                                            BOOK NOW
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default Services;
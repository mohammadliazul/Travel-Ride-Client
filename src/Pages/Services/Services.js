
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Services.css';


const Services = () => {

    const [servicesData] = useServices();

    return (
        <div>
            <div className='container py-5'>
                {servicesData?.length === 0 ? 
                    <div className='d-flex justify-content-center align-items-center my-5 py-5'>
                        <Spinner animation='border' variant='info' />
                    </div>
                    :
                    <div className="row py-5">
                        {servicesData.map(tour => <div key={tour._id} className="col-md-6 col-lg-4 col-sm-12">
                            <div className="service p-3 m-3">
                                <div className="half">
                                    <img className='img-fluid' src={tour.image} alt="service" />
                                    <h3 className="mt-4">{tour.title}</h3>
                                    <p className="mt-2">{tour.details}</p>
                                    <div className='d-flex justify-content-between'>
                                        <h5><i className="far fa-clock"></i> {tour.days} days</h5>
                                        <h5><span>$</span> {tour.price}</h5>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-center'><Link to={`/getservices/${tour._id}`}><Button className='button fs-5'>Book Now</Button></Link> </div>
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
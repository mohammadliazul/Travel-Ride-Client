import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WhyTravelRide from '../WhyTravelRide/WhyTravelRide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services id="tours"></Services>
            <WhyTravelRide></WhyTravelRide>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
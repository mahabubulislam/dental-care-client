import React from 'react';
import Banner from './Banner';
import ExceptionalCares from './ExceptionalCares';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExceptionalCares />
            <MakeAppoinment />
            <Testimonials />
        </div>
    );
};

export default Home;
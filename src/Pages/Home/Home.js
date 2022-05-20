import React from 'react';
import Banner from './Banner';
import ExceptionalCares from './ExceptionalCares';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExceptionalCares />
            <MakeAppoinment />
        </div>
    );
};

export default Home;
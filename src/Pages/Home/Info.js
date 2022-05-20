import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" cardDescription={<>Friday-Wednesday.<br/>9:00 AM to 6:00 PM</>} bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardDescription='New York' bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardDescription='01111111' bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;
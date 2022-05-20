import React from 'react';
import cares from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const ExceptionalCares = () => {
    return (
        <section>
            <div className="hero min-h-screen px-0 md:px-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={cares} className="max-w-sm rounded-lg shadow-2xl" alt='cares' />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">We provide sophisticated 3D Intraoral Scanning, Cosmetic Digital Smile Design, Laser dentistry along with standard services like Crowns, Bridges, Dental Implants, Braces and General Dentistry. All services are performed with precision and sophistication.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalCares;
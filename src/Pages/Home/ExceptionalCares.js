import React from 'react';
import cares from '../../assets/images/treatment.png'
const ExceptionalCares = () => {
    return (
        <div class="hero min-h-screen px-0 md:px-28">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={cares} class="max-w-sm rounded-lg shadow-2xl" alt='cares' />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">We provide sophisticated 3D Intraoral Scanning, Cosmetic Digital Smile Design, Laser dentistry along with standard services like Crowns, Bridges, Dental Implants, Braces and General Dentistry. All services are performed with precision and sophistication.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCares;
import React from 'react';
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen"  style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl flex-1" alt='banner'/>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">A person’s smile is their most authentic form of self-expression. Your smile is an expression of your inner beauty. It’s our goal to highlight and bring out that beauty through your smile. We are able to help our patients feel confident, excited and smile.</p>
                       <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex flex-col md:flex-row justify-center items-center my-32'>
            <div className='flex-1 '>
                <img className='mt-[-160px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Are you looking for Best Dentist or Dentist near me or Best Dental Clinic in New York? Yes, you are in the right place. Make your appointment today .</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
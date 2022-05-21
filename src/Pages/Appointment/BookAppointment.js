import React from 'react';

const BookAppointment = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-lg">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>Try another date</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(appointment)}
                        className={`btn btn-primary modal-button font-bold uppercase text-white  ${slots.length === 0 ? 'bg-secondary' : 'bg-gradient-to-r from-primary to-secondary modal-button'}`}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
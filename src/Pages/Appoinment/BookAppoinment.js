import React from 'react';

const BookAppoinment = ({ appoinment }) => {
    const { name, slots } = appoinment
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-lg">
            <div class="card-body text-center">
                <h2 class="text-2xl font-bold">{name}</h2>
                <p>{slots.length>0? <span>{slots[0]}</span> : <span className='text-red-600'>Try another date</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length===0} className={`btn btn-primary font-bold uppercase text-white  ${slots.length===0? 'bg-secondary':'bg-gradient-to-r from-primary to-secondary'}`}>Book Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default BookAppoinment;
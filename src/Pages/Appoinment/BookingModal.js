import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;
    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='my-5'>
                        <input type="text" className='input input-bordered bg-base-200  focus:outline-none w-full p-2 mb-2' value={format(date, 'PP')} disabled />
                        <select name="" id="" className='w-full bg-base-200 select select-bordered focus:outline-none p-2 mb-2'>
                            {
                                slots.map(slot => <option key={slot.id} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' name='name' placeholder='Your name' />
                        <input type="email" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' name='email' placeholder='Your email' />
                        <input type="tel" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' name='phone' placeholder='Your phone number' />
                        <input type="submit" className="btn w-full uppercase" value="Book Appoinment" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;
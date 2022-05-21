import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const [user] = useAuthState(auth);
    const { name, slots } = treatment;
    
    const handleSubmit = e => {
        e.preventDefault()
        
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
                        <input type="text" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' value={user?.displayName}  disabled/>
                        <input type="email" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' value={user?.email} disabled/>
                        <input type="tel" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' name='phone' placeholder='Your phone number' required />
                        <input type="submit" className="btn w-full uppercase" value="Book Appointment" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;
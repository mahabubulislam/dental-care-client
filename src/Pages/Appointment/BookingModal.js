import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formatedDate = format(date, 'PP')
    const handleSubmit = e => {
        e.preventDefault()
        const slots = e.target.slot.value
        const phone = e.target.phone.value

        const boooking = {
            treatmentId: _id,
            treatment: name,
            patientName: user?.displayName,
            patient: user?.email,
            date: formatedDate,
            slots,
            phone
        }
        fetch('https://afternoon-inlet-07025.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(boooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Your appointment for ${name} is booked in ${formatedDate} at ${slots}`);
                }
                else {
                    toast.warning(`You have already an appointment for ${name} at ${formatedDate}}`);
                }
                setTreatment(null)
                refetch()
            })

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
                        <select name="slot" className="select select-bordered w-full bg-base-200 p-2 mb-2 focus:outline-none">
                            {
                                slots?.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' value={user?.displayName} disabled />
                        <input type="email" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' value={user?.email} disabled />
                        <input type="tel" className='input input-bordered w-full p-2 mb-2 bg-base-200 focus:outline-none' name='phone' placeholder='Your phone number' required />
                        <input type="submit" className="btn w-full uppercase" value="Book Appointment" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;
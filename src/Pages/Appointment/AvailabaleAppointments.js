import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookAppointment from './BookAppointment';
import BookingModal from './BookingModal';

const AvailabaleAppointments = ({ date }) => {
    const [appointments, setappointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('https://afternoon-inlet-07025.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setappointments(data))
    }, [])
    return (
        <div className='mb-5'>
            <h3 className='text-primary text-xl text-center'>Available appointments on {format(date, 'PP')}</h3>
            <p className='text-center'>Please select a service.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointments.map(appointment=> <BookAppointment key={appointment._id} appointment={appointment} setTreatment={setTreatment}/>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}/>
            }
        </div>
    );
};

export default AvailabaleAppointments;
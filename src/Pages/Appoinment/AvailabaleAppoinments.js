import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookAppoinment from './BookAppoinment';
import BookingModal from './BookingModal';

const AvailabaleAppoinments = ({ date }) => {
    const [appoinments, setappoinments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal-client-module-72/main/public/services.json')
            .then(res => res.json())
            .then(data => setappoinments(data))
    }, [])
    return (
        <div className='mb-5'>
            <h3 className='text-primary text-xl text-center'>Available appoinments on {format(date, 'PP')}</h3>
            <p className='text-center'>Please select a service.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appoinments.map(appoinment=> <BookAppoinment key={appoinment._id} appoinment={appoinment} setTreatment={setTreatment}/>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}/>
            }
        </div>
    );
};

export default AvailabaleAppoinments;
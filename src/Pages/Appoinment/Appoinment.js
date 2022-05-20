import React, { useState } from 'react';
import AppointmentBanner from './AppoinmentBanner';
import AvailabaleAppoinments from './AvailabaleAppoinments';

const Appoinment = () => {
    
    const [date, setDate] = useState(new Date())
    const currentDate = date ? date : new Date()
    return (
        <section>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailabaleAppoinments date={currentDate}/>
        </section>
    );
};

export default Appoinment;
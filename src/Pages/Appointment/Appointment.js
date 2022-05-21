import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailabaleAppointments from './AvailabaleAppointments';

const Appointment = () => {
    
    const [date, setDate] = useState(new Date())
    const currentDate = date ? date : new Date()
    return (
        <section>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailabaleAppointments date={currentDate}/>
        </section>
    );
};

export default Appointment;
import React, { useState } from 'react';
import AppointmentBanner from './AppoinmentBanner';
import AvailabaleAppoinments from './AvailabaleAppoinments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <section>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailabaleAppoinments date={date}/>
        </section>
    );
};

export default Appoinment;
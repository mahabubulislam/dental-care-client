import { format } from 'date-fns';
import React from 'react';

const AvailabaleAppoinments = ({date}) => {
    return (
        <div>
            <h3 className='text-primary text-xl text-center'>Available Services on {format(date, 'PP')}</h3>
        </div>
    );
};

export default AvailabaleAppoinments;
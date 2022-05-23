import { format } from 'date-fns';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookAppointment from './BookAppointment';
import BookingModal from './BookingModal';

const AvailabaleAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')


    const { data: appointments, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://afternoon-inlet-07025.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))


    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='mb-5'>
            <h3 className='text-primary text-xl text-center'>Available appointments on {format(date, 'PP')}</h3>
            <p className='text-center'>Please select a service.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointments?.map(appointment => <BookAppointment key={appointment._id} appointment={appointment} setTreatment={setTreatment} />)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} refetch={refetch} />
            }
        </div>
    );
};

export default AvailabaleAppointments;
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Booking from './Booking';
import BookingModal from './BookingModal';


const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const formatted = format(date, "PP")
    const { data: services, isLoading,refetch } = useQuery(["available",formatted], () => fetch(`https://doctors-portal-server-side.onrender.com/available?date=${formatted}`)
        .then(res => res.json())
    );

    console.log(treatment);

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    return (
        <div className='customContainer my-20'>
            <h4 className='text-secondary text-xl text-center font-bold mb-16'>Avaiable Appointments on {format(date, "PP")}.</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {services?.map(service => <Booking key={service._id} setTreatment={setTreatment} service={service}></Booking>)}
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;
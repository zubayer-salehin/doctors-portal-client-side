import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Booking from './Booking';
import BookingModal from './BookingModal';


const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const formatted = format(date, "PP")
    const { data: services, isLoading,refetch } = useQuery(["available",formatted], () => fetch(`http://localhost:5000/available?date=${formatted}`)
        .then(res => res.json())
    );

    console.log(treatment);

    if (isLoading) {
        return <button className="btn loading">loading</button>
    }

    return (
        <div className='mb-16'>
            <h4 className='text-secondary text-lg text-center font-bold my-16'>Avaiable Appointments on {format(date, "PP")}.</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {services?.map(service => <Booking key={service._id} setTreatment={setTreatment} service={service}></Booking>)}
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;
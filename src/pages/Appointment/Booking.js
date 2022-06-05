import React from 'react';


const Booking = ({ service, setTreatment }) => {

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-secondary text-lg font-bold">{service.name}</h2>
                <p>{service.slots.length ? <span>{service.slots[0]}</span> : <span className='text-red-500'>Try Another date</span>}</p>
                <p>{service.slots.length} {service.slots.length > 1 ? "SPACES" : "SPACE"} AVALIABLE</p>
                <p><small>Price : ${service.price}</small></p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary modal-button btn-secondary text-white" disabled={service.slots.length === 0 ? true : false}>BOOK APOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Booking;
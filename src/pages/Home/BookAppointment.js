import React from 'react';
import doctor from "../../assets/images/doctor-small.png"
import appointment from "../../assets/images/appointment.png"


const BookAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})`}} className='flex justify-center items-center px-5 sm:px-16 my-16'>
            <div className='flex-1 hidden md:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white py-5 sm:py-0'>
                <h4 className='text-lg font-bold text-secondary mb-4'>Appointment</h4>
                <h2 className='text-4xl font-bold mb-5'>Make an appointment Today</h2>
                <p className='mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button type="button" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white">
                    GET STARED
                </button>
            </div>
        </section>
    );
};

export default BookAppointment;
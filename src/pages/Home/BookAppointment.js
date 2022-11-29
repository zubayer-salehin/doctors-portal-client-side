import React from 'react';
import doctor from "../../assets/images/doctor-small.png"
import appointment from "../../assets/images/appointment.png"


const BookAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} >
            <div className="customContainer">
                <div className='flex justify-center items-center sm:pl-3 sm:pr-16 mt-5 sm:mt-16'>
                    <div className='flex-1 hidden md:block'>
                        <img className='mt-[-100px]' src={doctor} alt="" />
                    </div>
                    <div className='flex-1 text-white py-12 sm:py-0'>
                        <h4 className='text-lg font-bold text-secondary mb-4'>Appointment</h4>
                        <h2 className='text-3xl sm:text-4xl font-bold mb-5'>Make an appointment Today</h2>
                        <p className='mb-5'>Internet access, Smart Phone or Computer. For Android Smart Phones: Install Skype from Google play store For iPhone install Skype from Apple App Store. Search it.uhlbd in Skype and add it in your contact list. Then make a video call. For Android Smart Phones: Install WhatsApp from Google play store. For iPhone install WhatsApp from Apple App Store. A WhatsApp number will be given after the appointment is confirmed.</p>
                        <button type="button" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white">
                            GET STARED
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;
import React from 'react';
import appointment from "../../assets/images/appointment.png"

const ContactUs = () => {
    return (
        <div className="hero" style={{ background: `url(${appointment})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content py-12">
                <div className="max-w-md">
                    <h5 className="mb-2 text-lg text-secondary font-bold">Contact Us</h5>
                    <h2 className="text-4xl text-white mb-10">Stay connected with us</h2>
                    <div className='mb-5'>
                        <input type="text" placeholder="Email Address" className="input w-full max-w-xs mb-4 w-72 sm:w-80" /><br />
                        <input type="text" placeholder="Subject" className="input w-full max-w-xs mb-4 w-72 sm:w-80" /><br />
                        <textarea rows="4" cols="42" className="textarea textarea-bordered w-72 sm:w-80" placeholder="Your Messages"></textarea>
                    </div>
                    <button type="button" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white px-10">
                       Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
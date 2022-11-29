import React from 'react';
import appointment from "../../assets/images/appointment.png"

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div id='contact' className='pt-16 sm:pt-20'>
            <div className="hero" style={{ background: `url(${appointment})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center py-12">
                    <div className="max-w-md">
                        <h5 className="mb-2 text-lg text-secondary font-bold">Contact Us</h5>
                        <h2 className="text-4xl text-white mb-10">Stay connected with us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-5'>
                                <input type="text" placeholder="Email Address" className="input  max-w-xs mb-4 w-72 sm:w-80" /><br />
                                <input type="text" placeholder="Subject" className="input max-w-xs mb-4 w-72 sm:w-80" /><br />
                                <textarea rows="4" cols="42" className="textarea textarea-bordered w-72 sm:w-80" placeholder="Your Messages"></textarea>
                            </div>
                            <input type="submit" value="Submit" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white px-10"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
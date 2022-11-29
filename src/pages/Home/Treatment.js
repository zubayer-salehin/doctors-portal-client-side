import React from 'react';
import treatment from "../../assets/images/treatment.png"

const Treatment = () => {
    return (
        <div className="hero min-h-screen md:px-28 py-16 md:py-32">
            <div className="hero-content flex-col lg:flex-row p-0 md:p-4">
                <img src={treatment} className="sm:max-w md:w-5/12 rounded-lg shadow-2xl" alt=''/>
                <div className='mx-6 md:ml-20'>
                    <h1 className="text-4xl sm:text-5xl font-bold mt-4 sm:mt-0 bannerTitleStyle">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">An ideal dentist goes to great lengths to make their patients comfortable and relaxed without pain. An ideal dentist has a keen ability to distill complex procedures and processes into simple language so that the patient can understand exactly what is going on in his or her mouth and any procedures that they suggest.</p>
                    <button type="button" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white">
                        GET STARED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;
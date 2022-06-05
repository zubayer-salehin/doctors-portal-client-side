import React from 'react';
import treatment from "../../assets/images/treatment.png"

const Treatment = () => {
    return (
        <div className="hero min-h-screen md:px-28 md:py-32">
            <div className="hero-content flex-col lg:flex-row p-0 md:p-4">
                <img src={treatment} className="sm:max-w md:w-5/12 rounded-lg shadow-2xl" />
                <div className='md:ml-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button type="button" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white">
                        GET STARED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;
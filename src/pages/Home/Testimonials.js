import React from 'react';
import quote from "../../assets/icons/quote.svg"
import pepole1 from "../../assets/images/people1.png"
import pepole2 from "../../assets/images/people2.png"
import pepole3 from "../../assets/images/people3.png"
import Testimonial from './Testimonial';

const Testimonials = () => {

    const testimonials = [
        { _id: 1, name: "Winson Herry", description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", address: "California", image: `${pepole1}` },
        { _id: 2, name: "Winson Herry", description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", address: "California", image: `${pepole2}` },
        { _id: 3, name: "Winson Herry", description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", address: "California", image: `${pepole3}` }
    ]
    return (
        <section className='mb-20 sm:mb-24'>
            <div className='flex justify-between'>
                <div className='mb-14 sm:mb-32'>
                    <h4 className='text-lg text-secondary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-32 md:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {testimonials.map(person => <Testimonial key={Math.random()} person={person}></Testimonial>)}
            </div>
        </section>
    );
};

export default Testimonials;
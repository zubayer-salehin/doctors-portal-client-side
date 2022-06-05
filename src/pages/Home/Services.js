import React from 'react';
import Service from './Service';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {

    const services = [
        { _id: 1, image: `${fluoride}`, name: "Fluoride Treatment", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
        { _id: 2, image: `${cavity}`, name: "Cavity Filling", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" },
        { _id: 3, image: `${whitening}`, name: "Teeth Whitening", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" }
    ]

    return (
        <div className='mt-28 mb-12 sm:mb-0'>
            <div className='text-center mb-12'>
                <h4 className='text-lg text-secondary font-bold'>OUR SERVICES</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {services.map(service => <Service key={Math.random()*10000} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;
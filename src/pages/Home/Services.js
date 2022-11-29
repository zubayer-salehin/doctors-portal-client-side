import React from 'react';
import Service from './Service';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {

    const services = [
        { _id: 1, image: `${fluoride}`, name: "Fluoride Treatment", description: "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop   it from getting worse." },
        { _id: 2, image: `${cavity}`, name: "Cavity Filling", description: "A cavity filling brings back the functionality and appearance of the tooth. Basically, a passage  is sort of a filling except for the within of the tooth." },
        { _id: 3, image: `${whitening}`, name: "Teeth Whitening", description: "Teeth Whitening is a quick and painless in-office whitening system that provides dramatic result teeth that are up to eight shades whiter!" }
    ]

    return (
        <div id="services" className='pt-28 mb-12 sm:mb-0'>
            <div className='text-center mb-12'>
                <h4 className='text-lg text-secondary font-bold'>OUR SERVICES</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className="customContainer">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-0 sm:px-4'>
                    {services.map(service => <Service key={Math.random() * 10000} service={service}></Service>)}
                </div>
            </div>
        </div>
    );
};

export default Services;
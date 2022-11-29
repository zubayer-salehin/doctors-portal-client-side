import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {

    const details = [
        { name: "Opening Hour", description: "Every Day 10AM-4PM", image: `${clock}`, bgColor: "bg-secondary" },
        { name: "Visit our location", description: "Brooklyn, United States", image: `${marker}`, bgColor: "bg-accent" },
        { name: "Contact us now", description: "+000 123 456789", image: `${phone}`, bgColor: "bg-secondary" }
    ]
    return (
        <div className='customContainer'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-28 px-0 sm:px-4'>
                {details.map(detail => <InfoCard key={Math.random() * 1000} detail={detail}></InfoCard>)}
            </div>
        </div>
    );
};

export default Info;
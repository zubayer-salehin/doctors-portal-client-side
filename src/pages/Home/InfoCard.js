import React from 'react';

const InfoCard = ({ detail }) => {
    return (
        <div className={`card card-side shadow-xl ${detail.bgColor} py-4`}>
            <figure><img className="h-16 ml-8" src={detail.image} alt="Movie" /></figure>
            <div className="card-body justify-center text-white">
                <div>
                    <h2 className="card-title">{detail.name}</h2>
                    <p>{detail.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
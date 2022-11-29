import React from 'react';

const Testimonial = ({ person }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{person.description}</p>
                <div className='flex mt-6'>
                    <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='w-16' src={person.image} alt="" />
                    </div>
                    <div className='ml-4'>
                        <h5 className='text-xl text-bold '>{person.name}</h5>
                        <p>{person.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
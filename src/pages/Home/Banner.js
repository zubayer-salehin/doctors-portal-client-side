import React from 'react';
import Chair from "../../assets/images/chair.png"
import Background from "../../assets/images/bg.png"

const Banner = () => {
    return (
        <div style={{background:`url(${Background})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} className="hero sm:min-h-screen mb-12 sm:mb-0 pt-10 sm:pt-0">
            <div className="hero-content flex-col lg:flex-row-reverse p-1 sm:p-4 mb-4 sm:mb-0">
                <img src={Chair} className="sm:max-w md:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime aliquid voluptas facere recusandae facilis autem velit similique nobis harum ducimus aspernatur perferendis, numquam quam?</p>
                    <button type="button" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white">
                        GET STARED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import Chair from "../../assets/images/chair.png"
import Background from "../../assets/images/bg.png"

const Banner = () => {
    return (
        <div style={{ background: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="bannerImage">
            <div className="customContainer">
                <div className="mb-12 sm:mb-0 pt-10 sm:pt-0">
                    <div className="hero-content flex-col lg:flex-row-reverse p-1 sm:px-4 sm:py-0 mb-4 sm:mb-0 gap-10">
                        <img src={Chair} className="sm:max-w md:w-1/2 rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-3xl sm:text-5xl font-bold bannerTitleStyle">Find your doctor and make an appiontment</h1>
                            <p className="py-6">Best Care and Better Doctor. This is a doctor portal website. Different Type of department To Service for Your Health. Select preferabble doctor and time slot to book appiontment and consultation.</p>
                            <button type="button" className="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white capitalize rounded-md">
                                Book Appiontment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
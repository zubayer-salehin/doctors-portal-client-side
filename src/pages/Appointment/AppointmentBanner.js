import React from 'react';
import Chair from "../../assets/images/chair.png"
import Background from "../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date,setDate}) => {

    return (
        <div style={{ background: `url(${Background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="hero sm:min-h-screen">
            <div className="hero-content flex-col justify-evenly lg:flex-row-reverse p-0 sm:p-4">
                <img src={Chair} className="sm:max-w md:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
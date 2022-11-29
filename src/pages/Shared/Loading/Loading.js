import React from 'react';
import { ScaleLoader } from 'react-spinners';
import "./Loading.css";



const Loading = (loadingStatus) => {
    return (
        <div className='loading'>
            <ScaleLoader color={"#0FCFEC"} loading={loadingStatus} size={45} />
        </div>
    );
};

export default Loading;
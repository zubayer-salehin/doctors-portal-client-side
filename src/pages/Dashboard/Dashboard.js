import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import auth from "../../firebase.init"
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCommentDots, faHouseChimney, faRectangleList } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <>
            {/* <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl font-bold text-purple-500 mt-3 mb-6'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/reveiw">Add Reveiws</Link></li>
                        <li><Link to="/dashboard/myHistory">My History</Link></li>
                        {admin && <li><Link to="/dashboard/allUsers">All Users</Link></li>}
                        {admin && <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>}
                        {admin && <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>}
                    </ul>
                </div>
            </div> */}
            <div className="drawer drawer-mobile">
                <input id="dashboard-open" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mr-5 ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-open" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 border-r-2 bg-white sm:bg-transparent">
                        <li className='font-bold border-b-2 border-primary'><div><FontAwesomeIcon className='text-primary' icon={faHouseChimney}></FontAwesomeIcon> Dashboard</div></li>
                        <li className='border-b-2'><Link className='font-medium' to="/dashboard"> <FontAwesomeIcon className='text-primary' icon={faCalendarCheck}></FontAwesomeIcon>My Appointments</Link></li>
                        {!admin ?
                            <>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/reveiw"> <FontAwesomeIcon className='text-primary' icon={faCommentDots}></FontAwesomeIcon>Add Reveiws</Link></li>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/myHistory"> <FontAwesomeIcon className='text-primary' icon={faRectangleList}></FontAwesomeIcon>My History</Link></li>
                            </>
                            :
                            <>

                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
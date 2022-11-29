import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading/Loading';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const email = user?.email;
    let index = 0;

    useEffect(() => {
        setLoading(true);
        fetch(`https://doctors-portal-server-side.onrender.com/booking?patientEmail=${email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    navigate("/");
                }
                return res.json();
            })
            .then(data => {
                setAppointments(data)
                setLoading(false);
            })
    }, [email, navigate])

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => <tr key={appointment._id}>
                            <td>{++index}</td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.slot}</td>
                            <td>{appointment.treatment}</td>
                            <td>
                                {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><button className='btn btn-sm btn-success'>Pay</button></Link>}
                                {(appointment.price && appointment.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <p className='text-success'>{appointment.transactionId}</p></p>
                                </div>
                                }
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;
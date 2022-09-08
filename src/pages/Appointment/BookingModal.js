import { format } from 'date-fns/esm';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

    const { _id, name, slots, price } = treatment;
    const [user] = useAuthState(auth);

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const phone = e.target.phone.value;
        const formatedDate = format(date, "PP")
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            price,
            patientName: user.displayName,
            patientEmail: user.email,
            phone
        }

        fetch("https://doctors-portal-server-side.onrender.com/booking", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set, ${formatedDate} at ${slot}`)
                } else {
                    toast.error(`Already have and appointment on ${data?.booking?.date} at ${data?.booking?.slot}`);
                }
                refetch();
                setTreatment(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <label onClick={() => setTreatment(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-3 mt-5'>
                        <input type="text" value={format(date, "PP")} className="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map(time => <option key={Math.random() * 1000} value={time}>{time}</option>)}
                        </select>
                        <input name='name' value={user?.displayName || ""} type="text" placeholder='Full Name' className="input input-bordered w-full max-w-xs" disabled />
                        <input name='email' value={user?.email || ""} type="text" placeholder='Email' className="input input-bordered w-full max-w-xs" disabled />
                        <input name='phone' type="text" placeholder='Phone' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="SUBMIT" className="input bg-secondary text-white text-lg w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
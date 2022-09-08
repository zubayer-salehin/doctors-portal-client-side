import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery("doctors", () => fetch("https://doctors-portal-server-side.onrender.com/doctor", {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <button className="btn loading">loading</button>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor,index) => <DoctorRow index={index} key={doctor._id} doctor={doctor} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DoctorRow>)}
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctor;
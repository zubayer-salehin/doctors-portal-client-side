import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery("users", () => fetch("https://doctors-portal-server-side.onrender.com/user", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <button className="btn loading">loading</button>
    }

    const makeAdmin = (email) => {
        fetch(`https://doctors-portal-server-side.onrender.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin");
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully made an admin");
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => <tr key={Math.random() * 1000}>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td>{user.role !== "admin" && <button onClick={() => makeAdmin(user.email)} className="btn btn-xs">Make Admin</button>}</td>
                            <td><button className="btn btn-xs">Remove Users</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const { data: services, isLoading } = useQuery("service", () => fetch("http://localhost:5000/service").then(res => res.json()))

    const imageStorageKey = "bbb41293b29baeed6436287ccb9bbf00"

    const onSubmit = (data) => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    // Post Doctor Information
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success("Doctor Added Successfully");
                                reset();
                            }else{
                                toast.error("Failed to Error Add Doctor")
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <button className="btn loading">loading</button>
    }

    return (
        <div className='ml-5'>
            <h2 className="text-3xl font-medium mb-3">Add a New Doctor</h2>
            <form className='w-60' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label htmlFor='name' className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input id='name' type="text" placeholder="name" className="input input-bordered w-60"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            },
                            minLength: {
                                value: 3,
                                message: 'Name minimum 3 Character'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500" >{errors.name.message}</span>
                        }
                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500" >{errors.name.message}</span>
                        }
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor='email' className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input id='email' type="email" placeholder="email" className="input input-bordered w-60"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500" >{errors.email.message}</span>
                        }
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500" >{errors.email.message}</span>
                        }
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor='specialty' className="label">
                        <span className="label-text">Specialization</span>
                    </label>
                    <select {...register("specialty")} id='specialty' className="select select-bordered w-full max-w-xs">
                        {services.map(service => <option key={Math.random() * 1000} value={service.name}>{service.name}</option>)}
                    </select>
                </div>
                <div className="form-control mt-4">
                    <label htmlFor='image' className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="block border p-1 rounded-lg">
                        <span className="sr-only">Choose profile photo</span>
                        <input id='image' type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is required"
                                }
                            })} />
                    </label>
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500" >{errors.image.message}</span>
                        }
                    </label>
                </div>
                <div className="form-control mt-2">
                    <input type="submit" value="Add" className="btn bg-accent border-0 text-white font-medium"></input>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;
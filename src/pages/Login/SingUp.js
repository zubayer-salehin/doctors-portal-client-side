import React, { useEffect } from 'react';
import auth from "../../firebase.init"
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useToken from '../Hooks/useToken';
import google from "../../assets/Icon/Group 573.png"
import { useState } from 'react';


const SingUp = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorElement;
    const [token] = useToken(user || googleUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/home");
            if (userName) {
                fetch(`https://doctors-portal-server-side.onrender.com/userUpdate?email=${userEmail}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify({ name: userName })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {

                        }
                    })
            }
        }
    }, [token, navigate, userName, userEmail])


    if (googleError || error || updateError) {
        errorElement = <p className='w-60 text-red-500'>{error.message || googleError.message}|| updateError.message</p>
    }

    if (googleLoading || loading || updating) {
        return <button className="btn loading">loading</button>
    }

    const onSubmit = async (data) => {
        const name = data.name;
        setUserName(name);
        const email = data.email;
        setUserEmail(email);
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    }

    return (
        <div className="hero">
            <div className="hero-content pt-8 sm:p-3">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body py-5">
                        <h4 className='text-3xl text-center font-bold'>Sing Up</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                <label htmlFor='password' className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input id='password' type="password" placeholder="password" className="input input-bordered w-60"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password minimum 6 Character'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500" >{errors.password.message}</span>
                                    }
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500" >{errors.password.message}</span>
                                    }
                                </label>
                            </div>
                            {errorElement}
                            <div className="form-control mt-2">
                                <input type="submit" value="Sing Up" className="btn bg-accent border-0 text-white font-medium"></input>
                            </div>
                            <p className='label-text-alt text-center mt-3'>Already have an account? <Link to="/login" className="label-text-alt link link-hover text-secondary">Please Login</Link></p>
                        </form>
                        <div className="divider my-2">OR</div>
                        <button onClick={() => signInWithGoogle()} className="border border-gray-500 py-2 font-medium rounded"> <img className='w-6 mr-1 inline' src={google} alt="" /> Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
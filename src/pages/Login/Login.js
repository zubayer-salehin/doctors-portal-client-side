import React, { useEffect } from 'react';
import auth from "../../firebase.init"
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useToken from '../Hooks/useToken';


const Login = () => {

    const { register, getValues,formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user || googleUser);

    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from,navigate,token])

    if (googleError || error) {
        errorElement = <p className='w-60 text-red-500'>{error.message || googleError.message}</p>
    }

    if (googleLoading || loading) {
        return <button className="btn loading">loading</button>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className="hero">
            <div className="hero-content p-0 sm:p-4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body py-5">
                        <h4 className='text-3xl text-center font-bold'>Login</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                <p onClick={async () => {
                                    const email = getValues("email")
                                    await sendPasswordResetEmail(email)
                                }} className="label-text-alt link link-hover">Forgot password?</p>
                            </div>
                            {errorElement}
                            <div className="form-control mt-5">
                                <input type="submit" value="Login" className="btn bg-accent border-0 text-white font-medium"></input>
                            </div>
                            <p className='label-text-alt text-center mt-3'>New to Doctors Portal? <Link to="/singUp" className="label-text-alt link link-hover text-secondary">Create new account</Link></p>
                        </form>
                        <div className="divider my-2">OR</div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    let errorMessage;



    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || uError) {
        errorMessage = <p className='text-red-500'>{error?.message}</p>
    }

    if (token) {
        navigate('/');
    }

    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        updateProfile('updated')
    };
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className=" lg:w-4/12 md:w-96 sm-w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-4xl">Sign Up</h2>
                    <p className='text-1xl'>Please sign up using account detail bellow.</p>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xl"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xl"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xl">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xl"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or no longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn btn-secondary w-full' type="submit" value="Sign Up" />
                    </form>
                    <p>Already have an account? <Link className='text-secondary' to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
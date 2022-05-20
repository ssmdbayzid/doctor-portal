
import { FaGoogle } from "react-icons/fa";
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

import React from 'react';
import auth from "../../firebase.init";
import Loading from "../Share/Loading";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, signInUser, signInLoading, error1, ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()

    if (loading || signInLoading) {
        return <Loading></Loading>;
    }
    
    let signInerror;

    if(error || error1){
        signInerror = <p className="text-[red]">{error?.message || error1?.message}</p>
    }

    if (user || signInUser) {
        navigate('/home')
    }


    const onSubmit = data => {
        // console.log(data)
        const email = data.email;
        const password = data.password;

        signInWithEmailAndPassword(email, password)
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="mx-auto text-2xl font-bold">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: 'Provide a valid Email'
                                    }
                                }
                                )}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text">Password</span>
                            </label>    
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 Character massage'
                                    }
                                }
                                )}

                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}

                                {errors.password?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                            </label>

                            {signInerror}
                        </div>
                        <input type="submit" value="Log In" className="btn btn-bordered w-full max-w-xs" />


                    </form>

                    <div className="divider">OR</div>
                    <div className="card-actions justify-end">
                        <button onClick={() => signInWithGoogle()} className="btn hover:text-white flex btn-secondary w-full">
                            <div className="mr-3">
                                <FaGoogle className=" text-primary] text-xl" />
                            </div>
                            <h1 className="m;">CONTINUE WITH GOOGLE</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LogIn;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGoogle } from "react-icons/fa";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import React from 'react';
import auth from "../../firebase.init";

const LogIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {

            console.log(user)
      }







    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>
                    </form>


                    <h2 className="mx-auto text-2xl font-bold">Log In</h2>
                    <div className="divider">OR</div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>signInWithGoogle()} className="btn flex btn-secondary w-full">
                            <div className="mr-3">
                                <FaGoogle className=" text-[red] text-xl" />
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
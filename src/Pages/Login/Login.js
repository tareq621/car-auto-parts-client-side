import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-4xl">Login</h2>
                    <p className='text-2xl'>Please login using account detail bellow.</p>

                    <div class="divider">OR</div>
                    <button class="btn btn-outline btn-secondary" onClick={() => signInWithGoogle()}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
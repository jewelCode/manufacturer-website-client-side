import React from 'react';
import Google from './Google';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let signInError;

    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        signInError = <p>{error?.messege}</p>
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Please Provide Necessary Information to Login</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input {...register("email", { required: true })} type="text" placeholder="email" class="input input-bordered" />
                                        {errors.email?.type === 'required' && "email is required"}
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>
                                        <input {...register("password", { required: true })} type="password" placeholder="password" class="input input-bordered" />
                                    </div>
                                    {signInError}
                                    <div class="form-control mt-6">
                                        <input type="submit" class="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                                <p className="text-light">Don't Have an Account? <Link to="/signup" className="text-light">Please Register</Link></p>
                                <Google></Google>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Google from './Google';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = data => {
    console.log(data)
    createUserWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Sign Up Now</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })}  type="text" placeholder="name" class="input input-bordered" />
                            {errors.name?.type === 'required' && "name is required"}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })}  type="text" placeholder="email" class="input input-bordered" />
                            {errors.email?.type === 'required' && "email is required"}
                        </div>
                        <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="password" placeholder="password" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                        <input type="submit" class="btn btn-primary" value="sign Up"/>
                        </div>
                    </form>
                   
                    </div>
                    </div>
                </div>
               </div>
        </div>
    );
};

export default SignUp;
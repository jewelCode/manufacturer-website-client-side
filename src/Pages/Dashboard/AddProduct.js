import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://fast-shelf-13273.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div>
            <h2>Add A Product:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name:</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description:</span>
                    </label>
                    <input {...register("description")} type="text" placeholder="Description of Product" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price:</span>
                    </label>
                    <input {...register("price")} type="number" placeholder="Enter Your Product Price" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Qunatity:</span>
                    </label>
                    <input {...register("quantity")} type="number" placeholder="Enter Your Product Quantity" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Image Link:</span>
                    </label>
                    <input {...register("img")} type="text" placeholder="Enter Your Image Link Here" class="input input-bordered w-full max-w-xs" />
                </div>
                <br />
                <button type="submit" class="btn btn-outline btn-primary">Add Your Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
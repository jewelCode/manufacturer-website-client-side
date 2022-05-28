import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});

    const [user, loading] = useAuthState(auth);
    const handleOrder = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const price = event.target.price.value;
        const address = event.target.address.value;
        const quantity = event.target.quantity.value;
        console.log(email, phone, price, address, quantity);
        const order = {
            useremail: user.email,
            username: user.displayName,
            price: price,
            phone: phone,
            address: address,
            quantity: quantity,
        }

        fetch('https://fast-shelf-13273.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })

    }

    useEffect(() => {
        const url = `https://fast-shelf-13273.herokuapp.com/product/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <form onSubmit={handleOrder} className="grid grid-cols-1 gap-3 justify-items-center mt-2">

                        <input type="text" name="name" value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Product Price" name="price" class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Order Quanity" name="quantity" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <img src={product.img} alt="" />
                        <h2>Name: {product.name}</h2>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Available Quantity: {product.availablequantity}</p>
                        <p>Minorder Quantity: {product.minorderquantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
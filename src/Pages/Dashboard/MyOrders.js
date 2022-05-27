import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/order?useremail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user])

    const handleDelete = id => {
        const proceedDelete = window.confirm("Are you sure you want to delete your product?");
        if (proceedDelete) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const ordersRemaining = myOrders.filter(myorder => myorder._id !== id);
                    setMyOrders(ordersRemaining)
                })
        }
    }
    return (
        <div>
            <h2>My Orders:{myOrders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>Payment Status</th>
                            <th>Remove Order</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders.map(myorder => <tr>
                                <th>{myorder.username}</th>
                                <th>{myorder.useremail}</th>
                                <th>{myorder.price}</th>
                                <th>{myorder.phone}</th>
                                <th><button class="btn btn-info">Click Here For Payment</button></th>
                                <th><button class="btn btn-success">Paid</button></th>
                                <td><button class="btn btn-outline btn-warning" onClick={() => handleDelete(myorder._id)}>Delete Order</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
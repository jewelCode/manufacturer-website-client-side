import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://fast-shelf-13273.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const proceedDelete = window.confirm("Are you sure you want to delete your product?");
        if (proceedDelete) {
            const url = `https://fast-shelf-13273.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const ordersRemaining = orders.filter(order => order._id !== id);
                    setOrders(ordersRemaining)
                })
        }
    }
    return (
        <div>
            <h1>This is manage Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Payment Status</th>
                            <th>Remove Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <th>{order.username}</th>
                                <th>{order.useremail}</th>
                                <th>{order.price}</th>
                                <th>{order.phone}</th>
                                <th><button class="btn btn-success">Paid</button></th>
                                <td><button class="btn btn-outline btn-warning" onClick={() => handleDelete(order._id)}>Delete Order</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
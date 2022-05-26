import React, { useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/order?useremail=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    })
    return (
        <div>
            <h2>My Orders:{myOrders.length}</h2>
        </div>
    );
};

export default MyOrders;
import React, { useEffect, useState } from 'react';
import Order from '../Home/Order';
import OrderModal from '../OrderModal/OrderModal';
import Purchase from '../Purchase/Purchase';

const CompleteOrders = () => {
    const [orders, setOrders] = useState([]);
    const [bookOrder, setBookOrder] = useState(null);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div>
                {
                    orders.map(order => <Purchase key={order._id} order={order} setBookOrder={setBookOrder}></Purchase>)
                }
            </div>
            {bookOrder && <OrderModal bookOrder={bookOrder}></OrderModal>}
        </div>
    );
};

export default CompleteOrders;
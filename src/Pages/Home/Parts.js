import React, { useEffect, useState } from 'react';
import OrderModal from '../OrderModal/OrderModal';

import PartsDetails from './PartsDetails';

const Parts = () => {
    const [tools, setTools] = useState([]);
    const [orders, setOrders] = useState(null);
   
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 justify-items-center mt-5">
            
                {
                    tools.map(tool => <PartsDetails tool={tool} key={tool._id} setOrders={setOrders}></PartsDetails>)
                }
    
                {/* {orders && <PartsDetails orders={orders} setOrders={setOrders}></PartsDetails>} */}
        </div>
    );
};

export default Parts;
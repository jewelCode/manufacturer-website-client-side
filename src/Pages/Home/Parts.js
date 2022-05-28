import React, { useEffect, useState } from 'react';
import OrderModal from '../OrderModal/OrderModal';

import PartsDetails from './PartsDetails';

const Parts = () => {
    const [tools, setTools] = useState([]);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        fetch('https://fast-shelf-13273.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h2 className="text-6xl text-center mt-5 text-sky-700">Our Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 justify-items-center mt-5">
                {
                    tools.map(tool => <PartsDetails tool={tool} key={tool._id} setOrders={setOrders}></PartsDetails>)
                }
            </div>
        </div>
    );
};

export default Parts;
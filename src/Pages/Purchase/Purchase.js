import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {purchaseId} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() =>{
       const url =`http://localhost:5000/product/${purchaseId}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <h1>This is Purchase Protected Page:{product.name}</h1>
            <p>Name: {product.name}</p>
            <p>Name: {product.price}</p>
            
        
        </div>
    );
};

export default Purchase;
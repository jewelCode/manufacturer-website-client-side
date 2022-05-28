import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const Payment = () => {
    const { id } = useParams()
    const url =`http://localhost:5000/order/${id}`;
    const {data} = useQuery('order', ()=> fetch)
    return (
        <div>

        </div>
    );
};

export default Payment;
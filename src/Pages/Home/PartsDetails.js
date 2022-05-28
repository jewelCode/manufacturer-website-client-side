import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsDetails = ({ tool }) => {

    const { _id, name, description, availablequantity,
        price, img, minorderquantity } = tool;
    const navigate = useNavigate()

    const handlePartsDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Price: ${price}</p>
                    <p>Available Quantity: {availablequantity}</p>
                    <p>Minorder Quantity: {minorderquantity}</p>
                    <div class="card-actions">
                        <button onClick={() => handlePartsDetail(_id)} class="btn btn-primary" >Buy Now</button>
                        {/* <label onClick={()=> setOrders(tool)} for="order-modal" class="btn modal-button">Buy Now</label> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsDetails;
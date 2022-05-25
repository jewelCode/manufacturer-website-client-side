import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsDetails = ({ tool }) => {
    console.log(tool)
    const { _id, name, description, price, img } = tool;
    const navigate = useNavigate()

    const handlePartsDetail = id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary" onClick={()=> handlePartsDetail(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartsDetails;
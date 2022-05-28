import React from 'react';
import error from '.././resources/error.jpg'

const NotFound = () => {
    return (
        <div className="container w-50 mt-5">
        <img src={error} className="img-fluid" alt="" />
    </div>
    );
};

export default NotFound;
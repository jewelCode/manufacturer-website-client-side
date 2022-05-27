import React from 'react';

const Banner = () => {

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://cdn.globalso.com/esteebrush/IMG_77545.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-indigo-600 sm:text-center lg:text-left">Welcome to Brush Nest!</h1>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">We are the best painting Brush Manufacturer In the World</p>
                    <div class="mt-5">
                        <button class="btn btn-primary bg-indigo-600 text-white">Click Here For Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
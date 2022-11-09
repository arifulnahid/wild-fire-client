import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';

const ServiceDetails = () => {
    const { _id, title, image, description, price, rating } = useLoaderData()

    // console.log();
    return (
        <div className='lg:w-1/2 mx-auto text-start'>
            <div >
                <img className='w-full rounded-t' src={image} alt={title} />
                <div className='ml-5 my-5'>
                    <h1 className='font-bold text-2xl'>{title}</h1>
                    <p className='font-semibold text-lg'>Booking Money: ${price}</p>
                    <p className='text-justify'>{description}</p>
                </div>
                <button type="button" className="w-48 ml-5  text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Book Your Seat</button>
            </div>
            <Reviews rating={rating} id={_id}></Reviews>
        </div>
    );
};

export default ServiceDetails;
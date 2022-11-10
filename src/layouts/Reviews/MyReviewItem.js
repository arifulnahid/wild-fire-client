import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewItem = ({ rating }) => {
    const { serviceId } = rating
    const [service, setService] = useState();
    // console.log("service", service)


    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                // console.log(data);
            }).catch(e => console.error(e))
    }, [])

    return (
        <div className="text-start">
            <div className="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/service/${serviceId}`}>
                    <img className="w-full h-60 rounded-t-lg" src={service?.image} alt={service?.title} />
                </Link>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{service?.title}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        {rating.review}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center'>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{rating.rating}</span>
                        </div>
                        <Link to={`/service/${serviceId}`} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Service Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewItem;
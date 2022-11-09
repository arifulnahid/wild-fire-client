import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import ServiceItem from '../Service/ServiceItem';
const Home = () => {
    const service = useLoaderData()
    // console.log(service);

    return (
        <div>
            <div className='lg:mx-24 lg:my-14 my-5 '>
                <Banner></Banner>
                <div>
                    <h1 className='my-5 text-3xl font-bold text-red-600'>Explore Our Service</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto my-5 lg:px-5 md:px-5'>
                        {service.map(item => <ServiceItem key={item._id} service={item}></ServiceItem>)}
                    </div>
                    <Link to="/service" className="w-44 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Explore More</Link>
                </div>
            </div>
        </div >
    );
};

export default Home;
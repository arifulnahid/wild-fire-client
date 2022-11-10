import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItem from './ServiceItem';
import { Card } from 'flowbite-react';

const Service = () => {
    const service = useLoaderData();
    document.title = "Wildfire- Service"
    // console.log(service);

    return (
        <div>
            <h1 className='my-5 text-3xl font-bold'>Service</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto my-5 lg:px-14 md:px-5'>
                {service.map(item => <ServiceItem key={item._id} service={item}></ServiceItem>)}
            </div>
        </div>
    );
};

export default Service;
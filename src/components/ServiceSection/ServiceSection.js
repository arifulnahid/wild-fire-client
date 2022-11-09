import React from 'react';
import ServiceItem from '../../layouts/Service/ServiceItem';

const Service = () => {
    const service = [];

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
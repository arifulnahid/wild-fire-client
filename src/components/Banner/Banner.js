import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="h-96 lg:h-96 sm:h-64">
            <Carousel>
                <img
                    src="https://i.ibb.co/ZNxCScD/New-Project-2.jpg"
                    alt="banner2"
                />
                <img
                    src="https://i.ibb.co/jvGbtZY/travel-agency-facebook-cover-web-banner-design-template-268949-142.jpg"
                    alt="banner3"
                />
                <img
                    src="https://i.ibb.co/0DYvJcZ/travel-agency-template-banner-23-2148636211.jpg"
                    alt="banner4"
                />
            </Carousel>
        </div>
    );
};

export default Banner;
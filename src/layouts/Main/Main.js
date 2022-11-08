import { Flowbite } from 'flowbite-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import Navabr from '../../components/Navbar/Navabr';

const Main = () => {
    return (
        <div>
            <Flowbite>
                <Navabr></Navabr>
                <Outlet></Outlet>
                <FooterComponent></FooterComponent>
            </Flowbite>
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import Navabr from '../../components/Navbar/Navabr';

const Main = () => {
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Main;
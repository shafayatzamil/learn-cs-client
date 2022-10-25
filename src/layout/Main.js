import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import './Main.css';

const Main = () => {
    return (
        <div className='background-set'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
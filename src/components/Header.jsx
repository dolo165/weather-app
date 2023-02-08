import React from 'react';
import module from  './Header.module.scss'
import {Link, Outlet } from "react-router-dom";
import App from '../App';
import Bishkek from '../pages/Bishkek'
import Moscow from '../pages/Moscow'

function Header(props) {    
    return (
        <>
            <header className={module.header}>
                <nav className={module.nav}>
                <ul className={module.ul}>
                    <li className={module.li}>
                        <Link to="/">Search</Link>
                    </li>
                    <li className={module.li}>
                        <Link to="/bishkek">Bishkek</Link>
                    </li >
                    <li className={module.li}>
                        <Link to="/moscow">Moscow</Link>
                    </li>
                </ul>
                </nav>
                <h1 className={module.h1}>Weather forecast</h1>            
            </header> 
            <Outlet />
        </>  
    );
}

export default Header
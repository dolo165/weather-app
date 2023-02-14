import React from 'react';
import module from  './Header.module.scss'
import {Link, Outlet } from "react-router-dom";
    
function Header(props) {   
    // let menuBtn = document.querySelector('.menu_btn');
    // let menu = document.querySelector('.ul');
    // menuBtn.addEventListener('click', function(){
    //     menuBtn.classList.toggle('active');
    //     menu.classList.toggle('active');
    // });
    return (
        <>
            <header className={module.header}>
                <nav className={module.nav}>
                    {/* <div className={module.menu_btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div> */}
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
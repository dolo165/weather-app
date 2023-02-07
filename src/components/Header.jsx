import React from 'react';
import module from  './Header.module.scss'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Bishkek from '../pages/Bishkek'
import Moscow from '../pages/Moscow'

function Header(props) {    
    return (
        // <Router>
            <header className={module.header}>
                <nav className={module.nav}>
                    <ul className={module.ul}>
                        {/* <li className={module.li}>
                            <Link to="/App">Search</Link>
                        </li>
                        <li className={module.li}>
                            <Link to="/Bishkek">Bishkek</Link>
                        </li>
                        <li className={module.li}>
                            <Link to="/Moscow">Moscow</Link>
                        </li> */}
                    </ul>
                </nav>
                {/* <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/Bishkek">
                        <Bishkek />
                    </Route>
                    <Route path="/Moscow">
                        <Moscow />
                    </Route>
                </Switch> */}
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<App />}>
              <Route path="Search" element={<App />} />
              <Route path="Bishkek" element={<Bishkek />} />
              <Route path="Moscow" element={<Moscow />} />
            </Route>
            </Routes>
             </BrowserRouter>
                <h1 className={module.h1}>Weather forecast</h1>            
            </header> 
        //</Router>     
    );
}

export default Header
import React from 'react';
import HomeHeader from "../Home/HomeHeader";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <>
            <HomeHeader/>
            <section className="logout" id="logout">
                <h3 className="title">Wylogowanie nastąpiło <br/> pomyślnie!</h3>
                <ul className="logout__ul">
                    <li className="logout__el">
                        <Link to="/">Strona główna</Link>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Logout;
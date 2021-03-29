import React from "react";
import HomeHeader from "../Home/HomeHeader";

function  Login(){
    return(
        <>
            <HomeHeader/>
            <section className="login" id="login">
                <h2 className="title">Zaloguj się</h2>
            </section>
        </>
    );
}

export default Login;
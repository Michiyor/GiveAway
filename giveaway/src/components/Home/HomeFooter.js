import React from "react";
import fb from "./../../assets/Facebook.svg";
import insta from "./../../assets/Instagram.svg";

function HomeFooter() {
    return(
        <section className="homeFooter" id="footer">
            <h5 className="footer__title">Copyright by Coders Lab</h5>
            <img className="icon" src={fb} alt="facebook icon"/>
            <img className="icon" src={insta} alt="instagram icon"/>
        </section>
    );
}

export default HomeFooter;
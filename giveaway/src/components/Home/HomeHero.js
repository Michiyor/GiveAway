import React, {Component} from "react";
import imageHero from "./../../assets/Home-Hero-Image.jpg"
import {Link} from "react-router-dom";

class HomeHero extends Component {
    render() {
        return (
            <section className="home__hero" id="hero">
                <img className="image hero__img" alt="stuff" src={imageHero}/>
                <div>
                    <h1 className="hero__title">Zacznij pomagać! <br/>
                        Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <ul className="hero__list">
                        <li className="link" ><Link to="/login" className="hero__link">ODDAJ <br/> RZECZY</Link></li>
                        <li className="link" ><Link to="/login" className="hero__link">ZORGANIZUJ ZBIÓRKĘ</Link></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default HomeHero;
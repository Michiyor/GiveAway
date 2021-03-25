import React, {Component} from "react";
import imageHero from "./../../assets/Home-Hero-Image.jpg"

class HomeHero extends Component {
    render() {
        return (
            <section className="home__hero" id="hero">
                <img className="hero__img" alt="stuff" src={imageHero}/>
                <div>
                    <h1 className="hero__title">Zacznij pomagać! <br/>
                        Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <ul className="hero__list">
                        <li ><button href="/" className="hero__link">ODDAJ <br/> RZECZY</button></li>
                        <li ><button href="/" className="hero__link">ZORGANIZUJ ZBIÓRKĘ</button></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default HomeHero;
import React, {Component} from "react";
import imageHero from "./../../assets/Home-Hero-Image.jpg"

class HomeHero extends Component {
    render() {
        return (
            <section className="home__main">
                <img alt="stuff" src={imageHero}/>
                <div>
                    <h1 className="title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
            </section>
        );
    }
}

export default HomeHero;
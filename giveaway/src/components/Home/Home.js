import React from "react";
import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";
import HomeAboutUs from "./HomeAboutUs";
import HomeThreeColumns from "./HomeThreeColumns";

function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeHero/>
            <HomeThreeColumns/>
            <HomeAboutUs/>
        </div>
    );

}

export default Home;
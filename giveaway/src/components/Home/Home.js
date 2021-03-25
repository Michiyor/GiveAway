import React from "react";
import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";
import HomeAboutUs from "./HomeAboutUs";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";

function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeHero/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
        </div>
    );

}

export default Home;
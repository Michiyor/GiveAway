import React from "react";
import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";
import HomeAboutUs from "./HomeAboutUs";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeHelp from "./HomeHelp";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeHero/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeHelp/>
            <HomeContact/>
            <HomeFooter/>
        </div>
    );
}

export default Home;
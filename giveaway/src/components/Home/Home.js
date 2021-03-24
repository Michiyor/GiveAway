import React from "react";
import HomeHero from "./HomeHero";
import HomeHeader from "./HomeHeader";

function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeHero/>
        </div>
    );

}

export default Home;
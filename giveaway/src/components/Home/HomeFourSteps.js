import React from "react";
import tshirt from "./../../assets/Icon-1.svg";
import bag from "./../../assets/Icon-2.svg";
import magnifier from "./../../assets/Icon-3.svg";
import recycle from "./../../assets/Icon-4.svg";
import {Link} from "react-router-dom";


function HomeFourSteps() {
    return (
        <section className="homeFourSteps" id="fourSteps">
            <h2 className="title">Wystarczą 4 proste kroki</h2>
            <div className="fourSteps__paragraphs">
                <div className="fourSteps__column">
                    <img src={tshirt} alt="tshirt" className="fourSteps__img"/>
                    <h3 className="fourSteps__subtitle">Wybierz rzeczy</h3>
                    <p className="fourSteps__text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="fourSteps__column">
                    <img src={bag} alt="tshirt" className="fourSteps__img"/>
                    <h3 className="fourSteps__subtitle">Spakuj je</h3>
                    <p className="fourSteps__text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="fourSteps__column">
                    <img src={magnifier} alt="tshirt" className="fourSteps__img"/>
                    <h3 className="fourSteps__subtitle">Zdecyduj komu chcesz pomóc</h3>
                    <p className="fourSteps__text">wybierz zaufane miejsce</p>
                </div>
                <div className="fourSteps__column">
                    <img src={recycle} alt="tshirt" className="fourSteps__img"/>
                    <h3 className="fourSteps__subtitle">Zamów kuriera</h3>
                    <p className="fourSteps__text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="fourSteps__btn">
                <Link to="/login" className="btn link">ODDAJ <br/>RZECZY</Link>
            </div>
        </section>
    )
}

export default HomeFourSteps;
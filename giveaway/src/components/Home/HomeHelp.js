import React from "react";

function HomeHelp() {
    return(
        <section className="homeHelp" id="help">
            <h2 className="title">Komu pomagamy?</h2>
            <ul className="help__list">
                <li><button className="help__btn">Fundacjom</button></li>
                <li><button className="help__btn">Organizacjom pozarządowym</button></li>
                <li><button className="help__btn">Lokalnym zbiórkom</button></li>
            </ul>
            <p className="help__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </section>
    )
}

export default HomeHelp;
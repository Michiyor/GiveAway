import React from "react";

function HomeHelp() {
    return (
        <section className="homeHelp" id="help">
            <h2 className="title">Komu pomagamy?</h2>
            <ul className="help__list">
                <li>
                    <button className="help__btn">Fundacjom</button>
                </li>
                <li>
                    <button className="help__btn">Organizacjom pozarządowym</button>
                </li>
                <li>
                    <button className="help__btn">Lokalnym zbiórkom</button>
                </li>
            </ul>
            <div className="help__fundations container">
                <p className="help__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/>
                    którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/>
                    komu pomagają i czego potrzebują.
                </p>
            </div>
        </section>
    )
}

export default HomeHelp;
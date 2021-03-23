import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <section className="header">
                <ul className="header__ul">
                    <li className="header__logreg"><a href="/">Zaloguj</a></li>
                    <li className="header__logreg"><a href="/">Załóż konto</a></li>
                </ul>
                <ul className="header__ul list" id="menu">
                    <li className="header__menu">Start</li>
                    <li className="header__menu">O co chodzi?</li>
                    <li className="header__menu">O nas</li>
                    <li className="header__menu">Fundacja i organizacje</li>
                    <li className="header__menu">Kontakt</li>
                </ul>
            </section>
        );
    }
}

export default Home;
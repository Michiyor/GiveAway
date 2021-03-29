import React, {Component} from "react";
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

class HomeHeader extends Component {
    render() {
        return (
            <section className="header container">
                <ul className="header__ul">
                    <li className="header__logreg">
                        <Link to="/login">Zaloguj</Link>
                    </li>
                    <li className="header__logreg">
                        <Link to="/register">Załóż konto</Link>
                    </li>
                </ul>
                <ul className="header__ul list" id="menu">
                    <li className="header__menu" >Start</li>
                    <li className="header__menu">
                        <ScrollLink activeClass="active"
                              to="threeColumns"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration={500}
                              delay={1000}
                        >
                            O co chodzi?
                        </ScrollLink>
                    </li>
                    <li className="header__menu">
                        <ScrollLink activeClass="active"
                                    to="aboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    delay={1000}
                        >
                            O nas
                        </ScrollLink>
                    </li>
                    <li className="header__menu">
                        <ScrollLink activeClass="active"
                                    to="help"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    delay={1000}
                        >
                            Fundacja i organizacje
                        </ScrollLink>
                    </li>
                    <li className="header__menu">
                        <ScrollLink activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    delay={1000}
                        >
                            Kontakt
                        </ScrollLink>
                    </li>
                </ul>
            </section>
        );
    }
}

export default HomeHeader;
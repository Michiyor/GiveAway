import React, {useState} from "react";
import HomeHeader from "../Home/HomeHeader";
import {Link} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState({email: ""});

    const handleChangeEmailLogin = (e) => {
        const {email, value} = e.target;
        setEmail(prevState => {
            return {
                ...prevState,
                [email]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <>
            <HomeHeader/>
            <section className="login" id="login">
                <h2 className="title">Zaloguj się</h2>
                <div className="login__main">
                    <form className="pages__form" onSubmit={handleSubmit}>
                        <label className="contact__msg-label" htmlFor="email">Wpisz swojego emaila </label>
                        <input className="login__el" id="email" placeholder="jan.nowak@gmail.com" type="text"
                               name="email" value={email.name}
                               onChange={handleChangeEmailLogin}/>
                        <label className="contact__msg-label" htmlFor="passsword">Wpisz swoje hasło</label>
                        <input id="password" className="login__el"
                               placeholder="Wpisz swoje hasło">
                        </input>
                        <ul className="login__ul">
                            <li className="login__logreg">
                                <Link to="/register">Załóż konto</Link>
                            </li>
                            <li className="login__logreg">
                                <Link to="/login">Zaloguj</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;
import React, {useState} from 'react';
import blankets from "./../../assets/Background-Contact-Form.jpg";
import ValidationResult from "../validations/Validation-cnt";

const HomeContact = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [errorName, setErrorName] = useState("none");
        const [errorEmail, setErrorEmail] = useState("none");
        const [errorMsg, setErrorMsg] = useState("none");
        const [success, setSuccess] = useState("none");

        const nameCheck = (el) => {
            if (el.includes(" ")) {
                setErrorName("block");
            } else {
                setName(el);
                setErrorName("none");
            }
        }
        const mailCheck = (el) => {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(el)) {
                setEmail(el);
                setErrorEmail("none");
            } else {
                setErrorEmail("block");
            }
        }
        const msgCheck = (el) => {
            if (el.length < 120) {
                setErrorMsg("block");
            } else {
                setMessage(el);
                setErrorMsg("none");
            }
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                })
            }
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', requestOptions)
                .then(
                    (response) => (response.json())
                ).then((response) => {
                if (name.length > 0 && email.length > 0 && message.length > 0 && response.status === 'success') {
                    setSuccess("block");
                } else if (response.status === 'fail') {
                    alert("Message failed to send.")
                }
            })
        }

        return (
            <>
                <section className="homeContact" id="contact" style={{backgroundImage: `url(${blankets})`}}>
                    <div className="contact__main">
                        <form className="contact__form" onSubmit={(e) => handleSubmit(e)}>
                            <h3 className="title">Skontaktuj się z nami</h3>
                            <div className="contact__labels">
                                <label className="label" htmlFor="name"> Wpisz swoje imię</label>
                                <label className="label" htmlFor="email">Wpisz swojego emaila </label>
                            </div>
                            <input
                                className="contact__el"
                                id="name"
                                placeholder="Jan"
                                type="text"
                                name="name"
                                value={name.name}
                                onChange={(e) => nameCheck(e.target.value)}
                            />
                            <ValidationResult
                                display={errorName}
                                color={"red"}
                                text={"Podane imię jest nieprawidłowe!"}
                            />
                            <input
                                className="contact__el"
                                id="email"
                                placeholder="jan.nowak@gmail.com"
                                type="text"
                                name="email"
                                value={email.name}
                                onChange={(e) => mailCheck(e.target.value)}
                            />
                            <ValidationResult
                                display={errorEmail}
                                color={"red"}
                                text={"Podany email jest nieprawidłowy!"}
                            />
                            <label className="contact__msg-label" htmlFor="msg">Wpisz swoją wiadomość</label>
                            <textarea
                                onChange={(e) => msgCheck(e.target.value)}
                                value={message.name}
                                id="msg"
                                minLength="120"
                                className="contact__msg"
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                cols="50"
                                rows="6">
                    </textarea>
                            <ValidationResult
                                display={errorMsg}
                                color={"red"}
                                text={"Wiadomość musi mieć conajmniej 120 znaków!"}
                            />
                            <input
                                className="contact__btn"
                                type="submit"
                                id="validate"
                                value="Wyślij"
                                onClick={handleSubmit}
                            />
                        </form>
                        <ValidationResult
                            display={success}
                            color={"green"}
                            text={"Wiadomość została wysłana! Wkrótce się skontaktujemy"}
                        />
                    </div>

                </section>
            </>
        );
    }
;

export default HomeContact;